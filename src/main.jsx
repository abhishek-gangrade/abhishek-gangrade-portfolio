import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* ==========================================================================
   ICONS (Crisp, inline SVGs for zero-dependency high-fidelity technical UI)
   ========================================================================== */

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B8D76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconServer = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconNetwork = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <path d="M5 16v-4h14v4" />
    <path d="M12 8v4" />
  </svg>
);

const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.07-7.07l-2.12 2.12M7.05 16.95l-2.12 2.12m12.14 0l-2.12-2.12M7.05 7.05L4.93 4.93" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconAward = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const IconBook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ==========================================================================
   TECHNICAL DATA & VERIFIED CONTENT
   ========================================================================== */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "SIP Experience", href: "#sip" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const EXPERTISE_CARDS = [
  {
    number: "01",
    tag: "FULL-STACK",
    icon: <IconCode />,
    title: "Full-Stack Development",
    text: "Building end-to-end applications with React.js, JavaScript, Tailwind CSS, Node.js, Express.js, and RESTful architectures. Focused on clean state management and responsive client experiences.",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"]
  },
  {
    number: "02",
    tag: "BACKEND & DATA",
    icon: <IconServer />,
    title: "Backend Engineering",
    text: "Implementing secure JWT authentication, role-based authorization, MongoDB schemas, dynamic business calculations, file pipelines with Cloudinary, and Socket.IO real-time event updates.",
    technologies: ["MongoDB", "JWT Auth", "RBAC", "Socket.IO", "API Design"]
  },
  {
    number: "03",
    tag: "NETWORKING",
    icon: <IconNetwork />,
    title: "Computer Networking",
    text: "Designing and analyzing enterprise network topologies. Practical knowledge of CCNA-level routing, switching, OSPF dynamic routing, VLAN segmentation, DHCP, IPv4 VLSM, and ACL security policies.",
    technologies: ["OSPF Routing", "VLANs / Trunking", "IPv4 Subnetting", "ACLs / STP", "Packet Tracer"]
  },
  {
    number: "04",
    tag: "ALGORITHMS",
    icon: <IconBrain />,
    title: "Problem Solving & DSA",
    text: "Strong foundational problem solving in Java with 100+ problems solved on LeetCode. Covers core data structures (arrays, linked lists, stacks, queues, heaps), recursion, sorting, and algorithmic debugging with clean implementations.",
    technologies: ["Java", "100+ LeetCode", "Arrays", "LinkedList", "Stacks & Queues", "Heap", "Recursion"]
  }
];

const SKILLS_BY_CATEGORY = {
  "Core Computer Science": [
    "Data Structures & Algorithms (100+ LeetCode)",
    "OOP",
    "Operating Systems",
    "DBMS",
    "Computer Networks"
  ],
  Frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT",
    "Socket.IO"
  ],
  Databases: [
    "MongoDB",
    "MongoDB Atlas",
    "SQL"
  ],
  Languages: [
    "Java",
    "JavaScript"
  ],
  Networking: [
    "Routing & Switching",
    "OSPF",
    "VLAN",
    "DHCP",
    "Subnetting",
    "IPv4",
    "ACL",
    "STP",
    "TCP/IP",
    "DNS",
    "Cisco Packet Tracer"
  ],
  "Tools & Practices": [
    "Git",
    "VS Code",
    "API Development",
    "SDLC & Agile",
    "Problem Solving"
  ]
};

const CERTIFICATIONS_DATA = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Medi-Caps University · Cisco Networking Academy",
    date: "25 Nov 2025",
    proof: "/certificates/ccna-introduction-to-networks.jpg",
    category: "CISCO NETWORKING",
    certId: null
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Medi-Caps University · Cisco Networking Academy",
    date: "30 Mar 2026",
    certId: "2f7928da-4df5-4c00-847a-6c2306bbe96f",
    proof: "/certificates/ccna-switching-routing-wireless-essentials.pdf",
    category: "CISCO NETWORKING"
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Medi-Caps University · Cisco Networking Academy",
    date: "05 May 2026",
    certId: "59026658-d4a0-42ac-9780-7ea343aed8f9",
    proof: "/certificates/ccna-enterprise-networking-security-automation.pdf",
    category: "CISCO NETWORKING"
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Medi-Caps University · Cisco Networking Academy",
    date: "29 Apr 2026",
    certId: "b1caf5a0-e87a-49fd-a440-cd86f9b09146",
    proof: "/certificates/javascript-essentials-1.pdf",
    category: "SOFTWARE ENGINEERING"
  },
  {
    title: "Alpha (DSA with Java)",
    issuer: "Apna College",
    date: "Course completion",
    certId: "6818e50cd2887f3179076717",
    proof: "/certificates/alpha-dsa-with-java.pdf",
    category: "DATA STRUCTURES & ALGORITHMS"
  }
];

