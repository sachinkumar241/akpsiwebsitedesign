/* ─────────────────────────────────────────────────────────────────────────
   About Me page — Sachin Kumar
   Includes: life story, professional experience, leadership & projects,
   education, and skills sourced from LinkedIn + resume.
───────────────────────────────────────────────────────────────────────── */

interface ExperienceItem {
  company: string;
  subtitle?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

interface LeadershipItem {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const lifeStory: { age: string; text: string }[] = [
  { age: "Age 0", text: "Born and raised in Chicago." },
  {
    age: "Age 9",
    text: `Started my "dream business" called B.O.T Industries. I was designing smart homes, integrating products like household robots in my little sketch pad in hopes of one day making this possible... it sparked my interest in engineering.`,
  },
  {
    age: "Age 12",
    text: "Built my first PC... and I still use it to this day!",
  },
  {
    age: "Age 13",
    text: "Hit a couple buzzer beaters in my YMCA basketball league.",
  },
  {
    age: "Age 15",
    text: "Started my first business reselling shoes during COVID — made a few $Ks but eventually stopped after I was spending too much time analyzing Air Jordans and had to lock back in on my classes.",
  },
  {
    age: "Age 17",
    text: "Mentored a class of 25 high school freshman students to help them navigate through common high school obstacles. Learned how to lead engaging presentations and activities (that didn't put students to sleep).",
  },
  {
    age: "Age 17 (continued)",
    text: "Won my high school Senior Assassins tournament with a $2K prize pool. I know this sounds silly, but it taught me resilience (I played with crutches), and literally how to win friends & influence people — shoutout Dale Carnegie!",
  },
  {
    age: "Age 18",
    text: "Built a tri-wheel dolly to move heavy objects on stairs — won 1st place scholarship award at the Chicago Regional Engineering Showcase.",
  },
  {
    age: "Age 19",
    text: `Joined my first startup as a Founding Product & Operations Lead at BYLD Innovations. Built the PortaPrinter — "The Laptop of 3D Printers," a foldable 3D printer that fits inside your backpack. Raised $50,000+ in VC/competition funding. Won 1st Place Most Industry Impact, 2nd Place Most Ingenious Solution at UIUC, UChicago CNVC & Cozad — top 5 out of 100+ teams.`,
  },
  {
    age: "Age 19 (continued)",
    text: "Got involved in organizations at UIUC — Treasurer at Engineering Ambassadors, Technology Chair at Alpha Kappa Psi Professional Business Fraternity, and started mentoring at Product Space UIUC. The rest is history.",
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Autopilot",
    subtitle: "Robotics Marketplace Startup",
    role: "GTM Engineer Intern & Sales Development Representative Intern",
    period: "Jun 2025 – Present",
    location: "Chicago, IL",
    bullets: [
      "Built 53 HubSpot CRM cold outbound email sequences (62.7% open, 16.6% click, 15% reply), developing a 3,000+ ICP lead pipeline that booked 36 discovery calls/month and drove $120,000+ in closed won deals for the Pudu CC1 cleaning robot.",
      "Improved brand visibility by 73% using SEO/AEO optimization methods and automated sales processes (n8n, Clay, Zapier) to cut cycle time by 20%.",
      "Managed a team of 4 to develop internal sales tools — web scraper and ROI calculator — improving sales representative efficiency by 40%.",
    ],
  },
  {
    company: "Simplify",
    subtitle: "Job Search Automation Startup, Y-Combinator Backed",
    role: "Growth Ambassador Intern",
    period: "Dec 2024 – Present",
    location: "Champaign, IL",
    bullets: [
      "Converted user insights into 15+ UI/UX feature proposals, 70% of which shipped, strengthening retention and validating product intuition.",
      "Built and executed a data-driven content strategy that generated 200,000+ LinkedIn impressions in one week, boosting awareness and user acquisition.",
      "Organized a campus activation with CEO Michael Yan, drawing 200+ attendees and converting 70+ students into active users.",
    ],
  },
  {
    company: "Truleo",
    subtitle: "AI-Powered Police Assistance Software",
    role: "Product Management Intern",
    period: "Dec 2024 – May 2025",
    location: "Champaign, IL",
    bullets: [
      "Led a cross-functional team of 6 to deliver new growth features for an AI-powered police assistant, aligning product, design, and engineering.",
      "Drove end-to-end product lifecycle, delivering 30+ high-fidelity Figma/Lovable prototypes that translated concepts into production-ready designs.",
      "Authored PRDs and feature frameworks leveraging network effects through A/B testing, increasing officer engagement by 30%.",
      "Integrated AI features using React.js, AWS GovCloud, and OpenAI stack — enabling LLM-powered summarization, audio playback (Amazon Polly), and secure policy delivery through CJIS compliance.",
    ],
  },
  {
    company: "EpicHire",
    subtitle: "Apple Vision Pro Spatial Computing Team",
    role: "Associate Product Manager Intern",
    period: "Aug 2024 – Dec 2024",
    location: "Champaign, IL",
    bullets: [
      "Directed a team of 5 engineers to redesign EpicHire's user interface for the Apple Vision Pro to reduce resume screening time by 40%.",
      "Led 15+ structured user interviews to uncover 3 core recruiter pain points, prioritizing a product roadmap to increase CSAT by 50%.",
      "Developed 40+ Figma designs and 3 PRDs, presented to the founding team, driving 75% integration into the prototype.",
    ],
  },
  {
    company: "VenuAI",
    subtitle: "AI Lead Gen Startup, Y-Combinator Backed",
    role: "Associate Product Manager Intern",
    period: "Aug 2024 – Nov 2024",
    location: "Champaign, IL",
    bullets: [
      "Led product discovery through SWOT and competitor analysis, translating market and user insights into clear PRDs that influenced roadmap and strategy.",
      "Owned feature development by authoring PRDs and delivering high-fidelity Figma mockups for core AI outreach workflows.",
    ],
  },
  {
    company: "Signify",
    subtitle: "Formerly Philips Lighting",
    role: "Design Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Rosemont, IL",
    bullets: [
      "Built and deployed a LightGBM Regression Machine Learning model in Python with 99.7% accuracy to predict the lowest LED component cost, cutting cost estimation time from 3 days to 30 seconds.",
      "Automated formatting for 100+ LED driver specification sheets using Excel VBA, improving data analyst accuracy and efficiency by 85%.",
      "Diagnosed 20+ inverter failures using PCB testing (MOSFETs, thermocouples, current flow), improving reliability and reducing defects for end users.",
    ],
  },
  {
    company: "Courie",
    subtitle: "Last Mile Logistics Startup",
    role: "Project Fellow",
    period: "Jan 2024 – May 2024",
    location: "Champaign, IL",
    bullets: [
      "Led market expansion discovery through customer interviews, SWOT, and competitor analysis to evaluate food and SMB logistics segments.",
      "Translated customer pain points into product insights, informing order processing, dispatch workflows, and SMB onboarding strategy.",
    ],
  },
];

const leadership: LeadershipItem[] = [
  {
    org: "LibraryCreate",
    role: "Co-Founder",
    period: "Jan 2023 – Present",
    location: "Champaign, IL",
    bullets: [
      "501(c)(3) nonprofit backed by Menlo Ventures and Silicon Valley Community Foundation. Raised $10,000+ in grants.",
      "Built 2 libraries in rural Indian villages; building 3rd library in Brazil in 2026.",
      "Automated 25+ segmented outbound email campaigns to fundraise using custom Clay, Instantly, and CRM workflows (60% open, 10% reply rate).",
    ],
  },
  {
    org: "Alligator",
    role: "Co-Founder",
    period: "Dec 2025 – Present",
    location: "Champaign, IL",
    bullets: [
      "Built a B2C Consumer SaaS product solving personal relationship management.",
      "Developed beachhead market, ICP Fit, and marketing campaigns driving growth through UGC Marketing on TikTok/Instagram.",
      "Led 50+ customer discovery calls and iterations to develop product into MVP with 80% CSAT Score.",
    ],
  },
  {
    org: "BYLD Innovations Inc.",
    role: "Founding Product & Operations Lead",
    period: "Aug 2023 – Sep 2024",
    location: "Champaign, IL",
    bullets: [
      "Raised $50,000+ in VC/competition funding pitching the PortaPrinter — a foldable 3D printer that fits inside your backpack.",
      "Created an automated inventory database management system for over 2,000 parts using Google Apps Script to optimize order requests by 62%.",
      "Developed a 5-year GTM strategy (audience segmentation, competitor analysis, market entry) and identified a TAM of $3.2B for rapid prototyping.",
      "Won 1st Place Most Industry Impact, 2nd Place Most Ingenious Solution at UIUC; UChicago CNVC & Cozad top 5 out of 100+ teams.",
    ],
  },
  {
    org: "Alpha Kappa Psi Professional Business Fraternity",
    role: "Mentor · Rush Chair · Charity Chair · Technology Chair",
    period: "Sep 2023 – Present",
    location: "Champaign, IL",
    bullets: [
      "Selected as 1 of 24 students from a pool of 900+ candidates; elected to 4 leadership roles over 3 years, demonstrating leadership and peer trust.",
      "Deployed 2 candidate-tracking web apps (Vercel + Firebase + Google Apps Script + HTML) with 300+ users, streamlining selection for 900+ applicants.",
    ],
  },
  {
    org: "Engineering Ambassadors",
    role: "Vice President · Treasurer",
    period: "Aug 2022 – Dec 2025",
    location: "Champaign, IL",
    bullets: [
      "Led and simplified complex STEM topics for 60+ K-12 classroom activities to educate underserved students.",
      "Managed expenses and led 30+ college student fundraising events and professional development workshops.",
    ],
  },
];

const skillCategories = [
  {
    label: "Programming & Engineering",
    skills: "Python, C++, Java, HTML, SQL, MATLAB, LightGBM, NumPy, Pandas, Jupyter, Excel VBA, Fusion360, CAD, PCB Testing, DFMEA",
  },
  {
    label: "Product & Design",
    skills: "Figma, Scrum, Jira, Aha!, Confluence, Asana, Atlassian, Firebase, Supabase, Docker, Vercel",
  },
  {
    label: "GTM & Growth",
    skills: "HubSpot, Clay, Salesforce, Zapier, N8N, Tableau, Instantly, Google Suite, Microsoft, AI Agents",
  },
  {
    label: "Languages",
    skills: "English (fluent), Hindi (fluent), Spanish (conversational)",
  },
  {
    label: "Interests",
    skills: "Basketball, Aviation (pursuing pilot's license), Rock Climbing, Traveling, Weightlifting, Chicago Sports, Cooking, Hiking, Kayaking",
  },
];

const certifications = [
  "GTM Engineer School (Cohort 3)",
  "AirOps Content Engineer",
  "Microsoft Azure AI Essentials",
  "Aha! Product Management Professional",
  "LinkedIn: Agentic AI",
  "AI-Driven Project Manager",
  "Clay: AI Skills, Automated Inbound, Automated Outbound",
];

/* ─────────────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
      {children}
    </h2>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <div>
          <span className="font-semibold text-gray-900">{item.company}</span>
          {item.subtitle && (
            <span className="text-gray-500 text-sm ml-2">— {item.subtitle}</span>
          )}
        </div>
        <span className="text-gray-500 text-sm flex-shrink-0">{item.location}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <span className="text-gray-600 text-sm italic">{item.role}</span>
        <span className="text-gray-400 text-sm">{item.period}</span>
      </div>
      <ul className="space-y-1.5 mt-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-2">
            <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeadershipCard({ item }: { item: LeadershipItem }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <span className="font-semibold text-gray-900">{item.org}</span>
        <span className="text-gray-500 text-sm flex-shrink-0">{item.location}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <span className="text-gray-600 text-sm italic">{item.role}</span>
        <span className="text-gray-400 text-sm">{item.period}</span>
      </div>
      <ul className="space-y-1.5 mt-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-2">
            <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-12">
      {/* ── Life Story ── */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">About Me:</h1>
      <p className="text-gray-500 mb-8">Here&apos;s a little overview of my life so far :</p>

