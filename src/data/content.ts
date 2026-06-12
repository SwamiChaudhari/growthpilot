// ============================================
// GROWTHPILOT — Complete Data Layer
// ============================================

export const siteConfig = {
  name: "GrowthPilot",
  tagline: "We Don't Build Websites. We Build Growth Engines.",
  description:
    "Helping local businesses generate more leads, appointments, and revenue through high-converting websites and digital growth systems.",
  url: "https://growthpilot.in",
  phone: "+91 93567 33878",
  whatsapp: "919356733878",
  email: "swami1642004@gmail.com",
  address: "Pune, Maharashtra, India",
  founded: "2024",
};

export const founder = {
  name: "Swami Chaudhari",
  role: "AI Engineer & Founder",
  bio: "An AI Engineer and entrepreneur with hands-on experience building intelligent systems spanning Machine Learning, NLP, Semantic Search, and Large Language Models. Built end-to-end churn prediction platforms processing 100K+ records, designed NLP-powered AI systems, and engineered automated data pipelines scraping 50K+ records from 12+ sources. Now applying that same technical depth to help local businesses grow through high-converting websites and digital growth systems.",
  mission:
    "Every local business deserves a professional online presence that actively generates leads and drives growth — not just a digital brochure that sits there.",
  vision:
    "To become the go-to growth partner for local businesses across India, helping them compete with larger players through smart technology and strategic digital presence.",
  highlights: [
    "AI & Machine Learning Expertise",
    "Python & Full-Stack Development",
    "NLP & Semantic Search",
    "MLOps, Docker & CI/CD",
    "Data-Driven Approach",
    "Direct Founder Communication",
    "Fast Execution",
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    college: "Viva Institute of Technology, Mumbai, Maharashtra",
    year: "2026",
    gpa: "7.12/10",
  },
  experience: [
    {
      role: "Research and Development Trainer Intern",
      company: "Robokart",
      points: [
        "Built and compared 5 ML models (CatBoost, XGBoost, LightGBM, Logistic Regression, Random Forest) achieving 80% prediction accuracy on customer churn dataset",
        "Performed feature engineering on 20+ variables, managing model versioning and experiment tracking with Git for MLOps best practices",
        "Implemented SHAP-based model explainability to provide interpretable insights for business stakeholders",
        "Developed Python scripts for real-time sensor data processing, achieving 15% system efficiency optimization through data-driven automation",
      ],
    },
  ],
  projects: [
    {
      name: "AI-Powered Churn Prediction & Retention Platform",
      description: "Built and compared 5 ML classification models achieving 80% accuracy on 100K+ customer records. Containerized with Docker, CI/CD pipeline, deployed interactive Streamlit dashboard.",
      tech: "Python, CatBoost, XGBoost, LightGBM, Scikit-learn, SHAP, MLOps, Docker",
    },
    {
      name: "PriceSentry — Competitive Price Intelligence Platform",
      description: "Designed end-to-end price intelligence platform. Built automated ETL workflow processing 50,000+ price records from 12+ e-commerce sources with 95% data accuracy.",
      tech: "Python, Flask, Web Scraping, ETL Pipelines, SQL, Streamlit, Pandas, Plotly",
    },
    {
      name: "ShlokaSutra — Where Ancient Wisdom Meets AI",
      description: "Built AI-powered system combining Bhagavad Gita with NLP, ML, Semantic Search, and LLMs. Knowledge base of 700+ shlokas with 360-degree semantic search coverage.",
      tech: "Python, NLP, Machine Learning, Semantic Search, LLMs, Deep Learning, Scikit-learn",
    },
  ],
  certifications: [
    "Data Analytics Essentials — Cisco Networking Academy (Oct 2025)",
  ],
  achievements: [
    "Paper Presentation — Shloka Sutra: Ancient Verses, Modern Fixes With AI — NCRENB-2026 (National Conference on Recent Advances in Engineering)",
    "Algorithm Performance Optimization — 15% improvement — Datta Meghe College of Engineering — Logithon (Coding Competition)",
    "Scalable Solution Deployment — 48-hour hackathon — Shree L.R. Tiwari College Hackathon",
    "Website Performance Optimization — 20% page load reduction — CSI (Computer Society of India) — Viva Institute Chapter",
  ],
  skills: [
    "Python", "Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "PyTorch",
    "Natural Language Processing", "Computer Vision", "Semantic Search", "Large Language Models (LLM)",
    "Feature Engineering", "Statistical Analysis", "Predictive Modeling", "XGBoost", "CatBoost", "LightGBM",
    "SHAP", "MLOps", "Docker", "CI/CD", "REST APIs", "Pandas", "NumPy", "Git", "SQL",
  ],
};

