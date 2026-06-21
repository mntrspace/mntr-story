#!/usr/bin/env node
// ---------------------------------------------------------------------------
// Sensitivity scanner for this PUBLIC repo.
//
// Blocks secrets and private content from being committed/pushed. Invoked by
// the git hooks in .githooks/, and runnable any time via `npm run check`.
//
// Usage:
//   node scripts/check-sensitive.mjs --all      scan all tracked files (pre-push, npm run check)
//   node scripts/check-sensitive.mjs --staged   scan staged changes only (pre-commit)
//
// Overrides (think of these as YOUR explicit permission):
//   ALLOW_SENSITIVE=1   downgrade PRIVATE-content findings to warnings. Secrets still block.
//   sensitivity-ok      put this marker on a line to skip findings on that one line.
//   --no-verify         (git flag) skips the hook entirely - the deliberate full bypass.
//
// Exit code: 0 = clean (or only warnings), 1 = blocking findings.
//
// Tune the pattern lists below as needed. This file scans everything EXCEPT
// itself and the policy/doc files (see FULL_IGNORE / PRIVATE_EXEMPT).
// ---------------------------------------------------------------------------

import { execFileSync } from "node:child_process";
import { readFileSync, existsSync, statSync } from "node:fs";

// -- Patterns ---------------------------------------------------------------

// Secrets - ALWAYS block (not overridable via ALLOW_SENSITIVE).
const SECRET_RULES = [
  { name: "Private key block", re: /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----/ },
  { name: "Service-account JSON", re: /"type"\s*:\s*"service_account"/ },
  { name: "GitHub token", re: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { name: "OpenAI / Anthropic key", re: /\bsk-(?:ant-)?[A-Za-z0-9_-]{20,}\b/ },
  { name: "AWS access key id", re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: "Slack token", re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  { name: "Google API key", re: /\bAIza[0-9A-Za-z_-]{35}\b/ },
  {
    name: "Hardcoded credential",
    re: /\b(?:api[_-]?key|secret|client[_-]?secret|access[_-]?token|auth[_-]?token|password|passwd)\b\s*[:=]\s*['"]?[A-Za-z0-9_\-./+=]{16,}['"]?/i,
    ignoreIf:
      /(example|placeholder|your[_-]|xxxx|changeme|redacted|<[^>]+>|\.\.\.|process\.env|import\.meta\.env)/i,
  },
];

// Private / personal content - block by default; ALLOW_SENSITIVE=1 downgrades to warning.
const PRIVATE_RULES = [
  {
    name: "Salary / comp term",
    re: /\b(?:salary|ESOP|RSUs?|cap\s?table|fully[-\s]?diluted|vested\s+options|in[-\s]?hand|CTC|take[-\s]?home pay)\b/i,
  },
  { name: "Rupee amount", re: /₹\s?[\d,]{2,}/ },
  {
    name: "Vault private path",
    re: /(?:mntr-obsidian-space|03 Personal|Salary Negotiations|01 Daily)\b/,
  },
  { name: "PAN number", re: /\b[A-Z]{5}[0-9]{4}[A-Z]\b/ },
];

// File NAMES that must never be committed (regardless of contents).
const FILENAME_RULES = [
  { name: "Env file", re: /(?:^|\/)\.env(?:\.[A-Za-z0-9]+)?$/, allow: /\.env\.example$/ },
  { name: "Private key file", re: /\.(?:pem|key|p12|pfx)$/ },
  { name: "SSH key", re: /(?:^|\/)id_(?:rsa|ed25519|ecdsa)$/ },
  {
    name: "Credentials file",
    re: /(?:service[_-]?account|credentials?)[^/]*\.(?:json|ya?ml)$/i,
  },
];

// Never scanned (binary/vendored/the scanner's own machinery).
const SKIP_EXT =
  /\.(?:png|jpe?g|gif|webp|ico|svg|avif|woff2?|ttf|otf|eot|pdf|mp4|mov|webm|zip|gz|lockb)$/i;
const FULL_IGNORE = [
  "scripts/check-sensitive.mjs",
  ".githooks/pre-commit",
  ".githooks/pre-push",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "bun.lock",
];
// Scanned for SECRETS, but exempt from PRIVATE rules (they describe the policy).
const PRIVATE_EXEMPT = ["CLAUDE.md", "README.md", "SECURITY.md", "package.json"];

const MAX_BYTES = 1_500_000;

// -- Helpers ----------------------------------------------------------------

function git(args) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
    maxBuffer: 50_000_000,
  });
}

