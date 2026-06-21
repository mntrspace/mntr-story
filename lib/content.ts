// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit this file to update the site — components are pure presentation.
// Curated public subset of mantra.manan's bio. Do NOT add private info here.
// ─────────────────────────────────────────────────────────────────────────

export type Social = { label: string; href: string; handle: string };
export type Achievement = { metric: string; title: string; description: string };
export type Quote = { text: string; author: string | null };
export type Role = { title: string; period: string; highlights: string[] };
export type Experience = {
  company: string;
  companyUrl: string | null;
  location: string;
  roles: Role[];
  reflection: string;
  quote: Quote | null;
};
export type SkillGroup = {
  category: string;
  items: string[];
  tools?: { group: string; items: string[] }[];
};
export type Project = { name: string; period: string; description: string; href: string | null };
export type Education = {
  school: string;
  period: string;
  location: string;
  detail: string;
  highlights?: string[];
  projects?: Project[];
};
export type Volunteer = {
  org: string;
  period: string;
  role?: string;
  highlights?: string[];
};
export type ExternalLink = { label: string; description: string; href: string; external?: boolean };
export type ShowcaseGroup = {
  category: string;
  icon: string;
  items: { label: string; href?: string }[];
};

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
    location: "Abu Dhabi · San Francisco · Bengaluru",
    roles: [
      {
        title: "Product Manager",
        period: "Apr 2023 — Present",
        highlights: [
          "Led strategy, execution, marketing, pricing and billing for 15+ features and products across their full lifecycle.",
          "Call AI: shipped speaker-labelled transcription + AI summaries — 190x usage by month 3, turning it into a growing revenue line.",
          "US Telehealth: built the strategy + accessibility (Closed Captioning, SIP Calling); took $1.5M of accounts live, with a $5M+ pipeline after the Twilio Video sunset.",
          "Live streaming: shipped RTMP-In, VOD and Live Transcription — unlocking ~$150M of market potential.",
          "Collaborative Whiteboard: a top customer ask that converted 70K USD immediately and ~800K down the line.",
          "Built one of CPaaS's most robust HIPAA implementations (plus GDPR, CCPA) — key to US Telehealth market entry.",
          "Content owner: launch blogs, product newsletter, use-case + migration guides, feature/server docs, and the self-serve dashboard journey.",
        ],
      },
      {
        title: "Growth Lead",
        period: "May 2022 — Mar 2023",
        highlights: [
          "Worked directly with the COO on founder-led, cross-functional projects across product, sales, marketing and ops.",
          "Ran 3 virtual roundtables with C-level panelists — 300+ attendees each.",
          "Generated a $440K revenue pipeline through roundtables and targeted outbound.",
          "Expanded the Startup Program to 25+ accelerators & VCs; built a credit-management workflow driving $500K+ revenue from program startups.",
          "Revamped the website and product positioning for the telehealth and education verticals.",
          "Revamped & automated investor decks, MIS, billing and startup-program processes.",
        ],
      },
    ],
    reflection:
      "At 100ms I was surrounded by incredibly smart people, which gave me endless opportunities to grow and explore the business. It taught me to love what you do, take accountability and ownership, and persevere — plus a truly global experience: meeting fascinating people, engaging with customers, attending events, and living in different countries.",
    quote: { text: "If you're the smartest person in the room, you're in the wrong room.", author: "Confucius" },
  },
  {
    company: "Zwende",
    companyUrl: "https://www.zwende.com/",
    location: "Bengaluru · Remote",
    roles: [
      {
        title: "Product & Growth Analyst",
        period: "May 2020 — Apr 2022",
        highlights: [
          "Launched & marketed 'Workshop Bundles' (one-click registration) — 40x adoption in 3 months and 5x slots booked.",
          "Piloted an MVP + platform migration/integration: APIs, reporting, user/event tracking, emails and bug fixes.",
          "5x MoM revenue growth for paid workshops in 3 months via curation + marketing.",
          "Grew Instagram engagement 0.53% → 1.89% and gained 120k+ followers in a year.",
          "Lifted email open rates 9% → 17.8% and doubled CVR via A/B testing of copy/design + persona analysis.",
          "Evaluated & integrated analytics (Segment, Customer IO, GA4…); built 7 dashboards, 14 videos, 24 grids and 10+ campaigns.",
          "Wrote scripts to scrape 60k+ data points for persona analysis, ad targeting and lead generation.",
        ],
      },
      {
        title: "Intern — Business Analyst",
        period: "May 2019 — Jul 2019",
        highlights: [
          "Built Python web-scraping scripts that generated 10,000+ leads.",
          "Developed a LinkedIn lead-gen flow reaching 2,500+ users.",
          "Directed & edited 7 marketing videos that drove 100+ orders.",
        ],
      },
    ],
    reflection:
      "Zwende marked the first major breakthrough in my professional journey. It taught me invaluable lessons in discipline and how to navigate and deliver on things outside my comfort zone. It's where I first learned the art of overcommitting and successfully delivering results.",
    quote: { text: "What doesn't kill you, makes you stronger.", author: "Nietzsche" },
  },
  {
    company: "Vinayak Buildtech",
    companyUrl: null,
    location: "Udaipur, India",
    roles: [
      {
        title: "Intern — Construction Management",
        period: "May 2018 — Aug 2018",
        highlights: [
          "Interned as part of BITS Pilani's compulsory Practice School (PS-1) program.",
          "Built a Gantt-chart application; prepared material tests and QA reports.",
          "Researched & simulated solar power generation for the project.",
        ],
      },
    ],
    reflection:
      "This opportunity gave me the time to rule out two paths I didn't want to pursue. I decided against field jobs in Civil Engineering and briefly explored Actuarial Science — even clearing a couple of papers — before realizing it wasn't the right fit for me.",
    quote: { text: "In the quiet of solitude, we find clarity.", author: null },
  },
  {
    company: "Mapped",
    companyUrl: null,
    location: "Remote",
    roles: [
      {
        title: "Co-founder",
        period: "Dec 2016 — Aug 2018",
        highlights: [
          "Worked with 4 clients on their creative needs.",
          "Generated close to ₹1 Lakh in revenue.",
          "Created educational videos on varied topics (GST, Terrorism Financing, and more).",
        ],
      },
    ],
    reflection:
      "A startup born from a casual evening of brainstorming with friends. It could have been something big — we were onto ideas and trends that would shape the next few years of content. Personal priorities, college commitments and a communication breakdown meant it never reached its full potential.",
    quote: {
      text: "If you're not excited about the thing you're building, then no one else will be either.",
      author: "Ben Horowitz, The Hard Thing About Hard Things",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Product Management & Strategy",
    items: ["Roadmap Planning", "Agile/Scrum", "GTM Strategy", "Pricing", "Monetization", "User Research"],
    tools: [{ group: "Project Management", items: ["Jira (Agile/Scrum)", "Notion", "Trello", "DevRev"] }],
  },
  {
    category: "Technical",
    items: ["Python", "REST APIs", "Postman", "Documentation"],
    tools: [
      { group: "Front-end", items: ["HTML", "CSS"] },
      { group: "Scripting", items: ["Python 3"] },
      { group: "Tools", items: ["Postman", "Segment"] },
    ],
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Google Analytics", "Mixpanel", "Amplitude", "Looker", "A/B Testing"],
    tools: [
      { group: "Analysis & Dashboarding", items: ["Looker Studio", "Amplitude", "Mixpanel", "Metabase", "Clarisights"] },
      { group: "Business & Lead Intelligence", items: ["Clearbit", "MixRank", "Apptopia", "Lusha", "Slintel / 6sense"] },
    ],
  },
  {
    category: "Growth, Marketing & Ops",
    items: ["Event Marketing", "Webinars", "CRO", "Marketing Ops (HubSpot)", "Content"],
    tools: [
      { group: "CRM", items: ["Zoho", "HubSpot"] },
      { group: "SEM & Paid Ads", items: ["Facebook Ads", "LinkedIn Ad Manager"] },
      { group: "Email Marketing", items: ["Customer IO", "Twilio SendGrid", "Klaviyo", "HubSpot"] },
    ],
  },
  {
    category: "UX & Customer Research",
    items: ["Wireframing (Figma, Balsamiq)", "Customer Journey Mapping", "Usability Testing"],
    tools: [
      { group: "Design & Wireframing", items: ["Figma", "Balsamiq", "Miro", "InVision", "Whimsical", "Eraser.io"] },
      { group: "CRO & Website Analytics", items: ["Unbounce", "Hotjar", "FullStory"] },
    ],
  },
  {
    category: "Content & Creative",
    items: ["Video Editing", "Photography", "Cinematography"],
    tools: [
      { group: "Video Editing", items: ["Final Cut Pro", "iMovie"] },
      { group: "Suites", items: ["Adobe Suite", "Google Workspace", "Microsoft Office"] },
    ],
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
    description:
      "Converted Rayla village into a cashless economy — door-to-door surveys and bilingual documentation to drive digital-payments adoption.",
    href: "https://www.youtube.com/watch?v=LoQyMiSIfIA",
  },
];