// ============================================
// NAVIGATION
// ============================================
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#case-studies", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// ============================================
// TRUST BAR
// ============================================
export const trustBarItems = [
  { label: "Mobile First", icon: "Smartphone" },
  { label: "SEO Ready", icon: "Search" },
  { label: "Fast Loading", icon: "Zap" },
  { label: "Lead Focused", icon: "Target" },
  { label: "WhatsApp Integrated", icon: "MessageCircle" },
  { label: "Founder Led", icon: "UserCheck" },
];

// ============================================
// BUSINESS PAIN POINTS
// ============================================
export const painPoints = [
  {
    title: "No Website",
    result: "Lost Customers",
    description: "75% of customers judge a business by its website. Without one, you're invisible.",
    icon: "Globe",
  },
  {
    title: "Outdated Website",
    result: "Lost Trust",
    description: "An old-looking website tells customers you're not serious about your business.",
    icon: "Clock",
  },
  {
    title: "Poor Mobile Experience",
    result: "Lost Leads",
    description: "60%+ of web traffic is mobile. A bad mobile experience means lost customers.",
    icon: "Smartphone",
  },
  {
    title: "No SEO",
    result: "Invisible Business",
    description: "If you're not on page 1 of Google, you don't exist for most potential customers.",
    icon: "SearchX",
  },
  {
    title: "No WhatsApp Integration",
    result: "Missed Opportunities",
    description: "Customers want instant communication. No WhatsApp means missed inquiries.",
    icon: "MessageCircleOff",
  },
  {
    title: "Competitors With Better Websites",
    result: "Lost Revenue",
    description: "Your competitors are investing in their online presence. Every day you wait, they get stronger.",
    icon: "TrendingDown",
  },
];

// ============================================
// PRODUCTIZED SOLUTIONS
// ============================================
export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  benefits: string[];
  outcomes: string[];
  icon: string;
  color: string;
  industries: string[];
}