      <div className="space-y-5">
        {lifeStory.map((entry, i) => (
          <p key={i} className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">{entry.age}:</strong> {entry.text}
          </p>
        ))}
      </div>

      {/* ── Professional Experience ── */}
      <SectionHeading>Professional Experience</SectionHeading>
      {experience.map((item, i) => (
        <ExperienceCard key={i} item={item} />
      ))}

      {/* ── Leadership & Projects ── */}
      <SectionHeading>Leadership &amp; Projects</SectionHeading>
      {leadership.map((item, i) => (
        <LeadershipCard key={i} item={item} />
      ))}

      {/* ── Education ── */}
      <SectionHeading>Education</SectionHeading>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
          <span className="font-semibold text-gray-900">University of Illinois Urbana-Champaign</span>
          <span className="text-gray-400 text-sm">Aug 2022 – May 2026</span>
        </div>
        <p className="text-gray-600 text-sm italic mb-1">
          Bachelor of Science, Industrial &amp; Systems Engineering | Minor in Computer Science
        </p>
        <p className="text-gray-500 text-sm mb-2">GPA: 3.58 / 4.0</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-medium">Relevant Coursework:</span> Database Systems, Artificial
          Intelligence, Data Structures &amp; Algorithms, Data Mining, Applied Machine Learning,
          Internet of Things
        </p>
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
          <span className="font-semibold text-gray-900">Neuqua Valley High School</span>
          <span className="text-gray-400 text-sm">2018 – 2022</span>
        </div>
        <p className="text-gray-600 text-sm italic">High School Diploma</p>
      </div>

      {/* Certifications */}
      <div className="mt-6">
        <p className="font-medium text-gray-800 mb-2 text-sm">Certifications (2025–2026):</p>
        <ul className="space-y-1">
          {certifications.map((cert, i) => (
            <li key={i} className="text-gray-700 text-sm flex gap-2">
              <span className="text-gray-400 flex-shrink-0">•</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Skills & Interests ── */}
      <SectionHeading>Skills &amp; Interests</SectionHeading>

      <div className="space-y-5">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <p className="font-medium text-gray-800 text-sm mb-1">{cat.label}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{cat.skills}</p>
          </div>
        ))}
      </div>

      {/* bottom padding */}
      <div className="h-16" />
    </div>
  );
}
