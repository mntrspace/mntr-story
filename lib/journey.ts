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
    note: "A startup born from a casual evening of brainstorming with friends. It could have been something big — we were onto ideas and trends that would shape the next few years of content. Personal priorities, college commitments and a communication breakdown meant it never reached its full potential.",
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
    note: "This opportunity gave me the time to rule out two paths I didn't want to pursue. I decided against field jobs in Civil Engineering and briefly explored Actuarial Science — even clearing a couple of papers — before realizing it wasn't the right fit for me.",
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
    note: "Zwende marked the first major breakthrough in my professional journey. It taught me invaluable lessons in discipline and how to navigate and deliver on things outside my comfort zone. It's where I first learned the art of overcommitting and successfully delivering results.",
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
    note: "At 100ms I was surrounded by incredibly smart people, which gave me endless opportunities to grow and explore the business. It taught me to love what you do, take accountability and ownership, and persevere — plus a truly global experience: meeting fascinating people, engaging with customers, attending events, and living in different countries.",
  },
];