export const solutions: Solution[] = [
  {
    slug: "leadflow-website-system",
    title: "LeadFlow Website System",
    tagline: "Convert Visitors Into Inquiries",
    problem:
      "Most websites look pretty but don't generate leads. Visitors come, look around, and leave without contacting you.",
    solution:
      "A high-converting website system designed with strategic lead capture forms, compelling calls-to-action, and conversion-optimized layouts that turn visitors into customers.",
    benefits: [
      "Strategic lead capture on every page",
      "Conversion-optimized design",
      "Clear calls-to-action that drive action",
      "Mobile-first responsive layout",
      "Fast loading for better engagement",
    ],
    outcomes: [
      "More inquiries from your website",
      "Higher conversion rates",
      "Better quality leads",
      "Increased revenue per visitor",
    ],
    icon: "Workflow",
    color: "gold",
    industries: ["All Businesses"],
  },
  {
    slug: "dental-patient-acquisition",
    title: "Dental Patient Acquisition System",
    tagline: "Generate More Appointments",
    problem:
      "Dental clinics rely on word-of-mouth and walk-ins. Without a strong online presence, you're missing out on patients actively searching for dental care.",
    solution:
      "A complete digital system for dental clinics including appointment booking, patient testimonials, treatment pages, and local SEO to attract new patients consistently.",
    benefits: [
      "Online appointment booking",
      "Treatment showcase pages",
      "Patient testimonial system",
      "Local SEO for dental keywords",
      "Google Business optimization",
    ],
    outcomes: [
      "More appointment bookings",
      "Stronger local visibility",
      "Higher patient trust",
      "Reduced marketing costs",
    ],
    icon: "Heart",
    color: "blue",
    industries: ["Dental Clinics", "Healthcare"],
  },
  {
    slug: "real-estate-lead-engine",
    title: "Real Estate Lead Engine",
    tagline: "Generate Property Inquiries",
    problem:
      "Real estate consultants lose potential buyers and tenants because their website doesn't showcase properties effectively or capture inquiries.",
    solution:
      "A property listing website with advanced search, inquiry forms, virtual tour integration, and lead nurturing automation to convert visitors into serious buyers.",
    benefits: [
      "Property listing management",
      "Advanced search & filters",
      "Automated inquiry capture",
      "Virtual tour integration",
      "Lead tracking dashboard",
    ],
    outcomes: [
      "More property inquiries",
      "Faster deal closures",
      "Better lead quality",
      "Professional brand image",
    ],
    icon: "Building",
    color: "green",
    industries: ["Real Estate", "Property Consultants"],
  },
  {
    slug: "hotel-booking-growth",
    title: "Hotel Booking Growth System",
    tagline: "Increase Direct Bookings",
    problem:
      "Hotels lose revenue to OTA commissions and miss direct bookings because their website doesn't inspire confidence or make booking easy.",
    solution:
      "A stunning hotel website with integrated booking engine, room showcase, gallery, guest reviews, and direct booking incentives to reduce OTA dependency.",
    benefits: [
      "Integrated booking system",
      "Room & amenity showcase",
      "Guest review integration",
      "Direct booking incentives",
      "Mobile-optimized booking flow",
    ],
    outcomes: [
      "More direct bookings",
      "Reduced OTA commissions",
      "Higher revenue per booking",
      "Better guest experience",
    ],
    icon: "Hotel",
    color: "purple",
    industries: ["Hotels", "Resorts", "Homestays"],
  },
  {
    slug: "business-growth-framework",
    title: "Business Growth Website Framework",
    tagline: "Attract Customers & Increase Conversions",
    problem:
      "Local service businesses struggle to stand out online. Their website doesn't communicate their value or make it easy for customers to take action.",
    solution:
      "A comprehensive growth website framework designed for local service businesses with service pages, trust elements, conversion optimization, and local SEO.",
    benefits: [
      "Professional service showcase",
      "Trust-building elements",
      "Local SEO optimization",
      "WhatsApp & call integration",
      "Analytics & performance tracking",
    ],
    outcomes: [
      "More customer inquiries",
      "Stronger brand credibility",
      "Better local search rankings",
      "Increased conversion rates",
    ],
    icon: "Rocket",
    color: "orange",
    industries: [
      "Coaching Institutes",
      "Gyms",
      "Restaurants",
      "Architects",
      "Interior Designers",
      "Local Services",
    ],
  },
  {
    slug: "travel-agency-system",
    title: "Travel Agency Growth System",
    tagline: "Book More Tours & Packages",
    problem:
      "Travel agencies lose bookings to online portals because their website doesn't showcase destinations effectively or simplify the booking process.",
    solution:
      "A visually stunning travel website with package listings, destination galleries, inquiry forms, and WhatsApp integration to convert wanderlust into bookings.",
    benefits: [
      "Package & itinerary showcase",
      "Destination galleries",
      "Instant inquiry capture",
      "WhatsApp booking integration",
      "Customer review system",
    ],
    outcomes: [
      "More tour bookings",
      "Higher inquiry rates",
      "Better destination visibility",
      "Increased customer trust",
    ],
    icon: "Plane",
    color: "teal",
    industries: ["Travel Agencies", "Tour Operators"],
  },
];

// ============================================
// G.R.O.W.T.H FRAMEWORK
// ============================================
export const growthFramework = {
  title: "The G.R.O.W.T.H Framework",
  subtitle: "Our Proven 6-Step Process to Build Your Digital Growth Engine",
  steps: [
    {
      letter: "G",
      title: "Goals & Business Analysis",
      description:
        "We start by understanding your business, target audience, competitors, and growth goals. This foundation ensures every decision is strategic.",
      icon: "Target",
    },
    {
      letter: "R",
      title: "Research & Strategy",
      description:
        "Deep market research, keyword analysis, competitor benchmarking, and a custom growth strategy tailored to your industry.",
      icon: "Search",
    },
    {
      letter: "O",
      title: "Optimized User Experience",
      description:
        "Designing a premium, mobile-first experience that guides visitors toward taking action — whether it's calling, booking, or filling a form.",
      icon: "Layout",
    },
    {
      letter: "W",
      title: "Website Development",
      description:
        "Building your high-converting website with clean code, fast performance, SEO foundation, and all integrations set up properly.",
      icon: "Code",
    },
    {
      letter: "T",
      title: "Traffic & Visibility",
      description:
        "Setting up local SEO, Google Business Profile, and content strategy to ensure your ideal customers can actually find you online.",
      icon: "TrendingUp",
    },
    {
      letter: "H",
      title: "Higher Conversions",
      description:
        "Ongoing optimization, A/B testing, analytics review, and conversion rate improvements to maximize your website's performance.",
      icon: "BarChart3",
    },
  ],
};