function listFiles(mode) {
  try {
    const out =
      mode === "--staged"
        ? git(["diff", "--cached", "--name-only", "--diff-filter=ACM"])
        : git(["ls-files"]);
    return out.split("\n").map((s) => s.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function readContent(file, mode) {
  try {
    if (mode === "--staged") return git(["show", `:${file}`]);
    if (!existsSync(file) || statSync(file).size > MAX_BYTES) return null;
    return readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

// -- Scan -------------------------------------------------------------------

const mode = process.argv.includes("--staged") ? "--staged" : "--all";
const allowPrivate = process.env.ALLOW_SENSITIVE === "1";
const files = listFiles(mode);

const blocking = [];
const warnings = [];

for (const file of files) {
  if (FULL_IGNORE.includes(file) || SKIP_EXT.test(file)) continue;

  for (const r of FILENAME_RULES) {
    if (r.re.test(file) && !(r.allow && r.allow.test(file))) {
      blocking.push({ file, lineNum: 0, line: file, rule: `${r.name} (filename)`, kind: "secret" });
    }
  }

  const content = readContent(file, mode);
  if (content == null) continue;
  if (content.includes(String.fromCharCode(0))) continue; // skip binary (NUL byte)

  const exemptPrivate = PRIVATE_EXEMPT.includes(file);

  content.split("\n").forEach((line, i) => {
    if (line.includes("sensitivity-ok")) return; // inline allowlist
    for (const r of SECRET_RULES) {
      if (r.re.test(line) && !(r.ignoreIf && r.ignoreIf.test(line))) {
        blocking.push({ file, lineNum: i + 1, line, rule: r.name, kind: "secret" });
      }
    }
    if (!exemptPrivate) {
      for (const r of PRIVATE_RULES) {
        if (r.re.test(line)) {
          const finding = { file, lineNum: i + 1, line, rule: r.name, kind: "private" };
          (allowPrivate ? warnings : blocking).push(finding);
        }
      }
    }
  });
}

// -- Report -----------------------------------------------------------------

const clip = (s) => {
  const t = s.trim();
  return t.length > 120 ? `${t.slice(0, 117)}...` : t;
};

function printFinding(f) {
  const loc = f.lineNum ? `${f.file}:${f.lineNum}` : f.file;
  console.error(`  - [${f.kind}] ${f.rule}  ${loc}`);
  if (f.lineNum) console.error(`        ${clip(f.line)}`);
}

if (warnings.length) {
  console.error(`\n[allowed via ALLOW_SENSITIVE=1] ${warnings.length} private-content match(es):`);
  warnings.forEach(printFinding);
}

if (blocking.length) {
  console.error(`\n[BLOCKED] Sensitivity check FAILED - ${blocking.length} blocking finding(s):\n`);
  blocking.forEach(printFinding);

  const hasSecret = blocking.some((f) => f.kind === "secret");
  const hasPrivate = blocking.some((f) => f.kind === "private");
  console.error("\nHow to resolve:");
  console.error("  1. Remove the flagged content (preferred).");
  if (hasPrivate) {
    console.error("  2. If this private content is safe to publish, re-run with:");
    console.error("       ALLOW_SENSITIVE=1 git push        (or git commit)");
  }
  console.error("  3. False positive? add the marker  sensitivity-ok  to that line.");
  if (hasSecret) {
    console.error("  !! SECRET findings are never auto-overridable. If you are 100% certain,");
    console.error("     deliberately bypass ALL checks with:  git push --no-verify");
  }
  console.error("");
  process.exit(1);
}

console.log(`[OK] Sensitivity check passed - ${files.length} files scanned (mode ${mode}).`);
process.exit(0);
