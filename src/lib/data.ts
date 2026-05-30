export type Project = {
  title: string;
  category: string;
  phase: "Brand Identity" | "Brand Growth" | "Visual Experimentation";
  image: string;
};

export const allProjects: Project[] = [
  {
    title: "FFA Palma Resources",
    category: "Renewable Energy Branding",
    phase: "Brand Identity",
    image: "/images/work/ffa-palma.png",
  },
  {
    title: "Magnum",
    category: "Streetwear & Identity Evolution",
    phase: "Brand Identity",
    image: "/images/work/magnum.png",
  },
  {
    title: "Eatopia Coffee & Eatery",
    category: "Rebranding",
    phase: "Brand Identity",
    image: "/images/work/eatopia.png",
  },
  {
    title: "Lions Tohaga",
    category: "Campaign · Golf Event with Cancer",
    phase: "Brand Growth",
    image: "/images/work/lions-tohaga.png",
  },
  {
    title: "ITWF",
    category: "A Decade of Cultural Dominion",
    phase: "Brand Growth",
    image: "/images/work/itwf-cultural-dominion.png",
  },
  {
    title: "Bank bjb",
    category: "62 Years of Banking Evolution",
    phase: "Brand Growth",
    image: "/images/work/bank-bjb.png",
  },
  {
    title: "IBCF",
    category: "Scaling the Craft Exhibition",
    phase: "Brand Growth",
    image: "/images/work/ibcf.png",
  },
  {
    title: "Hardiknas 2024",
    category: "National Event Highlight",
    phase: "Visual Experimentation",
    image: "/images/work/hardiknas-2024.png",
  },
  {
    title: "ITWF — Immersive",
    category: "The Immersive Cultural Experience",
    phase: "Visual Experimentation",
    image: "/images/work/itwf-immersive.png",
  },
  {
    title: "PLN Pusharlis",
    category: "Immersive Employee Gathering 2025",
    phase: "Visual Experimentation",
    image: "/images/work/pln-pusharlis.png",
  },
  {
    title: "SAMSUNG x GDN",
    category: "Partners Gathering 2025",
    phase: "Visual Experimentation",
    image: "/images/work/samsung-gdn.png",
  },
  {
    title: "Jawa Barat",
    category: "28 Public Spaces Institutional Identity",
    phase: "Visual Experimentation",
    image: "/images/work/jawa-barat-28.png",
  },
];

// First 4 for Home Selected Works preview
export const featuredProjects: Project[] = allProjects.slice(0, 4);

export type Service = {
  number: string;
  title: string;
  description: string;
};

// Services for the Home preview (4 items, matches Figma Home)
export const homeServices: Service[] = [
  {
    number: "01",
    title: "Strategic Branding & Identity",
    description:
      "We engineer identity systems that command respect from the first second — not just logos, but full visual architectures that scale across every touchpoint.",
  },
  {
    number: "02",
    title: "Event Visual Experience",
    description:
      "We orchestrate large-scale event visuals — stages, tenants, guidebooks, signage — so every moment of your event leaves a mark that doesn't fade the next day.",
  },
  {
    number: "03",
    title: "Motion Graphics & Multimedia",
    description:
      "Motion content engineered to land: explainer videos, ads, presentations, and social — designed to convert attention into measurable action.",
  },
  {
    number: "04",
    title: "Commercial Video & Photography",
    description:
      "Cinematic production for Company Profile, TVC, Editorial, and Event Documentation — built to elevate your brand into premium territory.",
  },
];

// Full services list (6 items, matches Figma Services page)
export const allServices: Service[] = [
  {
    number: "01",
    title: "Strategic Branding & Identity",
    description:
      "Building a strong, memorable brand identity. Brand Guidelines, Tone of Voice, and Visual Identity that stay consistent and professional across every touchpoint.",
  },
  {
    number: "02",
    title: "Motion Graphics & Multimedia",
    description:
      "Engaging, informative motion content with strong narrative. Built for explainer videos, ads, presentations, and high-impact social media.",
  },
  {
    number: "03",
    title: "Digital Content & Social Media",
    description:
      "End-to-end digital asset management. Not just visuals — we bring storytelling power into content that is relevant and engaging.",
  },
  {
    number: "04",
    title: "Event Visual Experience",
    description:
      "Crafting visual experiences for events, stages, and tenants. Guidebooks, event visuals, booth presentations, and branded environments that stand out.",
  },
  {
    number: "05",
    title: "Web Development & UI/UX Design",
    description:
      "Functional, responsive, user-friendly websites. We blend intuitive UI/UX design with clean code and optimal performance.",
  },
  {
    number: "06",
    title: "Commercial Video & Photography",
    description:
      "Cinematic visual production for Company Profile, TVC, Editorial, and Event Documentation — reinforcing your brand with premium-quality content.",
  },
];

export type BrandPhase = {
  phase: string;
  title: string;
  tagline: string;
  body: string;
  deliverables: string[];
};

