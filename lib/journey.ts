// The journey — Mantra's story as an ordered timeline (rendered at /journey).
//
// NOTE: `note` is the personal "what I learned" line.
//   - work notes are seeded from lib/content.ts experiences (edit to taste);
//   - birth/education notes are EMPTY placeholders for Mantra to write.
// Achievement `date`s are INFERRED from role periods — correct as needed.

import { bitsProjects, type Project } from "@/lib/content";

export type Milestone = {
  id: string;
  kind: "birth" | "education" | "work";
  icon: string;
  org: string;
  blurb?: string;
  logo?: string;
  logoW?: number;
  logoH?: number;
  period: string;
  location?: string;
  roles?: { title: string; period: string }[];
  achievements?: { title: string; metric: string; date: string }[];
  projects?: Project[];
  note?: string;
};

export const journey: Milestone[] = [
  {
    id: "born",
    kind: "birth",
    icon: "♊",
    org: "Born",
    blurb: "A Gemini, in Jodhpur",
    period: "May 1996",
    location: "Jodhpur, India",
    note: "",
  },
  {
    id: "stannes",
    kind: "education",
    icon: "🎓",
    org: "St. Anne's Sr. Sec. School",
    blurb: "Where it all started",
    logo: "/logos/stannes.png",
    logoW: 300,
    logoH: 78,
    period: "2005 — 2015",
    location: "Jodhpur, India",
    achievements: [
      { title: "Class XII · CBSE", metric: "90%", date: "2015" },
      { title: "Class X · CBSE", metric: "10/10 CGPA", date: "2013" },
    ],
    note: "",
  },
  {
    id: "bits",
    kind: "education",
    icon: "🎓",
    org: "BITS Pilani",
    blurb: "B.E. Civil Engineering · M.Sc. Physics (Hons.)",
    logo: "/logos/bits.png",
    logoW: 600,
    logoH: 198,
    period: "2016 — 2021",
    location: "Pilani, India",
    achievements: [
      { title: "BITSAT", metric: "331 / 450", date: "2016" },
      { title: "JEE Advanced", metric: "Rank 7,853", date: "2016" },
    ],
    projects: bitsProjects,
    note: "",
  },
  {
    id: "mapped",
    kind: "work",
    icon: "💼",
    org: "Mapped",
    blurb: "Advertising & marketing startup",
    logo: "/logos/mapped.jpg",
    logoW: 160,
    logoH: 160,
    period: "Dec 2016 — Aug 2018",
    location: "Remote",
    roles: [{ title: "Co-founder", period: "Dec 2016 — Aug 2018" }],
    note: "An advertising & marketing startup with its own production arm — born from a casual evening of brainstorming with friends. We were onto trends that would shape content for years; competing priorities meant it never reached full potential.",
  },
  {
    id: "vinayak",
    kind: "work",
    icon: "💼",
    org: "Vinayak Buildtech",
    blurb: "Real-estate developer, Udaipur",
    logo: "/logos/vinayak.png",
    logoW: 700,
    logoH: 56,
    period: "May — Aug 2018",
    location: "Udaipur, India",
    roles: [{ title: "Intern — Construction Management", period: "May — Aug 2018" }],
    note: "This gave me the time to rule out two paths I didn't want — field jobs in Civil Engineering and Actuarial Science (I cleared a couple of papers before realizing it wasn't the fit).",
  },
  {
    id: "zwende",
    kind: "work",
    icon: "💼",
    org: "Zwende",
    blurb: "Customizable-lifestyle marketplace",
    logo: "/logos/zwende.png",
    logoW: 300,
    logoH: 112,
    period: "2019 — 2022",
    location: "Bengaluru, India",
    roles: [
      { title: "Intern — Business Analyst", period: "May — Jul 2019" },
      { title: "Product & Growth Analyst", period: "May 2020 — Apr 2022" },
    ],
    achievements: [{ title: "Instagram growth", metric: "25K → 184K", date: "2021" }],
    note: "My first real breakthrough — discipline, delivering outside my comfort zone, and the art of overcommitting then delivering. Later drove growth and shipped 0-to-1 features through the COVID pivot.",
  },
  {
    id: "100ms",
    kind: "work",
    icon: "💼",
    org: "100ms",
    blurb: "Agentic AI for US healthcare",
    logo: "/logos/100ms.png",
    logoW: 600,
    logoH: 181,
    period: "2022 — Present",
    location: "Bengaluru · Abu Dhabi · San Francisco",
    roles: [
      { title: "Growth Lead", period: "May 2022 — Mar 2023" },
      { title: "Product Manager", period: "Apr 2023 — Present" },
    ],
    achievements: [
      { title: "US Telehealth product strategy", metric: "$1.5M live", date: "2023" },
      { title: "AI voice agents for healthcare", metric: "4 pilots", date: "2024" },
    ],
    note: "Surrounded by incredibly smart people and endless room to grow. It taught me to love what you do, take ownership, and persevere — plus a truly global experience across customers, events, and countries.",
  },
];