// The 3 BITS engineering / coursework projects — shown under BITS education
// (homepage Education card + the journey BITS milestone).
export const bitsProjects: Project[] = [
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
    location: "Pilani, India",
    detail: "B.E. Civil Engineering · M.Sc. Physics (Honours)",
    highlights: ["CGPA: 6.82 / 10"],
    projects: bitsProjects,
  },
  {
    school: "Institute of Actuaries of India",
    period: "2018 — 2020",
    location: "India",
    detail: "Actuarial Science",
    highlights: ["Cleared ACET (Jun 2018) — 78%", "Student member; since dropped out"],
  },
  {
    school: "St. Anne's Senior Secondary School, Jodhpur",
    period: "2005 — 2015",
    location: "Jodhpur, India",
    detail: "Class XII (CBSE): 90% · Class X (CBSE): 10/10 CGPA",
    highlights: [
      "Cultural Secretary (2014–15)",
      "CBSE Clusters Basketball Team (2013–15)",
      "Music Club & Choir Lead (2012–15)",
      "School Prefect",
      "Technothlon (IIT Guwahati) — Rank 62",
    ],
  },
];

export const academicAchievements: string[] = [
  "BITSAT 2016 — 331/450",
  "JEE Advanced 2016 — Rank 7,853 of 200K+ applicants",
];