// ============================================
// LEAD FRAMEWORK
// ============================================
export const leadFramework = {
  title: "The LEAD Framework",
  subtitle: "Our Approach to Local Market Domination",
  steps: [
    {
      letter: "L",
      title: "Local Market Analysis",
      description:
        "Understanding your local competition, target audience behavior, and market opportunities to position your business for maximum impact.",
      icon: "MapPin",
    },
    {
      letter: "E",
      title: "Experience Design",
      description:
        "Creating a premium digital experience that builds trust, communicates value, and makes it effortless for customers to take action.",
      icon: "Palette",
    },
    {
      letter: "A",
      title: "Automation & Optimization",
      description:
        "Setting up WhatsApp automation, lead capture systems, and conversion optimization to ensure no opportunity is missed.",
      icon: "Cog",
    },
    {
      letter: "D",
      title: "Digital Growth",
      description:
        "Driving consistent growth through SEO, content marketing, and data-driven improvements that compound over time.",
      icon: "TrendingUp",
    },
  ],
};

// ============================================
// RESULTS / STATS
// ============================================
export const results = [
  {
    value: "3x",
    label: "More Leads",
    description: "Average increase in customer inquiries after launching a GrowthPilot website",
    icon: "TrendingUp",
  },
  {
    value: "10",
    label: "Days Delivery",
    description: "Average time from kickoff to launch — fast without compromising quality",
    icon: "Zap",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Of clients rate their experience as excellent and recommend GrowthPilot",
    icon: "Star",
  },
  {
    value: "50+",
    label: "Businesses Helped",
    description: "Local businesses across industries have grown with GrowthPilot",
    icon: "Users",
  },
];

// ============================================
// CASE STUDIES
// ============================================
export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  implementation: string[];
  results: { metric: string; value: string }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-clinic-pune",
    title: "Dental Clinic — Pune",
    industry: "Healthcare / Dental",
    problem:
      "A growing dental clinic in Pune was relying entirely on walk-in patients and word-of-mouth. Their old website was slow, not mobile-friendly, and had no appointment booking system. They were losing patients to competitors with better online presence.",
    solution:
      "We built a complete Dental Patient Acquisition System with online appointment booking, treatment pages, patient testimonials, and local SEO optimization targeting dental keywords in Pune.",
    implementation: [
      "Designed a modern, trust-building website with treatment showcase",
      "Integrated online appointment booking with WhatsApp confirmation",
      "Created location-specific landing pages for Pune areas",
      "Optimized Google Business Profile for dental keywords",
      "Set up patient review collection system",
    ],
    results: [
      { metric: "New Patient Inquiries", value: "3x Increase" },
      { metric: "Online Bookings", value: "45/month" },
      { metric: "Google Ranking", value: "Page 1" },
      { metric: "Website Traffic", value: "5x Growth" },
    ],
    testimonial: {
      quote:
        "Within 3 months of launching our new website, we started getting 3x more patient inquiries. The online booking system alone transformed how we manage appointments.",
      name: "Dr. Priya Sharma",
      role: "Clinic Owner, Pune",
    },
  },
  {
    slug: "real-estate-consultant",
    title: "Real Estate Consultant — Mumbai",
    industry: "Real Estate",
    problem:
      "A real estate consultant was losing potential buyers to property portals. Their website had no property listings, no search functionality, and no way to capture leads. They were spending heavily on portal listings with diminishing returns.",
    solution:
      "We built a Real Estate Lead Engine with property listings, advanced search, inquiry forms, and a lead tracking system. The website became their primary lead generation channel.",
    implementation: [
      "Built a property listing website with advanced search & filters",
      "Integrated inquiry capture on every property page",
      "Added virtual tour integration for premium listings",
      "Set up automated lead notifications via WhatsApp",
      "Created area-specific landing pages for targeted SEO",
    ],
    results: [
      { metric: "Property Inquiries", value: "4x Increase" },
      { metric: "Lead Quality", value: "Significantly Higher" },
      { metric: "Portal Dependency", value: "Reduced 60%" },
      { metric: "Deal Closure Rate", value: "2x Improvement" },
    ],
    testimonial: {
      quote:
        "GrowthPilot built us a website that actually generates leads. We went from depending entirely on portals to getting quality inquiries directly through our website.",
      name: "Rahul Deshmukh",
      role: "Real Estate Consultant, Mumbai",
    },
  },
  {
    slug: "hotel-resort-goa",
    title: "Hotel & Resort — Goa",
    industry: "Hospitality",
    problem:
      "A beautiful resort in Goa was losing 30% of their booking revenue to OTA commissions. Their website was outdated, had no booking engine, and didn't showcase their property's true potential.",
    solution:
      "We built a Hotel Booking Growth System with an integrated booking engine, stunning gallery, room showcase, guest reviews, and direct booking incentives to reduce OTA dependency.",
    implementation: [
      "Designed a visually stunning website showcasing the property",
      "Integrated a direct booking engine with instant confirmation",
      "Created room & amenity showcase pages",
      "Added guest review integration and social proof",
      "Set up Google Business optimization for local searches",
    ],
    results: [
      { metric: "Direct Bookings", value: "2.5x Increase" },
      { metric: "OTA Commission Savings", value: "₹2.5L/year" },
      { metric: "Average Booking Value", value: "20% Higher" },
      { metric: "Guest Inquiry Rate", value: "4x Growth" },
    ],
    testimonial: {
      quote:
        "Our new website not only looks stunning but actually drives direct bookings. We've saved lakhs in OTA commissions and our guests love the easy booking experience.",
      name: "Anita Fernandes",
      role: "Resort Owner, Goa",
    },
  },
];

