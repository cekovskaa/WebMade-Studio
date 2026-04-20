export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Highlight = {
  title: string;
  description: string;
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
  reverse?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
};

export type BlogPost = {
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  imageSrc: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    title: "Custom Web Design",
    description:
      "Pixel-perfect websites tailored to your brand — no templates, no shortcuts, just stunning results.",
    icon: "bi-palette",
  },
  {
    title: "Performance Analytics",
    description:
      "We track what matters: traffic, conversions, and user behavior so your site keeps improving over time.",
    icon: "bi-graph-up",
  },
  {
    title: "E-Commerce Setup",
    description:
      "From product pages to checkout flows, we build online stores that turn browsers into buyers.",
    icon: "bi-cart",
  },
  {
    title: "SEO Optimization",
    description:
      "We make sure Google finds you first. Every site we build is optimized for speed and search rankings.",
    icon: "bi-search",
  },
  {
    title: "Client Satisfaction",
    description:
      "Our process is transparent and collaborative. You're involved at every step, and we don't stop until you love it.",
    icon: "bi-emoji-smile",
  },
  {
    title: "Mobile-First Development",
    description:
      "Over 60% of traffic is mobile. Every Pixova site looks flawless on any screen, any device.",
    icon: "bi-phone",
  },
];

export const highlights: Highlight[] = [
  {
    title: "Communicate and gather feedback — the easy way",
    description:
      "Our collaborative workflow means you're never in the dark. Share ideas, request revisions, and approve designs all in one place. No long email chains, no confusion — just a clean, simple process from kickoff to launch.",
    quote:
      "WebMade Studio made the whole process so easy. They listened to exactly what I needed and delivered beyond my expectations.",
    author: "Amy Johnson",
    role: "Founder, BrightLeaf Co.",
    imageSrc: "/images/undraw_gift_card_6ekc.svg",
  },
  {
    title: "Measure what matters for your business",
    description:
      "We don't just build websites and disappear. WebMade Studio gives you real performance data — traffic trends, bounce rates, conversion metrics — so you always know how your site is working for you.",
    quote:
      "I finally understand how my website is performing. The dashboard WebMade Studio built for us is something I check every morning.",
    author: "Anthony Scott",
    role: "CEO, Northgate Solutions",
    imageSrc: "/images/undraw_metrics_gtu7.svg",
    reverse: true,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Liam Carter",
    role: "Lead Designer",
    bio: "Turns brand visions into visuals that stop the scroll and drive action.",
    imageSrc: "/images/team-member1.jpg",
  },
  {
    name: "Emma Blake",
    role: "Project Manager",
    bio: "Keeps campaigns on track and clients informed — nothing slips through the cracks.",
    imageSrc: "/images/team-member2.jpg",
  },
  {
    name: "Will Turner",
    role: "Full-Stack Developer",
    bio: "Builds the invisible magic behind every fast, functional, and beautiful WebMade site.",
    imageSrc: "/images/team-member3.jpg",
  },
  {
    name: "Lucas Bennett",
    role: "SEO Strategist",
    bio: "Obsessed with rankings. Brings organic traffic to every site we launch.",
    imageSrc: "/images/team-member4.jpg",
  },
  {
    name: "Isabella Harper",
    role: "UI/UX Designer",
    bio: "Creates user experiences so intuitive, visitors barely realize they've converted.",
    imageSrc: "/images/team-member5.jpg",
  },
  {
    name: "Olivia Moore",
    role: "Client Relations",
    bio: "Your go-to person from day one. Olivia ensures every client feels heard and supported.",
    imageSrc: "/images/team-member7.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "WebMade Studio delivered our new website in two weeks and it looked better than anything we imagined. Our leads doubled within the first month of launch.",
    name: "James Holloway",
    role: "CEO, BrightLeaf Co.",
    imageSrc: "/images/person_2.jpg",
  },
  {
    quote:
      "From the first call to the final delivery, the team was professional, responsive, and genuinely creative. Our e-commerce store has never looked or performed this well.",
    name: "Sophia Mercer",
    role: "Founder, Mercer Boutique",
    imageSrc: "/images/person_1.jpg",
  },
  {
    quote:
      "We had a tight deadline and WebMade Studio not only met it but exceeded our expectations. The site is fast, beautiful, and our clients constantly compliment it.",
    name: "Ethan Caldwell",
    role: "Director, Caldwell Agency",
    imageSrc: "/images/person_3.jpg",
  },
  {
    quote:
      "I was nervous about redesigning our website but the WebMade team made the whole process easy and stress-free. The result speaks for itself — we love it.",
    name: "Olivia Hartman",
    role: "Marketing Manager, Hartman Group",
    imageSrc: "/images/person_6.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "5 signs your website is costing you clients and revenue",
    author: "Noah Moore",
    date: "Jan 18, 2026",
    category: "Business",
    excerpt:
      "A slow, outdated, or confusing website quietly drives potential clients away every single day. Learn the five most common warning signs that your site is hurting your business and what you can do about each one to start converting more visitors into paying customers.",
    imageSrc: "/images/blog1.png",
  },
  {
    title: "Why first impressions online matter more than ever",
    author: "Mia Reid",
    date: "Feb 03, 2026",
    category: "Design",
    excerpt:
      "Visitors form an opinion about your website in under 0.05 seconds. That first impression determines whether they stay or leave. We break down what great web design actually communicates to your audience and how to make sure your site builds trust from the very first scroll.",
    imageSrc: "/images/blog2.png",
  },
  {
    title: "What to expect when working with a web design agency",
    author: "Ethan Harper",
    date: "Mar 09, 2026",
    category: "News",
    excerpt:
      "Never worked with a web agency before? We walk you through the entire process from the first discovery call to the final launch. Know what questions to ask, what to prepare, and how to get the most out of your investment so your new website delivers real results.",
    imageSrc: "/images/blog3.png",
  },
];
