// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit this file to update the site — components are pure presentation.
// Curated public subset of mantra.manan's bio. Do NOT add private info here.
// ─────────────────────────────────────────────────────────────────────────

export type Social = { label: string; href: string; handle: string };
export type Achievement = { metric: string; title: string; description: string };
export type Quote = { text: string; author: string | null };
export type Experience = {
  company: string;
  companyUrl: string | null;
  role: string;
  period: string;
  location: string;
  note: string;
  quote: Quote | null;
};
export type SkillGroup = { category: string; items: string[] };
export type Project = { name: string; period: string; description: string; href: string | null };
export type Education = { school: string; period: string; detail: string };
export type Volunteer = { org: string; period: string };
export type ExternalLink = { label: string; description: string; href: string };

export const profile = {
  name: "Mantra Manan Saraswat",
  nickname: "Mantr",
  tagline:
    "Perpetually Work-in-Progress · Product, Strategy & Growth · AI, B2B · BITS Pilani",
  intro:
    "In life, it's crucial to have a clear direction — but it's equally important to reflect on where you come from. I'm a strong believer in retrospection, and this page serves that purpose for me: a glimpse into my journey.",
  traits: [
    "Extremely detail-oriented, data-driven and methodical",
    "Like to talk in bullet points",
    "Learning to move fast (and avoid breaking things in the process)",
  ],
  summary: [
    "Product Manager with 5 years of experience across product, growth, sales, and strategy — leading engineering-driven B2B teams to build developer-focused and AI-powered products.",
    "Skilled in customer-centric roadmaps and ruthless prioritization, delivering enterprise solutions that have generated over $1M in ARR.",
    "Experienced in both 0-to-1 discovery and 1-to-10 growth — aligning product vision with business goals to drive long-term value.",
  ],
};

export const socials: Social[] = [
  { label: "Email", href: "mailto:mantra.manan@gmail.com", handle: "mantra.manan@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mantra-manan", handle: "in/mantra-manan" },
  { label: "GitHub", href: "https://github.com/mntrspace", handle: "@mntrspace" },
  { label: "X", href: "https://x.com/mntr_space", handle: "@mntr_space" },
  { label: "Instagram", href: "https://www.instagram.com/themantramanan/", handle: "@themantramanan" },
  { label: "YouTube", href: "https://www.youtube.com/@mntr_space", handle: "@mntr_space" },
  { label: "Behance", href: "https://www.behance.net/mntr_space", handle: "mntr_space" },
  { label: "Book a call", href: "https://calendar.app.google/Dp7zrsoyp29fAvJCA", handle: "Calendar" },
];

export const achievements: Achievement[] = [
  {
    metric: "4 pilots",
    title: "AI Voice Agents for Healthcare",
    description:
      "Built the first version of AI voice agents + customer dashboard, leading branding and demos to secure 4 pilot customers in US healthcare.",
  },
  {
    metric: "$1.5M",
    title: "US Telehealth Product Strategy",
    description:
      "Owned product strategy for US Telehealth, built accessibility features, implemented HIPAA, and enabled $1.5M of accounts to go live with 100ms.",
  },
  {
    metric: "25K → 184K",
    title: "Instagram Growth at Zwende",
    description:
      "Grew Zwende's Instagram from 25K to 184K in 20 months (70K→100K in just 45 days), lifting engagement from 0.51% to 1.93%.",
  },
];