// ============================================
// OFFER STACK
// ============================================
export const offerStack = {
  title: "Everything You Need to Dominate Online",
  subtitle: "A complete growth system — not just a website",
  items: [
    { name: "Custom High-Converting Website", included: true },
    { name: "Domain Setup & Configuration", included: true },
    { name: "Premium Hosting (1 Year)", included: true },
    { name: "SSL Certificate (HTTPS)", included: true },
    { name: "SEO Foundation Setup", included: true },
    { name: "WhatsApp Integration", included: true },
    { name: "Google Maps Integration", included: true },
    { name: "Lead Capture Forms", included: true },
    { name: "Analytics & Tracking Setup", included: true },
    { name: "Conversion Optimization", included: true },
    { name: "Google Business Profile Optimization", included: true },
    { name: "Mobile-First Responsive Design", included: true },
    { name: "Fast Loading Performance", included: true },
    { name: "30 Days Free Support", included: true },
    { name: "Training & Handoff Session", included: true },
  ],
};

// ============================================
// PRICING
// ============================================
export interface PricingPlan {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    name: "Starter Growth System",
    tagline: "Perfect for new businesses",
    price: "₹14,999",
    originalPrice: "₹24,999",
    description:
      "A professional website that establishes your online presence and starts generating leads from day one.",
    features: [
      "5-Page Professional Website",
      "Mobile-First Responsive Design",
      "Basic SEO Setup",
      "WhatsApp Integration",
      "Contact Form",
      "Google Maps Integration",
      "1 Year Hosting + SSL",
      "15 Days Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    slug: "business",
    name: "Business Growth System",
    tagline: "Most popular choice",
    price: "₹29,999",
    originalPrice: "₹49,999",
    description:
      "A complete growth system designed to generate leads, build trust, and drive consistent business growth.",
    features: [
      "10-Page High-Converting Website",
      "Advanced SEO Foundation",
      "WhatsApp + Lead Capture System",
      "Google Business Optimization",
      "Analytics & Performance Tracking",
      "Social Media Integration",
      "Blog Setup",
      "1 Year Hosting + SSL",
      "30 Days Priority Support",
      "Free Strategy Session",
    ],
    highlighted: true,
    cta: "Start Growing",
    badge: "Most Popular",
  },
  {
    slug: "premium",
    name: "Premium Growth System",
    tagline: "For serious growth",
    price: "₹59,999",
    originalPrice: "₹99,999",
    description:
      "A premium growth system with advanced features, automation, and dedicated support for maximum results.",
    features: [
      "Unlimited Pages & Features",
      "Advanced SEO + Local SEO",
      "Booking/Appointment System",
      "Lead Automation & CRM Setup",
      "E-commerce Ready",
      "Custom Animations & Interactions",
      "Performance Optimization",
      "1 Year Premium Hosting + SSL",
      "60 Days Priority Support",
      "Monthly Performance Reports",
      "Dedicated Account Manager",
    ],
    highlighted: false,
    cta: "Go Premium",
  },
  {
    slug: "enterprise",
    name: "Enterprise Growth System",
    tagline: "Custom solutions",
    price: "Custom",
    originalPrice: "",
    description:
      "For businesses needing a fully custom solution with advanced integrations and dedicated development.",
    features: [
      "Fully Custom Solution",
      "Custom Web Application",
      "API Integrations",
      "Advanced Automation",
      "Multi-Location Support",
      "Dedicated Development Team",
      "Priority Everything",
      "Custom Timeline",
    ],
    highlighted: false,
    cta: "Let's Talk",
  },
];