// Verified Societal Internship Program (SIP) Details
const SIP_DETAILS = {
  program: "Societal Internship Program (SIP) — IT, AI & Science Awareness",
  school: "Shashkiya Utkrisht Vidhyalay, Dhulkot",
  location: "Dhulkot, Nepanagar, Burhanpur, Madhya Pradesh",
  dates: "09 July 2026 – 25 July 2026",
  university: "Medi-Caps University",
  mentor: "Prof. Arjun Dixit",
  targetClasses: "Classes 9th–12th",
  reportedLectures: "45 Lectures",
  reportedHours: "60 Hours",
  summary:
    "Conducted educational sessions for students in Classes 9–12 covering Information Technology, Cyber Security, Artificial Intelligence, Computer Networking, Mathematics, Statistics, Chemistry, and Physics. Introduced foundational digital concepts, explained cyber-safety practices, and used interactive examples to make technical and academic topics easier to understand.",
  contributions: [
    "Introduced foundational IT, Cyber Security, AI, and computer networking concepts to high school students.",
    "Explained safe online practices, password hygiene, and digital privacy awareness.",
    "Supported core academic curriculum learning in Mathematics, Statistics, Chemistry, and Physics.",
    "Adapted explanations to accommodate students with diverse levels of prior computer literacy.",
    "Facilitated structured daily revision, guided problem-solving, and interactive doubt-clearing sessions."
  ],
  subjects: [
    "Information Technology",
    "Cyber Security & Online Safety",
    "Artificial Intelligence Basics",
    "Computer Networking Fundamentals",
    "Mathematics",
    "Statistics",
    "Physics",
    "Chemistry"
  ]
};

