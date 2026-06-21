import Image from "next/image";
import { logos } from "@/lib/logos";

// Renders the org/school logo if one exists for `name`; otherwise nothing.
export function OrgLogo({ name, className = "" }: { name: string; className?: string }) {
  const src = logos[name];
  if (!src) return null;
  return (
    <div className={`relative h-7 w-32 ${className}`}>
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="140px"
        className="object-contain object-left"
      />
    </div>
  );
}