// ============================================
// WHY CHOOSE GROWTHPILOT
// ============================================
export const whyChooseUs = [
  {
    title: "Founder-Led Support",
    description:
      "Work directly with Swami — no account managers, no middlemen. Your vision, directly executed.",
    icon: "UserCheck",
  },
  {
    title: "Fast Delivery (3–10 Days)",
    description:
      "No endless revisions or delays. We deliver premium websites in days, not months.",
    icon: "Zap",
  },
  {
    title: "Mobile-First Design",
    description:
      "Every website is designed for mobile first, because that's where your customers are.",
    icon: "Smartphone",
  },
  {
    title: "SEO Foundation",
    description:
      "Built-in SEO from day one — not an afterthought. Your website is ready to rank.",
    icon: "Search",
  },
  {
    title: "Local SEO Expertise",
    description:
      "We specialize in helping local businesses dominate their market area online.",
    icon: "MapPin",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Seamless WhatsApp integration so customers can reach you instantly.",
    icon: "MessageCircle",
  },
  {
    title: "Growth Strategy",
    description:
      "We don't just build websites — we build growth strategies that drive results.",
    icon: "TrendingUp",
  },
  {
    title: "Affordable Premium Solutions",
    description:
      "International-quality websites at Indian prices. Premium doesn't mean expensive.",
    icon: "IndianRupee",
  },
  {
    title: "Ongoing Support",
    description:
      "We're not done at launch. We provide ongoing support to keep your website performing.",
    icon: "Headphones",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We grow with you. As your business evolves, your website evolves with it.",
    icon: "Handshake",
  },
];

// ============================================
// TESTIMONIALS
// ============================================
export const testimonials = [
  {
    quote:
      "GrowthPilot completely transformed our online presence. We went from getting 2-3 inquiries a week to 15-20. The website pays for itself every single month.",
    name: "Dr. Priya Sharma",
    role: "Dental Clinic Owner, Pune",
    rating: 5,
  },
  {
    quote:
      "The team understood exactly what we needed. Our new website generates more leads in a day than our old one did in a month. Absolutely worth the investment.",
    name: "Rahul Deshmukh",
    role: "Real Estate Consultant, Mumbai",
    rating: 5,
  },
  {
    quote:
      "We've saved over ₹2.5 lakhs in OTA commissions in the first year alone. The direct booking system GrowthPilot built is a game-changer for our resort.",
    name: "Anita Fernandes",
    role: "Resort Owner, Goa",
    rating: 5,
  },
  {
    quote:
      "What impressed me most was the speed and quality. Our website was live in 7 days and it looks better than agencies charging 5x more.",
    name: "Vikram Patil",
    role: "Restaurant Owner, Pune",
    rating: 5,
  },
  {
    quote:
      "The SEO work GrowthPilot did helped us rank on page 1 for our key search terms within 2 months. Our phone hasn't stopped ringing since.",
    name: "Meera Joshi",
    role: "Coaching Institute Director, Mumbai",
    rating: 5,
  },
  {
    quote:
      "Swami personally handled everything from design to launch. The level of attention and care was remarkable. Highly recommend GrowthPilot.",
    name: "Amit Kulkarni",
    role: "Interior Designer, Pune",
    rating: 5,
  },
];