/* ==========================================================================
   MAIN APPLICATION COMPONENT
   ========================================================================== */

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [networkViewTab, setNetworkViewTab] = useState("topology"); // "topology" | "config"

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("agangrade72@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="portfolioRoot">
      <a href="#mainContent" className="skipToContent">
        Skip to main content
      </a>

      {/* ==================================================================
          STICKY NAVIGATION BAR
          ================================================================== */}
      <header className="navHeader">
        <div className="navContainer">
          <a href="#home" className="brandLogo" aria-label="Abhishek Gangrade - Home" onClick={closeMobileMenu}>
            <span className="brandMono">AG</span>
            <span className="brandDot" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktopNav" aria-label="Primary site navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="navAnchor">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navActions">
            <a
              href="/Abhishek-Gangrade-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btnResume"
              aria-label="Download or view Abhishek Gangrade Resume (opens in new tab)"
            >
              <span>Resume</span>
              <IconExternal />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobileMenuToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobileMenuDrawer ${mobileMenuOpen ? "isOpen" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobileMenuBackdrop" onClick={closeMobileMenu} />
        <div className="mobileMenuContent">
          <div className="mobileMenuHeader">
            <span className="mobileMenuBrand">ABHISHEK GANGRADE</span>
            <button
              type="button"
              className="mobileMenuCloseBtn"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
            >
              <IconClose />
            </button>
          </div>
          <nav className="mobileNavLinks" aria-label="Mobile navigation links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="mobileNavLink" onClick={closeMobileMenu}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobileMenuFooter">
            <a
              href="/Abhishek-Gangrade-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btnPrimary mobileResumeBtn"
              onClick={closeMobileMenu}
            >
              <span>View Resume (PDF)</span>
              <IconExternal />
            </a>
            <div className="mobileSocialRow">
              <a href="https://github.com/abhishek-gangrade" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <IconGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhishek-gangrade-606b47307/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <IconLinkedin /> LinkedIn
              </a>
              <a href="mailto:agangrade72@gmail.com" aria-label="Send email">
                <IconMail /> Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <main id="mainContent">
        {/* ==================================================================
            HERO SECTION: ENGINEERING-FOCUSED INTRODUCTION
            ================================================================== */}
        <section id="home" className="section heroSection" aria-label="Introduction">
          <div className="heroLayout">
            <div className="heroCopyBlock">
              <div className="technicalEyebrow">
                <span className="statusDot" />
                <span>SOFTWARE ENGINEERING • FULL-STACK DEVELOPMENT • NETWORKING</span>
              </div>

              <h1 className="heroTitle">
                Hi, I'm Abhishek.
                <span className="heroHeadlineSub">I build software and networked systems.</span>
              </h1>

              <p className="heroDescription">
                I'm a Computer Science and Engineering student at Medi-Caps University, focused on building practical
                full-stack applications and understanding the systems that power them.
              </p>

              <div className="heroActionGroup">
                <a href="#projects" className="btn btnPrimary">
                  Explore My Projects
                </a>
                <a
                  href="/Abhishek-Gangrade-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnSecondary"
                >
                  <span>Download Resume</span>
                  <IconExternal />
                </a>
              </div>

              <div className="heroContactLinks">
                <a
                  href="https://github.com/abhishek-gangrade"
                  target="_blank"
                  rel="noreferrer"
                  className="inlineLink"
                >
                  <IconGithub />
                  <span>GitHub</span>
                  <IconExternal />
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-gangrade-606b47307/"
                  target="_blank"
                  rel="noreferrer"
                  className="inlineLink"
                >
                  <IconLinkedin />
                  <span>LinkedIn</span>
                  <IconExternal />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inlineLink copyEmailBtn"
                  title="Click to copy email address"
                  aria-label="Copy email address"
                >
                  <IconMail />
                  <span>agangrade72@gmail.com</span>
                  {emailCopied ? <IconCheck /> : <IconCopy />}
                </button>
              </div>
            </div>

            {/* TECHNICAL PROFILE & SYSTEMS VISUAL */}
            <aside className="heroVisualCard" aria-label="Engineering Profile and System Architecture Card">
              <div className="cardTerminalHeader">
                <div className="terminalDots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminalTitle">ENGINEERING_PROFILE.SPEC</div>
                <div className="terminalBadge">ACTIVE</div>
              </div>

              <div className="cardIdentityHeader">
                <div className="monogramBadge">
                  <span>AG</span>
                  <span className="monogramDot" />
                </div>
                <div className="identityMeta">
                  <span className="identityName">Abhishek Gangrade</span>
                  <span className="identityRole">Full-Stack & Systems Developer</span>
                  <span className="identityLocation">Indore, Madhya Pradesh · 2027</span>
                </div>
              </div>

              <div className="cardFocusPillars">
                <div className="pillarItem">
                  <div className="pillarIcon">
                    <IconCode />
                  </div>
                  <div className="pillarContent">
                    <strong>Full-Stack Development</strong>
                    <span>React.js, Node.js, Express, REST APIs, Tailwind</span>
                  </div>
                </div>

                <div className="pillarItem">
                  <div className="pillarIcon">
                    <IconServer />
                  </div>
                  <div className="pillarContent">
                    <strong>Backend Engineering</strong>
                    <span>MongoDB, JWT Auth, RBAC, Socket.IO Events</span>
                  </div>
                </div>

                <div className="pillarItem">
                  <div className="pillarIcon">
                    <IconNetwork />
                  </div>
                  <div className="pillarContent">
                    <strong>Computer Networking</strong>
                    <span>OSPF, VLANs, Routing & Switching, Packet Tracer</span>
                  </div>
                </div>
              </div>

              <div className="cardMetricsGrid">
                <div className="metricBlock">
                  <span className="metricValue">8.28</span>
                  <span className="metricLabel">CGPA / 10</span>
                </div>
                <div className="metricBlock">
                  <span className="metricValue">2027</span>
                  <span className="metricLabel">B.Tech CSE</span>
                </div>
                <div className="metricBlock">
                  <span className="metricValue">3x</span>
                  <span className="metricLabel">CCNA Modules</span>
                </div>
              </div>

              <div className="cardStatusFooter">
                <span className="statusPing">
                  <span className="pingCircle" />
                  <span className="pingDot" />
                  Available for technical internships & software opportunities
                </span>
              </div>
            </aside>
          </div>
        </section>

        {/* ==================================================================
            01 / ABOUT SECTION
            ================================================================== */}
        <section id="about" className="section aboutSection" aria-labelledby="aboutHeading">
          <div className="sectionHeader">
            <div className="sectionIndexTag">
              <span className="sectionNum">01</span>
              <span className="sectionSlash">/</span>
              <span className="sectionTagText">ABOUT</span>
            </div>
            <h2 id="aboutHeading" className="sectionTitle">
              A developer with a <span className="highlight">systems mindset.</span>
            </h2>
          </div>

          <div className="aboutGrid">
            <div className="aboutNarrative">
              <p className="narrativeLead">
                I enjoy building applications that solve practical problems, from connecting students and alumni to
                simplifying local printing workflows. Alongside full-stack development, I study networking fundamentals
                to understand how systems communicate, operate, and scale.
              </p>
              <p>
                Whether configuring end-to-end authentication in a MERN stack or modeling OSPF dynamic routing
                topologies in Cisco Packet Tracer, I believe in grounding software engineering in rock-solid foundational
                logic, clean code, and predictable system behavior.
              </p>

              <div className="systemsPhilosophy">
                <div className="philosophyCard">
                  <div className="philosophyIcon">
                    <IconCode />
                  </div>
                  <div>
                    <strong>Application Architecture</strong>
                    <span>Practical MERN systems with verified data persistence and role-based security.</span>
                  </div>
                </div>
                <div className="philosophyCard">
                  <div className="philosophyIcon">
                    <IconNetwork />
                  </div>
                  <div>
                    <strong>Network Infrastructure</strong>
                    <span>Layer 2/Layer 3 networking knowledge informing distributed systems design.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="aboutFactsCard">
              <div className="factsCardHeader">
                <span className="factsTerminalDot" />
                <span>VERIFIED ACADEMIC PROFILE</span>
              </div>

              <div className="factsList">
                <div className="factItem">
                  <span className="factLabel">DEGREE</span>
                  <strong className="factValue">B.Tech in Computer Science & Engineering</strong>
                  <span className="factSub">Four-year undergraduate program</span>
                </div>

                <div className="factItem">
                  <span className="factLabel">UNIVERSITY</span>
                  <strong className="factValue">Medi-Caps University</strong>
                  <span className="factSub">Madhya Pradesh, India</span>
                </div>

                <div className="factItem">
                  <span className="factLabel">CURRENT CGPA</span>
                  <div className="cgpaRow">
                    <strong className="cgpaValue">8.28</strong>
                    <span className="cgpaScale">/ 10</span>
                  </div>
                  <span className="factSub">Strong academic consistency</span>
                </div>

                <div className="factItem">
                  <span className="factLabel">EXPECTED GRADUATION</span>
                  <strong className="factValue">Class of 2027</strong>
                  <span className="factSub">Actively seeking SWE internships</span>
                </div>

                <div className="factItem">
                  <span className="factLabel">CORE FOCUS</span>
                  <strong className="factValue">Full-Stack Development & Networking</strong>
                  <span className="factSub">MERN Stack, Java DSA (100+ LeetCode), CCNA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            02 / TECHNICAL EXPERTISE
            ================================================================== */}
        <section id="expertise" className="section expertiseSection" aria-labelledby="expertiseHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">02</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">EXPERTISE</span>
              </div>
              <h2 id="expertiseHeading" className="sectionTitle">
                Core technical <span className="highlight">competencies.</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              Four focused areas that represent my verified technical capabilities across development, systems, and
              algorithmic problem solving.
            </p>
          </div>

          <div className="expertiseGrid">
            {EXPERTISE_CARDS.map((card) => (
              <article key={card.number} className="expertiseCard">
                <div className="cardTop">
                  <span className="cardIndexBadge">{card.number}</span>
                  <span className="cardTagBadge">{card.tag}</span>
                </div>

                <div className="expertiseIcon">{card.icon}</div>

                <h3 className="cardHeading">{card.title}</h3>
                <p className="cardBodyText">{card.text}</p>

                <div className="cardTechPills">
                  {card.technologies.map((tech) => (
                    <span key={tech} className="techPill">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================================
            03 / PROJECTS: SHOW REAL ENGINEERING WORK
            ================================================================== */}
        <section id="projects" className="section projectsSection" aria-labelledby="projectsHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">03</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">SELECTED WORK</span>
              </div>
              <h2 id="projectsHeading" className="sectionTitle">
                Projects built to <span className="highlight">solve real problems.</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              Engineering case studies demonstrating full-stack architecture, database design, real-time workflows, and
              network protocol modeling.
            </p>
          </div>

          {/* PROJECT A: HOMECOMING (FEATURED) */}
          <article className="projectCard featuredCaseStudy" aria-labelledby="homecomingTitle">
            <div className="projectMediaCol">
              <div className="mediaFrame">
                <img
                  src="/projects/homecoming-preview.png"
                  alt="Homecoming - Alumni-Student Networking Platform interface"
                  loading="lazy"
                />
                <div className="mediaOverlayTag">
                  <span className="tagDot" />
                  <span>FEATURED CASE STUDY</span>
                </div>
              </div>
            </div>

            <div className="projectContentCol">
              <div className="projectMetaLine">
                <span className="projectCategoryTag">01 · FULL-STACK · MERN ARCHITECTURE</span>
                <span className="projectStatusBadge">Production Verified</span>
              </div>

              <h3 id="homecomingTitle" className="projectTitle">
                Homecoming
              </h3>
              <p className="projectSubtitle">Alumni–Student Networking Platform</p>

              <div className="problemStatementBox">
                <strong>Problem:</strong> Students lack a dedicated, authentic channel to reach verified university
                alumni for mentorship, industry guidance, and career opportunity sharing.
              </div>

              <p className="projectDescription">
                A full-stack MERN application that bridges the gap between university students and alumni through
                role-based profiles, bilateral connection requests, secure direct messaging, and curated opportunity
                boards.
              </p>

              <div className="verifiedFeaturesList">
                <h4 className="featuresHeader">Verified Implemented Features:</h4>
                <ul>
                  <li>
                    <strong>Authentication & RBAC:</strong> Multi-role authorization (Student, Alumni, Administrator)
                    secured with JWT tokens and bcrypt password hashing.
                  </li>
                  <li>
                    <strong>Profile Management:</strong> Dynamic profiles capturing graduation timelines, skills, current
                    company/industry, and educational milestones.
                  </li>
                  <li>
                    <strong>Networking Workflows:</strong> Bilateral connection requests with accepted/pending status
                    handling and opportunity post boards.
                  </li>
                  <li>
                    <strong>Media Pipeline:</strong> Secure asset uploads and media hosting handled cleanly via
                    Cloudinary integration.
                  </li>
                </ul>
              </div>

              <div className="projectTechStackRow">
                <span className="stackLabel">STACK:</span>
                <div className="stackPills">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Tailwind CSS</span>
                  <span>JWT</span>
                  <span>REST API</span>
                  <span>Cloudinary</span>
                </div>
              </div>

              <div className="projectActionButtons">
                <a
                  href="https://homecoming-pi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnPrimary btnSm"
                >
                  <span>Live Demo</span>
                  <IconExternal />
                </a>
                <a
                  href="https://github.com/abhishek-gangrade/Homecoming.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnSecondary btnSm"
                >
                  <IconGithub />
                  <span>GitHub Repository</span>
                  <IconExternal />
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT B: PRINTNEAR */}
          <article className="projectCard printnearCaseStudy" aria-labelledby="printnearTitle">
            <div className="projectContentCol">
              <div className="projectMetaLine">
                <span className="projectCategoryTag techBlueTag">02 · FULL-STACK · REAL-TIME WORKFLOWS</span>
                <span className="projectStatusBadge">Deployed Live</span>
              </div>

              <h3 id="printnearTitle" className="projectTitle">
                PrintNear
              </h3>
              <p className="projectSubtitle">Hyper-Local Document Printing Platform</p>

              <div className="problemStatementBox">
                <strong>Problem:</strong> Students and local customers face long physical queues, manual page-counting,
                and opaque pricing at college and local print shops with no digital order queue.
              </div>

              <p className="projectDescription">
                A hyper-local printing platform connecting users with verified print shops. Customers configure document
                specifications, obtain instant server-calculated prices, and track order stages in real time with secure
                pickup verification.
              </p>

              <div className="verifiedFeaturesList">
                <h4 className="featuresHeader">Verified Implemented Workflows:</h4>
                <ul>
                  <li>
                    <strong>Shop Discovery & Map:</strong> Location-aware shop discovery utilizing Leaflet maps and
                    geospatial coordinates.
                  </li>
                  <li>
                    <strong>Dynamic Server Pricing:</strong> Real-time pricing calculations based on color/BW, double-sided
                    orientation, paper type, and binding parameters.
                  </li>
                  <li>
                    <strong>Coupon & Discount Engine:</strong> Vendor-managed shop-specific coupon codes with server-side
                    validation before order submission.
                  </li>
                  <li>
                    <strong>Order Pipeline & Verification:</strong> Live order status transitions (Received → Printing →
                    Ready) with vendor UTR payment review and unique customer pickup PIN verification.
                  </li>
                </ul>
              </div>

              <div className="projectTechStackRow">
                <span className="stackLabel">STACK:</span>
                <div className="stackPills">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Socket.IO</span>
                  <span>JWT</span>
                  <span>Leaflet</span>
                  <span>Cloudinary</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>

              <div className="projectActionButtons">
                <a
                  href="https://print-near-flax.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnPrimary btnSm"
                >
                  <span>Live Demo</span>
                  <IconExternal />
                </a>
                <a
                  href="https://github.com/abhishek-gangrade/PrintNear.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnSecondary btnSm"
                >
                  <IconGithub />
                  <span>GitHub Repository</span>
                  <IconExternal />
                </a>
              </div>
            </div>

            <div className="projectMediaCol">
              <div className="dualPreviewGrid">
                <figure className="previewFigure">
                  <img src="/projects/printnear-home.png" alt="PrintNear landing and shop search interface" loading="lazy" />
                  <figcaption>Customer Discovery & Landing</figcaption>
                </figure>
                <figure className="previewFigure">
                  <img
                    src="/projects/printnear-shop-config.png"
                    alt="PrintNear shop document configuration and pricing preview"
                    loading="lazy"
                  />
                  <figcaption>Print Configuration & Pricing</figcaption>
                </figure>
              </div>
            </div>
          </article>

          {/* PROJECT C: ENTERPRISE NETWORK SIMULATION (PACKET TRACER) */}
          <article className="projectCard networkSimulationCard" aria-labelledby="networkTitle">
            <div className="networkTopRow">
              <div>
                <div className="projectMetaLine">
                  <span className="projectCategoryTag tealTag">03 · NETWORKING · CISCO PACKET TRACER</span>
                  <span className="projectStatusBadge">Simulated & Documented</span>
                </div>
                <h3 id="networkTitle" className="projectTitle">
                  Enterprise Network Simulation
                </h3>
                <p className="projectSubtitle">OSPF Dynamic Routing & Multi-VLAN Campus Architecture</p>
              </div>

              <div className="networkViewToggle" role="tablist" aria-label="Network presentation tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={networkViewTab === "topology"}
                  className={`toggleBtn ${networkViewTab === "topology" ? "active" : ""}`}
                  onClick={() => setNetworkViewTab("topology")}
                >
                  Topology View
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={networkViewTab === "config"}
                  className={`toggleBtn ${networkViewTab === "config" ? "active" : ""}`}
                  onClick={() => setNetworkViewTab("config")}
                >
                  OSPF Spec View
                </button>
              </div>
            </div>

            <div className="networkBodyGrid">
              <div className="networkTextCol">
                <div className="problemStatementBox">
                  <strong>Objective:</strong> Design and configure a resilient, segmented campus network architecture
                  guaranteeing fast route convergence, departmental isolation, and centralized addressing.
                </div>

                <p className="projectDescription">
                  Modeled and validated an enterprise network topology in Cisco Packet Tracer implementing OSPF for
                  dynamic route selection, 802.1Q trunking, inter-VLAN routing on multilayer switches, DHCP relay, and
                  access control lists (ACLs) to regulate inter-segment traffic.
                </p>

                <div className="verifiedFeaturesList">
                  <h4 className="featuresHeader">Verified Implemented Configuration:</h4>
                  <ul>
                    <li>
                      <strong>Dynamic Routing:</strong> Multi-router Single-Area OSPF (Area 0) for automated path
                      discovery and redundant link convergence.
                    </li>
                    <li>
                      <strong>VLAN Segmentation:</strong> 802.1Q tagged VLANs partitioning departmental broadcast
                      domains with router-on-a-stick / SVI inter-VLAN routing.
                    </li>
                    <li>
                      <strong>IP Services:</strong> Centralized DHCP server distribution across subnets via IP helper
                      relays and VLSM subnetting.
                    </li>
                    <li>
                      <strong>Traffic Policy:</strong> Standard and Extended Access Control Lists (ACLs) enforcing
                      administrative boundaries and server subnet protection.
                    </li>
                  </ul>
                </div>

                <div className="projectTechStackRow">
                  <span className="stackLabel">PROTOCOLS:</span>
                  <div className="stackPills">
                    <span>OSPFv2</span>
                    <span>802.1Q VLAN</span>
                    <span>IPv4 Subnetting</span>
                    <span>DHCP Relay</span>
                    <span>ACL</span>
                    <span>STP</span>
                    <span>Cisco Packet Tracer</span>
                  </div>
                </div>
              </div>

              <div className="networkVisualCol">
                {networkViewTab === "topology" ? (
                  <div className="topologyWidget" aria-label="Network topology interactive visualization">
                    <div className="topologyHeader">
                      <span className="topoStatus">TOPOLOGY ARCHITECTURE // SIMULATION SPEC</span>
                      <span className="topoCode">AREA 0</span>
                    </div>

                    <div className="topologyDiagram">
                      <div className="topoNode coreNode">
                        <div className="nodeBadge">CORE-ROUTER-01</div>
                        <span className="nodeIp">10.0.0.1 /30 (OSPF Area 0)</span>
                      </div>

                      <div className="topoLinkLine vertical">
                        <span className="linkText">Gig0/0/0 · Redundant Trunk</span>
                      </div>

                      <div className="topoNode distNode">
                        <div className="nodeBadge">DIST-SWITCH-01</div>
                        <span className="nodeIp">Layer 3 SVI / Routing Engine</span>
                      </div>

                      <div className="vlanBranchesGrid">
                        <div className="vlanBranch">
                          <span className="vlanTag">VLAN 10</span>
                          <strong>Admin & Faculty</strong>
                          <span className="vlanSubnet">192.168.10.0/24</span>
                        </div>
                        <div className="vlanBranch">
                          <span className="vlanTag">VLAN 20</span>
                          <strong>Student Labs</strong>
                          <span className="vlanSubnet">192.168.20.0/24</span>
                        </div>
                        <div className="vlanBranch">
                          <span className="vlanTag">VLAN 30</span>
                          <strong>Campus Services</strong>
                          <span className="vlanSubnet">192.168.30.0/24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="configSnippetWidget" aria-label="OSPF Router Configuration Spec">
                    <div className="configSnippetHeader">
                      <span className="snippetFile">ROUTER-OSPF-CONFIG.IOS</span>
                      <span className="snippetLang">CISCO IOS CLI</span>
                    </div>
                    <pre className="configCode">
                      <code>{`! OSPF Dynamic Routing Configuration
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 192.168.20.0 0.0.0.255 area 0
Router(config-router)# passive-interface GigabitEthernet0/1

! Inter-VLAN Sub-Interface Config
Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# ip helper-address 10.0.0.2`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </article>
        </section>

        {/* ==================================================================
            04 / TECHNICAL TOOLKIT
            ================================================================== */}
        <section id="toolkit" className="section toolkitSection" aria-labelledby="toolkitHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">04</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">TECHNICAL TOOLKIT</span>
              </div>
              <h2 id="toolkitHeading" className="sectionTitle">
                Tools & technologies <span className="highlight">I work with.</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              A structured categorization of the languages, frameworks, databases, and networking protocols I use in
              software development and systems analysis.
            </p>
          </div>

          <div className="toolkitGrid">
            {Object.entries(SKILLS_BY_CATEGORY).map(([category, items]) => (
              <div key={category} className="toolkitCard">
                <div className="categoryHeader">
                  <span className="categoryIndicator" />
                  <h3 className="categoryTitle">{category}</h3>
                </div>
                <div className="categoryTags">
                  {items.map((skill) => (
                    <span key={skill} className="skillBadge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            05 / SOCIETAL INTERNSHIP PROGRAM (SIP) — COMMUNITY ENGAGEMENT
            ================================================================== */}
        <section id="sip" className="section sipSection" aria-labelledby="sipHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">05</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">COMMUNITY ENGAGEMENT</span>
              </div>
              <h2 id="sipHeading" className="sectionTitle">
                Societal Internship Program <span className="highlight">(SIP).</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              Applied teaching, digital awareness, and STEM educational engagement conducted at Shashkiya Utkrisht
              Vidhyalay under Medi-Caps University faculty mentorship.
            </p>
          </div>

          <div className="sipCaseStudyCard">
            {/* Context Header */}
            <div className="sipHeaderPanel">
              <div className="sipMetaInfo">
                <div className="sipProgramTag">ACADEMIC & FIELD ENGAGEMENT</div>
                <h3 className="sipSchoolTitle">{SIP_DETAILS.school}</h3>
                <div className="sipLocationRow">
                  <span>📍 {SIP_DETAILS.location}</span>
                  <span>🗓️ {SIP_DETAILS.dates}</span>
                  <span>🎓 {SIP_DETAILS.university}</span>
                </div>
                <div className="sipMentorLine">
                  <strong>Faculty Mentor:</strong> {SIP_DETAILS.mentor} · Medi-Caps University
                </div>
              </div>

              {/* Reported Highlights Grid */}
              <div className="sipStatsGrid">
                <div className="sipStatBox">
                  <div className="sipStatIcon">
                    <IconBook />
                  </div>
                  <strong className="sipStatNumber">45</strong>
                  <span className="sipStatLabel">Lectures Delivered</span>
                  <small className="sipStatNote">(Reported teaching sessions)</small>
                </div>

                <div className="sipStatBox">
                  <div className="sipStatIcon">
                    <IconClock />
                  </div>
                  <strong className="sipStatNumber">60</strong>
                  <span className="sipStatLabel">Hours Completed</span>
                  <small className="sipStatNote">(Reported engagement duration)</small>
                </div>

                <div className="sipStatBox">
                  <div className="sipStatIcon">
                    <IconUsers />
                  </div>
                  <strong className="sipStatNumber">9th–12th</strong>
                  <span className="sipStatLabel">Classes Reached</span>
                  <small className="sipStatNote">(High school students)</small>
                </div>
              </div>
            </div>

            {/* Description & Impact Summary */}
            <div className="sipContentBody">
              <div className="sipOverviewBlock">
                <h4 className="sipBlockTitle">Program Overview & Scope</h4>
                <p className="sipSummaryText">{SIP_DETAILS.summary}</p>
              </div>

              <div className="sipContributionsBlock">
                <h4 className="sipBlockTitle">Key Contributions & Educational Activities</h4>
                <ul className="sipContributionList">
                  {SIP_DETAILS.contributions.map((item, idx) => (
                    <li key={idx}>
                      <span className="bulletIcon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sipSubjectsBlock">
                <h4 className="sipBlockTitle">Academic & Technical Topics Covered</h4>
                <div className="sipSubjectBadges">
                  {SIP_DETAILS.subjects.map((subj) => (
                    <span key={subj} className="sipSubjectPill">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            06 / CERTIFICATIONS
            ================================================================== */}
        <section id="certifications" className="section certificationsSection" aria-labelledby="certHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">06</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">CERTIFICATIONS</span>
              </div>
              <h2 id="certHeading" className="sectionTitle">
                Verified <span className="highlight">credentials.</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              Official certifications issued by Cisco Networking Academy and recognized institutions, with direct links
              to verified proof documents.
            </p>
          </div>

          <div className="certificationsGrid">
            {CERTIFICATIONS_DATA.map((cert) => (
              <article key={cert.title} className="certificationCard">
                <div className="certCardHeader">
                  <span className="certDomainBadge">{cert.category}</span>
                  <span className="certDateBadge">{cert.date}</span>
                </div>

                <h3 className="certTitle">{cert.title}</h3>
                <p className="certIssuer">{cert.issuer}</p>

                {cert.certId && (
                  <div className="certIdBox">
                    <span className="idLabel">VERIFICATION ID:</span>
                    <code className="idValue">{cert.certId}</code>
                  </div>
                )}

                <div className="certFooter">
                  <a
                    href={cert.proof}
                    target="_blank"
                    rel="noreferrer"
                    className="btnCertLink"
                    aria-label={`View certificate document for ${cert.title}`}
                  >
                    <span>View Certificate</span>
                    <IconExternal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================================
            07 / EXPERIENCE & ACHIEVEMENTS
            ================================================================== */}
        <section id="experience" className="section experienceSection" aria-labelledby="expHeading">
          <div className="sectionHeaderWithSubtitle">
            <div>
              <div className="sectionIndexTag">
                <span className="sectionNum">07</span>
                <span className="sectionSlash">/</span>
                <span className="sectionTagText">EXPERIENCE</span>
              </div>
              <h2 id="expHeading" className="sectionTitle">
                Experience & <span className="highlight">achievements.</span>
              </h2>
            </div>
            <p className="sectionSubtitle">
              Verified institutional internships and competitive hackathon selections demonstrating practical execution.
            </p>
          </div>

          <div className="experienceTimeline">
            <article className="timelineEntry">
              <div className="timelineDateCol">
                <span className="datePill">JUN — JUL 2026</span>
                <span className="dateType">IN-HOUSE INTERNSHIP</span>
              </div>
              <div className="timelineContentCol">
                <div className="entryBadge">
                  <IconShield />
                  <span>CYBERSECURITY</span>
                </div>
                <h3 className="entryTitle">Palo Alto Networks Cybersecurity Internship (In-House)</h3>
                <p className="entryOrganization">Medi-Caps University, Indore</p>
                <p className="entryDescription">
                  Completed hands-on training and labs in Network Security Fundamentals (NSF) and Palo Alto Networks
                  Certified Network Security Administrator (PCNSA) concepts, covering firewall configuration, security
                  policies, and threat prevention. Configured and tested network security scenarios and documented
                  configurations, testing procedures, and outcomes through structured lab reports.
                </p>
              </div>
            </article>

            <article className="timelineEntry">
              <div className="timelineDateCol">
                <span className="datePill">2025</span>
                <span className="dateType">HACKATHON SELECTION</span>
              </div>
              <div className="timelineContentCol">
                <div className="entryBadge awardBadge">
                  <IconAward />
                  <span>NATIONAL RECOGNITION</span>
                </div>
                <h3 className="entryTitle">Smart India Hackathon (SIH) 2025</h3>
                <p className="entryOrganization">University-Level Selection Round · Medi-Caps University</p>
                <p className="entryDescription">
                  Cleared the university-level selection round for the Smart India Hackathon, demonstrating structured
                  problem-solving, software architecture design, and collaborative teamwork on real-world engineering problem statements.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ==================================================================
            08 / EDUCATION
            ================================================================== */}
        <section id="education" className="section educationSection" aria-labelledby="eduHeading">
          <div className="sectionHeader">
            <div className="sectionIndexTag">
              <span className="sectionNum">08</span>
              <span className="sectionSlash">/</span>
              <span className="sectionTagText">EDUCATION</span>
            </div>
            <h2 id="eduHeading" className="sectionTitle">
              Academic <span className="highlight">foundation.</span>
            </h2>
          </div>

          <div className="educationGrid">
            <div className="educationCard">
              <div className="educationDetails">
                <div className="degreeBadge">UNDERGRADUATE DEGREE · 2023 — 2027</div>
                <h3 className="institutionName">Medi-Caps University</h3>
                <p className="degreeTitle">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
                <p className="locationText">Indore, Madhya Pradesh, India</p>

                <div className="courseworkPills">
                  <span className="courseLabel">Key Subject Areas:</span>
                  <div className="pillsWrap">
                    <span>Data Structures & Algorithms</span>
                    <span>Computer Networks</span>
                    <span>Database Management (DBMS)</span>
                    <span>Object-Oriented Programming (Java)</span>
                    <span>Operating Systems</span>
                    <span>Full-Stack Web Engineering</span>
                  </div>
                </div>
              </div>

              <div className="cgpaBlock">
                <div className="cgpaCircle">
                  <span className="cgpaScore">8.28</span>
                  <span className="cgpaMax">/ 10.0</span>
                </div>
                <span className="cgpaCaption">Current Cumulative GPA</span>
              </div>
            </div>

            {/* Schooling Education from Updated Resume */}
            <div className="schoolingCard">
              <div className="schoolingItem">
                <div>
                  <span className="schoolingBadge">SENIOR SECONDARY (CLASS XII) · 2022</span>
                  <h4 className="schoolingName">Krishna Academy</h4>
                  <p className="schoolingSubject">Class 12 (PCM) · Physics, Chemistry, Mathematics</p>
                  <span className="schoolingLocation">Pandhana, Madhya Pradesh</span>
                </div>
                <div className="schoolingScoreBlock">
                  <span className="schoolScore">81.4%</span>
                  <span className="schoolScoreLabel">Class 12 Score</span>
                </div>
              </div>

              <div className="schoolingItem">
                <div>
                  <span className="schoolingBadge">SECONDARY (CLASS X) · 2020</span>
                  <h4 className="schoolingName">Krishna Academy</h4>
                  <p className="schoolingSubject">Class 10 · General Secondary Education</p>
                  <span className="schoolingLocation">Pandhana, Madhya Pradesh</span>
                </div>
                <div className="schoolingScoreBlock">
                  <span className="schoolScore">77.4%</span>
                  <span className="schoolScoreLabel">Class 10 Score</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            09 / CONTACT SECTION
            ================================================================== */}
        <section id="contact" className="section contactSection" aria-labelledby="contactHeading">
          <div className="sectionIndexTag centerTag">
            <span className="sectionNum">09</span>
            <span className="sectionSlash">/</span>
            <span className="sectionTagText">GET IN TOUCH</span>
          </div>

          <div className="contactCard">
            <div className="contactHeader">
              <h2 id="contactHeading" className="contactHeadingText">
                Let's connect and explore how I can contribute.
              </h2>
              <p className="contactSupportingText">
                I'm always open to learning, collaborating, and contributing to meaningful projects. Feel free to reach out
                if you'd like to connect.
              </p>
            </div>

            <div className="contactPrimaryActions">
              <a href="mailto:agangrade72@gmail.com" className="btn btnPrimary btnLg">
                <IconMail />
                <span>Send an Email</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="btn btnSecondary btnLg"
                aria-label="Copy email address to clipboard"
              >
                {emailCopied ? (
                  <>
                    <IconCheck />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <IconCopy />
                    <span>Copy: agangrade72@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            <div className="contactChannelsGrid">
              <a
                href="mailto:agangrade72@gmail.com"
                className="channelCard"
                title="Send an email to agangrade72@gmail.com"
              >
                <div className="channelIcon mail">
                  <IconMail />
                </div>
                <div className="channelInfo">
                  <span className="channelLabel">PRIMARY EMAIL</span>
                  <strong className="channelValue">agangrade72@gmail.com</strong>
                </div>
                <span className="channelActionIcon">↗</span>
              </a>

              <a
                href="tel:+919399629970"
                className="channelCard"
                title="Call +91-9399629970"
              >
                <div className="channelIcon phone">
                  <IconPhone />
                </div>
                <div className="channelInfo">
                  <span className="channelLabel">DIRECT PHONE</span>
                  <strong className="channelValue">+91-9399629970</strong>
                </div>
                <span className="channelActionIcon">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-gangrade-606b47307/"
                target="_blank"
                rel="noreferrer"
                className="channelCard"
                title="Open Abhishek's LinkedIn profile"
              >
                <div className="channelIcon linkedin">
                  <IconLinkedin />
                </div>
                <div className="channelInfo">
                  <span className="channelLabel">LINKEDIN PROFILE</span>
                  <strong className="channelValue">in/abhishek-gangrade</strong>
                </div>
                <span className="channelActionIcon">↗</span>
              </a>

              <a
                href="https://github.com/abhishek-gangrade"
                target="_blank"
                rel="noreferrer"
                className="channelCard"
                title="Open Abhishek's GitHub profile"
              >
                <div className="channelIcon github">
                  <IconGithub />
                </div>
                <div className="channelInfo">
                  <span className="channelLabel">GITHUB PROFILE</span>
                  <strong className="channelValue">abhishek-gangrade</strong>
                </div>
                <span className="channelActionIcon">↗</span>
              </a>
            </div>

            <div className="contactCardFooter">
              <span className="statusLocation">
                <span className="locationDot" />
                Based in Indore, Madhya Pradesh · Open to Software Engineering & Systems Opportunities
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          PAGE FOOTER
          ================================================================== */}
      <footer className="pageFooter">
        <div className="footerContainer">
          <div className="footerLeft">
            <div className="footerBrand">
              <strong>Abhishek Gangrade</strong>
              <span> · Software Engineer & Network Systems Student</span>
            </div>
            <p className="footerCopyright">
              © {new Date().getFullYear()} Abhishek Gangrade · Built with React & Vite. All verified records & credentials preserved.
            </p>
          </div>

          <div className="footerLinks">
            <a href="#home">Back to Top ↑</a>
            <a href="https://github.com/abhishek-gangrade" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhishek-gangrade-606b47307/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/Abhishek-Gangrade-Resume.pdf" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
            <a href="mailto:agangrade72@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);