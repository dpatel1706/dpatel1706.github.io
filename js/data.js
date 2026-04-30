/* =========================================
   data.js — Single Source of Truth
   All portfolio content lives here.
   Edit this file to update the portfolio.
   ========================================= */

const DATA = {

  /* ---- Skills ---- */
  skills: [
    {
      icon: '🤖',
      name: 'AI & LLMs',
      category: 'ai',
      tags: [
        { label: 'Claude API',      color: 'cyan'   },
        { label: 'GPT-4',           color: 'cyan'   },
        { label: 'Gemini',          color: 'cyan'   },
        { label: 'RAG Pipelines',   color: 'cyan'   },
        { label: 'LangChain',       color: 'cyan'   },
        { label: 'Embeddings',      color: 'cyan'   },
        { label: 'Fine-tuning',     color: 'cyan'   },
        { label: 'Prompt Eng.',     color: 'cyan'   },
        { label: 'AI Agents',       color: 'cyan'   },
      ],
    },
    {
      icon: '🧠',
      name: 'Machine Learning',
      category: 'ai',
      tags: [
        { label: 'PyTorch',         color: 'violet' },
        { label: 'Transformers',    color: 'violet' },
        { label: 'Diffusion Models',color: 'violet' },
        { label: 'UNet',            color: 'violet' },
        { label: 'scikit-learn',    color: 'violet' },
        { label: 'NumPy',           color: 'violet' },
        { label: 'Pandas',          color: 'violet' },
        { label: 'Model Validation',color: 'violet' },
      ],
    },
    {
      icon: '☁️',
      name: 'Cloud & DevOps',
      category: 'cloud',
      tags: [
        { label: 'AWS EC2 / S3',    color: 'rose'   },
        { label: 'GCP',             color: 'rose'   },
        { label: 'Docker',          color: 'rose'   },
        { label: 'Kubernetes',      color: 'rose'   },
        { label: 'Jenkins',         color: 'rose'   },
        { label: 'GitHub Actions',  color: 'rose'   },
        { label: 'CI/CD',           color: 'rose'   },
        { label: 'CloudWatch',      color: 'rose'   },
      ],
    },
    {
      icon: '⚙️',
      name: 'Programming',
      category: 'eng',
      tags: [
        { label: 'Python',          color: 'amber'  },
        { label: 'JavaScript',      color: 'amber'  },
        { label: 'Java',            color: 'amber'  },
        { label: 'C / C++',         color: 'amber'  },
        { label: 'C#',              color: 'amber'  },
        { label: 'SQL',             color: 'amber'  },
        { label: 'Bash',            color: 'amber'  },
      ],
    },
    {
      icon: '🧪',
      name: 'QA & Automation',
      category: 'eng',
      tags: [
        { label: 'Selenium',        color: 'cyan'   },
        { label: 'Playwright',      color: 'cyan'   },
        { label: 'pytest',          color: 'cyan'   },
        { label: 'Robot Framework', color: 'cyan'   },
        { label: 'unittest',        color: 'cyan'   },
        { label: 'BDD / Gherkin',   color: 'cyan'   },
        { label: 'REST API Testing',color: 'cyan'   },
      ],
    },
    {
      icon: '🔗',
      name: 'Integrations & Tools',
      category: 'tools',
      tags: [
        { label: 'Monday.com API',  color: 'violet' },
        { label: 'Square API',      color: 'violet' },
        { label: 'Twilio',          color: 'violet' },
        { label: 'JotForm',         color: 'violet' },
        { label: 'Postman',         color: 'violet' },
        { label: 'JIRA',            color: 'violet' },
        { label: 'Tableau',         color: 'violet' },
        { label: 'Power BI',        color: 'violet' },
      ],
    },
    {
      icon: '🔐',
      name: 'Security & Data',
      category: 'tools',
      tags: [
        { label: 'Blockchain',      color: 'rose'   },
        { label: 'Solidity',        color: 'rose'   },
        { label: 'PostgreSQL',      color: 'rose'   },
        { label: 'MongoDB',         color: 'rose'   },
        { label: 'Git',             color: 'rose'   },
        { label: 'Linux',           color: 'rose'   },
      ],
    },
    {
      icon: '📊',
      name: 'Data Visualization',
      category: 'tools',
      tags: [
        { label: 'Tableau',         color: 'amber'  },
        { label: 'Power BI',        color: 'amber'  },
        { label: 'Matplotlib',      color: 'amber'  },
        { label: 'Seaborn',         color: 'amber'  },
        { label: 'Allure',          color: 'amber'  },
      ],
    },
  ],

  /* ---- Experience ---- */
  experience: [
    {
      role:    'AI Automation Engineer Intern',
      company: 'Robbie & Co.',
      location:'New York, NY',
      date:    'Jun 2025 – Dec 2025',
      bullets: [
        'Architected and deployed a full-stack AI automation platform integrating <strong>Square Payments, Monday.com CRM</strong>, and custom web portals — replacing a paper-based operation entirely for a high-volume menswear business.',
        'Shipped a <strong>natural-language order lookup portal</strong> using the Anthropic Claude API, enabling staff to query live business data in plain English via REST APIs with dynamic column mapping.',
        'Reduced order processing time by <strong>~35%</strong> and eliminated manual data-entry errors through automated multi-step intake, measurement collection, and rental-return workflows.',
        'Resolved complex CORS and API integration challenges across Anthropic, Monday.com, and Square, building a scalable event-driven architecture.',
      ],
    },
    {
      role:    'AI Researcher',
      company: 'Yeshiva University — Katz School',
      location:'New York, NY',
      date:    'Dec 2024 – Present',
      bullets: [
        'Engineering <strong>ML model validation pipelines</strong> for high-dimensional medical data — dataset quality, reproducibility checks, edge-case testing, and reliable model evaluation.',
        'Achieved <strong>Top-15 globally</strong> (out of 2,400+ teams) at the ARC × USDC Hackathon NYC — built AidArc, an AI + blockchain disaster-relief platform, recognized for real-world impact.',
        '<strong>2nd Place, YU Innovation Challenge</strong> — built DMIING, a decentralized blockchain messaging app with end-to-end encryption and verified identity.',
      ],
    },
    {
      role:    'Graduate Assistant',
      company: 'Yeshiva University',
      location:'Manhattan, NY',
      date:    'Jan 2025 – Mar 2026',
      bullets: [
        'Automated GPA conversion and applicant evaluation pipelines using Python rule-based logic, reducing manual processing time by <strong>~25%</strong> across admissions workflows.',
        'Identified systemic workflow inefficiencies and proposed automation-driven improvements adopted by the admissions team.',
        'Led the Katz Indian Students Association as President — organized 100+ attendee events, managed budgeting and university partnerships.',
      ],
    },
    {
      role:    'Software QA Engineer',
      company: 'Veritas Technologies LLC',
      location:'India',
      date:    'Jul 2022 – Aug 2024',
      bullets: [
        'Built automated regression testing pipelines using <strong>Selenium + Jenkins CI/CD</strong>, cutting manual testing effort by <strong>40%</strong> and accelerating release cycles by <strong>25%</strong>.',
        'Designed cloud resource monitoring automation (AWS CloudWatch) that saved <strong>$25,000/month</strong> in infrastructure costs.',
        'Improved pre-production defect detection by <strong>30%</strong> and increased system stability by <strong>~20%</strong> through end-to-end API and UI test strategies.',
        'Expanded automation coverage by <strong>35%</strong> across critical modules, reducing regression risk and cutting deployment turnaround by 15–20%.',
      ],
    },
  ],

  /* ---- Projects ---- */
  projects: [
    {
      badge:      '🏆 Top-15 / 2,400+ Teams',
      badgeStyle: 'amber',
      title:      'AidArc — AI Disaster Relief Platform',
      desc:       'AI + blockchain system for emergency financial aid. LLM-driven eligibility logic combined with Solidity smart contracts for real-time, tamper-proof disbursement. Built at ARC × USDC Hackathon NYC — judges cited real-world impact and technical execution.',
      stack:      [
        { label: 'Python',    color: 'cyan'   },
        { label: 'LLMs',      color: 'cyan'   },
        { label: 'Blockchain',color: 'violet' },
        { label: 'Solidity',  color: 'violet' },
        { label: 'REST APIs', color: 'cyan'   },
      ],
      link: '#',
    },
    {
      badge:      '🥈 2nd Place — YU Innovation Challenge',
      badgeStyle: 'amber',
      title:      'DMIING — Blockchain Messaging App',
      desc:       'Decentralized messaging with end-to-end encryption and blockchain-verified identity. Defeated 50+ competing teams. Designed for security-critical communication where trust and authenticity are non-negotiable.',
      stack:      [
        { label: 'Python',   color: 'cyan'   },
        { label: 'Solidity', color: 'violet' },
        { label: 'Web3',     color: 'violet' },
      ],
      link: '#',
    },
    {
      badge:      'RAG System',
      badgeStyle: 'violet',
      title:      'RAG-Based LLM Assistant',
      desc:       'Retrieval-Augmented Generation assistant using Python, LangChain, embeddings and LLMs for natural-language querying over structured business data. Significantly reduced manual lookup effort across operational workflows.',
      stack:      [
        { label: 'Python',    color: 'cyan'   },
        { label: 'LangChain', color: 'violet' },
        { label: 'Embeddings',color: 'violet' },
        { label: 'LLMs',      color: 'cyan'   },
      ],
      link: '#',
    },
    {
      badge:      'Deep Learning',
      badgeStyle: 'violet',
      title:      'DoseDiff — Radiotherapy Diffusion Model',
      desc:       'Diffusion model pipeline using PyTorch and UNet-based architecture for radiotherapy dose prediction. Robust preprocessing and evaluation on high-dimensional clinical datasets with focus on medical AI safety.',
      stack:      [
        { label: 'PyTorch',         color: 'violet' },
        { label: 'UNet',            color: 'violet' },
        { label: 'Diffusion Models',color: 'violet' },
        { label: 'Python',          color: 'cyan'   },
      ],
      link: '#',
    },
    {
      badge:      'Real-Time AI',
      badgeStyle: 'rose',
      title:      'CNN Audio Classification System',
      desc:       'Real-time CNN-based audio classifier trained on ESC-50 for low-latency emergency sound detection. Designed for acoustic surveillance and safety-critical applications requiring sub-100ms inference.',
      stack:      [
        { label: 'Python',    color: 'cyan'   },
        { label: 'CNN',       color: 'violet' },
        { label: 'PyTorch',   color: 'violet' },
        { label: 'ESC-50',    color: 'rose'   },
      ],
      link: '#',
    },
    {
      badge:      'Production AI',
      badgeStyle: 'cyan',
      title:      'AI Business Automation Portal',
      desc:       'Full-stack automation for Robbie & Co. — digitizing the entire tuxedo rental lifecycle from intake to return. NLP-powered order lookup, Monday.com + Square integration, and measurement collection workflows.',
      stack:      [
        { label: 'Python',       color: 'cyan'   },
        { label: 'Anthropic API',color: 'amber'  },
        { label: 'Monday.com',   color: 'amber'  },
        { label: 'Square API',   color: 'amber'  },
        { label: 'JavaScript',   color: 'cyan'   },
      ],
      link: '#',
    },
  ],

  /* ---- Awards ---- */
  awards: [
    {
      icon:      '🏆',
      title:     'ARC × USDC Hackathon NYC',
      sub:       'AI + Blockchain · AidArc — Disaster Relief Platform',
      highlight: 'Top 15 globally / 2,400+ teams',
    },
    {
      icon:      '🥈',
      title:     'YU Innovation Challenge',
      sub:       'DMIING — Blockchain Secure Messaging App',
      highlight: '2nd Place / 50+ competing teams',
    },
    {
      icon:      '🎓',
      title:     'Academic Excellence',
      sub:       'M.S. Artificial Intelligence — Yeshiva University',
      highlight: 'Perfect 4.0 GPA',
    },
    {
      icon:      '💰',
      title:     'Cloud Cost Optimization',
      sub:       'AWS Monitoring Automation — Veritas Technologies',
      highlight: '$25,000 / month saved',
    },
  ],

  /* ---- Education ---- */
  education: [
    {
      degree:  'Master of Science in Artificial Intelligence',
      school:  'Yeshiva University — Katz School of Science and Health',
      location:'New York, NY',
      period:  'Aug 2024 – May 2026',
      gpa:     '4.0 / 4.0',
      honors:  null,
    },
    {
      degree:  'Bachelor of Engineering — Computer Science',
      school:  'Savitribai Phule Pune University · Sinhgad Institute of Technology',
      location:'Pune, India',
      period:  'Jul 2018 – Jul 2022',
      gpa:     '3.76 / 4.0',
      honors:  'Honors in AI & Machine Learning',
    },
  ],

};