// ============================================
// FAQs
// ============================================
export const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites are delivered within 3-10 days depending on complexity. Starter websites can be ready in as few as 3 days, while more complex projects may take up to 10 days.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes, all our packages include 1 year of premium hosting with SSL certificate. After the first year, hosting can be renewed at affordable rates.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we build is designed mobile-first, meaning it looks and works perfectly on smartphones, tablets, and desktops.",
  },
  {
    q: "Do you handle SEO?",
    a: "Yes, every website includes SEO foundation setup. We also offer advanced SEO and local SEO services to help you rank higher in search results.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes, we provide training on how to make basic updates. For more complex changes, our support team is always available to help.",
  },
  {
    q: "What if I need changes after launch?",
    a: "All packages include free support days after launch (15-60 days depending on your plan). After that, we offer affordable maintenance plans.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Yes, our Premium and Enterprise plans include e-commerce functionality. We can build online stores with payment integration, inventory management, and more.",
  },
  {
    q: "What makes GrowthPilot different from other agencies?",
    a: "We're not a traditional agency. We're a growth partner. We focus on building websites that actually generate leads and drive business growth — not just look pretty. Plus, you work directly with the founder, not a junior developer.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment options. Typically, 50% is required to start and 50% upon completion. For larger projects, we can discuss custom payment schedules.",
  },
  {
    q: "Can you help with my existing website?",
    a: "Yes, we can redesign and optimize your existing website to improve its performance, design, and conversion rates.",
  },
];

// ============================================
// REFERRAL PROGRAM
// ============================================
export const referralProgram = {
  title: "Refer & Earn",
  subtitle: "Help local businesses grow and earn rewards",
  description:
    "Know a business that needs a better website? Refer them to GrowthPilot and earn rewards when they sign up.",
  rewards: [
    {
      title: "Cash Rewards",
      description: "Earn ₹2,000-5,000 for every successful referral",
      icon: "IndianRupee",
    },
    {
      title: "Service Credits",
      description: "Get free website updates and maintenance for every referral",
      icon: "Gift",
    },
    {
      title: "Priority Support",
      description: "Referral partners get priority support and faster delivery",
      icon: "Star",
    },
  ],
  howItWorks: [
    "Share GrowthPilot with a business owner",
    "They mention your name when contacting us",
    "Once they sign up, you receive your reward",
    "No limit on referrals — earn unlimited rewards",
  ],
};

// ============================================
// BLOG POSTS (Sample)
// ============================================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-business-needs-website-2025",
    title: "Why Your Business Needs a Professional Website in 2025",
    excerpt:
      "84% of customers say a business's website is the most important factor in their purchasing decision. If your website isn't professional, you're losing customers to competitors.",
    category: "Business Growth",
    readTime: "5 min read",
    date: "2025-01-15",
    featured: true,
  },
  {
    slug: "local-seo-guide-small-businesses",
    title: "The Complete Local SEO Guide for Small Businesses",
    excerpt:
      "Learn how to dominate local search results and attract more customers from your area with these proven local SEO strategies.",
    category: "SEO",
    readTime: "8 min read",
    date: "2025-01-10",
    featured: true,
  },
  {
    slug: "website-mistakes-losing-customers",
    title: "7 Website Mistakes That Are Costing You Customers",
    excerpt:
      "From slow loading times to poor mobile experience, these common website mistakes could be driving potential customers away.",
    category: "Web Design",
    readTime: "6 min read",
    date: "2025-01-05",
    featured: false,
  },
  {
    slug: "whatsapp-integration-website",
    title: "Why WhatsApp Integration Is a Game-Changer for Your Website",
    excerpt:
      "Businesses that integrate WhatsApp into their website see 3x more inquiries. Here's how to set it up and start converting more visitors.",
    category: "Conversion",
    readTime: "4 min read",
    date: "2024-12-28",
    featured: false,
  },
  {
    slug: "dental-clinic-website-guide",
    title: "The Ultimate Guide to Building a Dental Clinic Website That Attracts Patients",
    excerpt:
      "A dental clinic website needs more than just pretty pictures. Learn the essential elements that drive patient bookings and build trust.",
    category: "Industry Guide",
    readTime: "7 min read",
    date: "2024-12-20",
    featured: false,
  },
  {
    slug: "cost-of-website-india-2025",
    title: "How Much Does a Website Cost in India in 2025?",
    excerpt:
      "A comprehensive breakdown of website costs in India, what you get at each price point, and how to choose the right option for your business.",
    category: "Pricing",
    readTime: "6 min read",
    date: "2024-12-15",
    featured: false,
  },
];