export const experiences: Experience[] = [
  {
    company: "100ms",
    companyUrl: "https://www.100ms.ai/",
    role: "Product Manager",
    period: "Apr 2023 — Present",
    location: "Abu Dhabi, UAE / San Francisco, USA",
    note: "Building agentic AI for US healthcare — voice agents, customer dashboard, and the product strategy behind them.",
    quote: null,
  },
  {
    company: "100ms",
    companyUrl: "https://www.100ms.ai/",
    role: "Growth Lead",
    period: "May 2022 — Mar 2023",
    location: "Bengaluru, IN / Abu Dhabi, UAE",
    note: "Surrounded by incredibly smart people and endless opportunities to grow and explore the business. It taught me to love what you do, take ownership, and persevere — plus a truly global experience meeting customers, attending events, and living in different countries.",
    quote: { text: "If you're the smartest person in the room, you're in the wrong room.", author: "Confucius" },
  },
  {
    company: "Zwende",
    companyUrl: "https://www.zwende.com/",
    role: "Product & Growth Analyst",
    period: "May 2020 — Apr 2022",
    location: "Bengaluru, IN / Remote",
    note: "Online managed marketplace for customizable lifestyle products and art & craft workshops. Drove growth and shipped 0-to-1 features during the COVID pivot.",
    quote: null,
  },
  {
    company: "Zwende",
    companyUrl: "https://www.zwende.com/",
    role: "Intern — Business Analyst",
    period: "May 2019 — Jul 2019",
    location: "Bengaluru, IN",
    note: "My first major professional breakthrough — invaluable lessons in discipline and navigating work outside my comfort zone. Where I first learned the art of overcommitting and successfully delivering results.",
    quote: { text: "What doesn't kill you, makes you stronger.", author: "Nietzsche" },
  },
  {
    company: "Vinayak Buildtech",
    companyUrl: null,
    role: "Intern — Construction Management",
    period: "May 2018 — Aug 2018",
    location: "Udaipur, IN",
    note: "Real-estate developer in Udaipur. This gave me time to rule out two paths I didn't want — field jobs in Civil Engineering and Actuarial Science (I cleared a couple of papers before realizing it wasn't the fit).",
    quote: { text: "In the quiet of solitude, we find clarity.", author: null },
  },
  {
    company: "Mapped",
    companyUrl: null,
    role: "Co-founder",
    period: "Dec 2016 — Aug 2018",
    location: "Remote",
    note: "An advertising & marketing startup with its own production arm — born from a casual evening of brainstorming with friends. We were onto trends that would shape content for years; competing priorities meant it never reached full potential.",
    quote: {
      text: "If you're not excited about the thing you're building, then no one else will be either.",
      author: "Ben Horowitz, The Hard Thing About Hard Things",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Product Management & Strategy",
    items: ["Roadmap Planning", "Agile/Scrum (JIRA, DevRev)", "GTM Strategy", "Pricing", "Monetization", "User Research", "Project Management"],
  },
  {
    category: "Technical",
    items: ["Python", "REST APIs", "Postman", "Documentation", "Front-end Development", "Scripting"],
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Google Analytics", "Mixpanel", "Amplitude", "Looker", "A/B Testing", "Dashboarding"],
  },
  {
    category: "Growth, Marketing & Ops",
    items: ["Event Marketing", "Webinars", "CRO", "Marketing Ops (HubSpot)", "Content", "CRM", "SEM & Paid Ads", "Email Marketing"],
  },
  {
    category: "UX & Customer Research",
    items: ["Wireframing (Figma, Balsamiq)", "Customer Journey Mapping", "Usability Testing", "Website Building"],
  },
  {
    category: "Content & Creative",
    items: ["Video Editing", "Photography", "Cinematography"],
  },
];

export const projects: Project[] = [
  {
    name: "CineBard",
    period: "Apr 2020",
    description: "A UI/UX prototype of a movie recommendation app.",
    href: "https://invis.io/P3WZS8SX76S",
  },
  {
    name: "Project Digital Pilani",
    period: "Feb 2017",
    description: "Converted Rayla village into a cashless economy — door-to-door surveys and bilingual documentation to drive digital-payments adoption.",
    href: "https://www.youtube.com/watch?v=LoQyMiSIfIA",
  },
  {
    name: "Tunnel Modelling for Subsidence",
    period: "Aug 2019 — May 2020",
    description: "Tunnel subsidence modelling in Simulia Abaqus.",
    href: null,
  },
  {
    name: "Constitutive Models of Concrete",
    period: "Jan 2020 — Jun 2020",
    description: "A study on the constitutive models of concrete in Abaqus.",
    href: null,
  },
  {
    name: "Construction Planning & Technology",
    period: "Jan 2019 — May 2020",
    description: "Designed a building in Autodesk Revit — scheduling, resource management, MEP services, green-building and solar analysis.",
    href: null,
  },
];

export const education: Education[] = [
  {
    school: "Birla Institute of Technology & Science, Pilani",
    period: "2016 — 2021",
    detail: "B.E. Civil Engineering · M.Sc. Physics (Honours)",
  },
  {
    school: "Institute of Actuaries of India",
    period: "2018 — 2020",
    detail: "Actuarial Science (cleared a couple of papers)",
  },
  {
    school: "St. Anne's Senior Secondary School, Jodhpur",
    period: "2005 — 2015",
    detail: "Class XII (CBSE): 90% · Class X (CBSE): 10/10 CGPA",
  },
];

export const academicAchievements: string[] = [
  "BITSAT 2016 — 331/450",
  "JEE Advanced 2016 — Rank 7,853 of 200K+ applicants",
];

export const volunteer: Volunteer[] = [
  { org: "Dept. of External Affairs, BITS Pilani", period: "Aug 2016 — Apr 2019" },
  { org: "Microsoft Student Partner, BITS Pilani", period: "Aug 2016 — Aug 2017" },
  { org: "Centre for Entrepreneurial Leadership", period: "Sep 2016 — May 2017" },
];

export const interesting: ExternalLink[] = [
  {
    label: "Quote Off",
    description: "A running collection of quotes I love.",
    href: "https://mntr-space.notion.site/Quote-Off-1a4467023265809bb765fa4e23b721fe",
  },
  {
    label: "Shelf-Worthy — Book List",
    description: "Books worth your shelf.",
    href: "https://mntr-space.notion.site/Shelf-Worthy-Book-List-1a446702326580f68431d0f87234cebf",
  },
];

export const horizonQuote =
  "To that sublime reach I seek to fly, where the horizon meets the sky";