export const volunteer: Volunteer[] = [
  {
    org: "Dept. of External Affairs, BITS Pilani",
    period: "Aug 2016 — Apr 2019",
    role: "Joint Coordinator → Core Team",
    highlights: [
      "Led sponsorship generating ₹2L+ across two editions of Aarohan; cut logistics costs 47% & 14%, lifting profitability 66%.",
      "Drove the social-media + webpage initiative, growing organic reach 74%.",
      "Ran hospitality, accommodation and event curation for 80+ schools.",
    ],
  },
  {
    org: "Microsoft Student Partner, BITS Pilani",
    period: "Aug 2016 — Aug 2017",
    highlights: [
      "Managed registration, accommodation, food and logistics for 800+ participants nationwide.",
      "Handled hospitality & logistics for talks by Microsoft India leadership.",
    ],
  },
  {
    org: "Centre for Entrepreneurial Leadership",
    period: "Sep 2016 — May 2017",
    highlights: [
      "Publicity & Marketing Associate — Conquest 2017.",
      "Inauguration Head — Wadhwani Entrepreneurship Week 2017.",
      "Core Team Member — Startup Weekend 2017.",
    ],
  },
];

export const showcase: ShowcaseGroup[] = [
  {
    category: "Products",
    icon: "🏗️",
    items: [
      { label: "AI Agent Hackathon Deck (Dec 2024)" },
      { label: "100ms Interview Assignment (Mar 2022)" },
      { label: "Flipkart APM Programme Deck — Nike Run Club (Oct 2020)" },
    ],
  },
  {
    category: "Writings & Articles",
    icon: "✍🏼",
    items: [
      { label: "Superset: a seamless transition to 100ms (writer)", href: "https://www.100ms.live/blog/superset-seamless-transition-to-100ms" },
      { label: "FixHealth: leveraging AI with 100ms (writer)", href: "https://www.100ms.live/blog/fixhealth-leveraging-ai-with-100ms" },
      { label: "Transcripts & AI summaries — launch (writer)", href: "https://www.100ms.live/blog/transcript-summary-launch" },
      { label: "Measuring WebRTC call quality, Pt. 1 (editor)", href: "https://www.100ms.live/blog/measuring-webrtc-call-quality-part-1" },
      { label: "Optimizing call quality — lessons from dogfooding (editor)", href: "https://www.100ms.live/blog/optimizing-call-quality-lessons-from-dogfooding" },
      { label: "Twilio vs 100ms — call-quality comparison (editor)", href: "https://www.100ms.live/blog/twilio-vs-100ms-call-quality-comparison" },
    ],
  },
  {
    category: "Certifications",
    icon: "🎫",
    items: [
      { label: "Coursera certificate 1", href: "https://coursera.org/share/81d2c985c1b9874d09b50f43c2a60197" },
      { label: "Coursera certificate 2", href: "https://coursera.org/share/cf791ad76069361ae579223b43ba2aad" },
      { label: "Coursera certificate 3", href: "https://coursera.org/share/b4542f1f08dfe96a1c5594371133628e" },
      { label: "Coursera certificate 4", href: "https://coursera.org/share/9fc4a3af408c4cb9665356edf163dbe5" },
      { label: "Coursera certificate 5", href: "https://coursera.org/share/21351511178d03aec6653cdcae28153e" },
      { label: "Coursera certificate 6", href: "https://coursera.org/share/68a9d3972b14ec90ab28b0454632c5af" },
    ],
  },
  {
    category: "Photography & Cinematography",
    icon: "📸",
    items: [
      { label: "Instagram — @mntr_space", href: "https://www.instagram.com/mntr_space/" },
      { label: "YouTube — @mntr_space", href: "https://www.youtube.com/@mntr_space" },
    ],
  },
  {
    category: "Videos",
    icon: "📹",
    items: [
      { label: "Aarohan 2019 — After Movie (BITS Pilani)", href: "https://www.youtube.com/watch?v=5lasVV_JO7o" },
      { label: "The Walk — Brahmatal Trek", href: "https://www.youtube.com/watch?v=pQmoPVx8tx0" },
      { label: "Brahmatal Trek — iPhone Vlog", href: "https://www.youtube.com/watch?v=rTZeYz5i134" },
      { label: "Dept. of External Affairs — 2018 Orientation", href: "https://www.youtube.com/watch?v=WZKzi7FWlNI" },
      { label: "Dept. of External Affairs — BITS Pilani", href: "https://www.youtube.com/watch?v=3BhXjoc_EV0" },
      { label: "Nirvi — Bikaner Vlog (iPhone SE / Nikon D5000)", href: "https://www.youtube.com/watch?v=dys1E95Skmw" },
    ],
  },
  {
    category: "Music",
    icon: "🎶",
    items: [
      { label: "Maru Nite 2018 — Guitar Performance (BITS Pilani)", href: "https://www.youtube.com/watch?v=t-H3S7-WyVI" },
    ],
  },
  {
    category: "Experiences",
    icon: "🪂",
    items: [
      { label: "Skydiving in Dubai", href: "https://www.youtube.com/watch?v=gIpINCIoXoE" },
      { label: "Driving a Formula 3 car", href: "https://www.youtube.com/watch?v=Us8Vr5nIJvg" },
    ],
  },
];

export const interesting: ExternalLink[] = [
  {
    label: "Quote Off",
    description: "Words I keep coming back to.",
    href: "/quote-off",
  },
  {
    label: "Shelf-Worthy",
    description: "What I'm reading — on Goodreads.",
    href: "https://www.goodreads.com/user/show/138904370-mantra-manan-saraswat",
    external: true,
  },
];

export const horizonQuote =
  "To that sublime reach I seek to fly, where the horizon meets the sky";

export const pronunciation = {
  audio: "/mantra-pronunciation.m4a",
  ipa: "/ˈmʌn.trə ˈmʌ.nʌn ˈsɑː.rʌs.wʌt/",
  intro:
    "My name can be a bit tricky to pronounce, so you can call me “Mantr.” Here's an AI-generated recording of the correct pronunciation.",
  breakdown: [
    { part: "Mantra", say: "Muhn-truh", ipa: "/ˈmʌn.trə/" },
    { part: "Manan", say: "Muhn-un", ipa: "/ˈmʌ.nʌn/" },
    { part: "Saraswat", say: "Sah-ruhs-wut", ipa: "/ˈsɑː.rʌs.wʌt/" },
  ],
};