export const brandPhases: BrandPhase[] = [
  {
    phase: "Phase 01",
    title: "Brand Identity",
    tagline: "Engineering the foundation of authority.",
    body: "A brand without an identity is like a skyscraper without a foundation. We engineer a visual architecture that embodies the class, authority, and DNA of your business. Far beyond just a logo, we build an identity system that ensures your corporation stands out and commands respect from the very first second.",
    deliverables: [
      "Visual Identity Architecture",
      "Corporate Rebranding",
      "Brand Guidelines & Positioning",
    ],
  },
  {
    phase: "Phase 02",
    title: "Brand Growth",
    tagline: "From foundation to market invasion.",
    body: "Once the foundation is solid, it is time to invade the market. We architect visual strategies and digital content specifically designed to acquire attention and convert it into fierce loyalty. We ensure your brand remains relevant, aggressive in the market, and consistently grows organically.",
    deliverables: [
      "Strategic Digital Campaigns",
      "Social Media Authority Building",
      "Conversion-Driven Visual Assets",
    ],
  },
  {
    phase: "Phase 03",
    title: "Visual Experimentation",
    tagline: "Footprints competitors cannot replicate.",
    body: "Playing it safe is the enemy of innovation. In this phase, we merge cutting-edge artistry with audience activation to create experiences that shatter industry norms. From engineering advanced multimedia assets to orchestrating large-scale corporate mega-events, we leave a visual footprint your competitors simply cannot replicate.",
    deliverables: [
      "Mega-Event Visual Experiences",
      "Immersive Multimedia Production",
      "Unconventional IP Creation",
    ],
  },
];

export const marqueeWords = [
  "Visual Identity Architecture",
  "Corporate Rebranding",
  "Brand Guidelines & Positioning",
  "Strategic Digital Campaigns",
  "Social Media Authority",
  "Conversion-Driven Visuals",
  "Mega-Event Visual Experiences",
  "Immersive Multimedia Production",
  "Unconventional IP Creation",
] as const;

export type TeamMember = {
  name: string;
  position: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Aril M. Pribadi",
    position: "Commissioner",
    bio: "Aril combines expertise in Engineering, Philosophy, and Business Management. With his foundation from Università di Genova and an international track record at Maersk Line and Grab Indonesia — plus his role as Co-Founder of Kubust Teknologi Indonesia — Aril serves as Commissioner to ensure SATEAM's governance stays adaptive, precise, and oriented toward sustainable business growth.",
    image: "/images/team/aril-pribadi.jpg",
  },
  {
    name: "Wildan Ambari",
    position: "President Director",
    bio: "Wildan leads SATEAM with a uniquely multidisciplinary approach. A Visual Arts (B.A.) graduate with a strong foundation in Software Engineering, he merges design aesthetics with systematic logic. Drawing on his experience as Head of Media, he has built SATEAM into a creative studio that is adaptive, structured, and built around visual solutions that make real impact.",
    image: "/images/team/wildan-ambari.png",
  },
  {
    name: "Nazri Aryan",
    position: "Director Of Business",
    bio: "Nazri drives SATEAM's commercial growth — partnerships, client engagement, and market expansion. He turns the studio's creative capability into long-term commercial relationships.",
    image: "/images/team/nazri-aryan.png",
  },
  {
    name: "Mizan Nur",
    position: "Project Manager",
    bio: "Mizan brings strategic project management with an academic foundation in Management Business Telecommunications & Informatics (MBTI) from Telkom University. With experience managing a major Islamic foundation in Majalengka and the live-music event industry, he delivers project governance that is both adaptive and precise — keeping every SATEAM execution structured from systematic planning to high-impact field realisation.",
    image: "/images/team/mizan-nur.png",
  },
  {
    name: "Rangga Zulva",
    position: "Strategic Planner",
    bio: "A Human Resources Management graduate from Universitas Pendidikan Indonesia (UPI) with broad experience in business building and HR management, Rangga owns operational stability and team development at SATEAM. His leadership keeps every internal element of the studio working in sync to support the execution of creative projects.",
    image: "/images/team/rangga-zulva.png",
  },
  {
    name: "Raihan Majid",
    position: "Creative Director",
    bio: "A Computer Engineering graduate from Telkom University, Raihan combines strong technical expertise with creative direction at SATEAM. With a structured, logical approach, he ensures the studio's creative output and digital systems are executed with high efficiency, precision, and lasting impact.",
    image: "/images/team/raihan-majid.png",
  },
  {
    name: "Daffa Naufal",
    position: "Art Director",
    bio: "Daffa owns the visual craft — type, composition, color, and detail. He brings the creative direction to life with the level of polish that turns good work into great work.",
    image: "/images/team/daffa-naufal.png",
  },
];

export const studioCopy = {
  brand: {
    tagline: "As a team, We create Impact.",
    subTagline: "Shaping Brands. Building Empires.",
  },
  hero: {
    eyebrow: "SATEAM Creative · Bandung",
    title: "As a team,\nwe create impact.",
    desc: "We don't work on isolated projects — we build brand ecosystems that elevate your company's value and authority.",
  },
  about: {
    welcomeHeading: "Being seen is easy.",
    welcomeHeadingEm: "Being remembered requires mastery.",
    welcomeBody: [
      "In today's market, a visually pleasing aesthetic is no longer enough to win. Too many brands are trapped in fragmented execution: beautiful digital campaigns that fail to convert, or major events that fade from the audience's memory the very next day.",
      "At **SATEAM**, we seamlessly connect the worlds of **Identity, Growth, and Experiential Production**. We unify your entire communication landscape into one powerful, cohesive movement.",
      "You focus on scaling; **we drive your market domination**.",
    ],
    welcomeQuote:
      "You don't need a mere vendor who only works in isolation. You need a strategic partner who manages your entire visual ecosystem.",
    philosophy: {
      title: "The Core Philosophy",
      tagline: "Art without strategy is **mere decoration**.",
      body: [
        "We have entirely discarded the traditional agency model that operates like a transactional design factory. SATEAM is your strategic partner, ensuring that every visual pixel, line of copy, and second of live event media serves one absolute purpose: **Growth**.",
        "We don't work on isolated projects. We build The Brand Ecosystem — weaving every touchpoint of your business into a unified force that elevates your company's value and authority.",
      ],
      closing: "Because as a team, we don't just design.",
    },
  },
  footer: {
    headline: "Let's create",
    headlineEm: "impact together.",
  },
};
