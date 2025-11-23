export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  category: "security" | "fullstack" | "mobile" | "ai";
};

export const projects: Project[] = [
  {
    title: "Password Manager",
    description:
      "Zero-knowledge password vault. AES-256 encryption with Fernet, Argon2id hashing, PBKDF2-SHA256 key derivation. The server never stores or sees the decryption key.",
    stack: ["FastAPI", "React", "PostgreSQL", "AES-256", "Argon2", "Docker"],
    github: "https://github.com/HugoDGS/password-manager",
    category: "security",
  },
  {
    title: "SSH Honeypot",
    description:
      "Fake SSH server that captures brute-force login attempts in real time. GeoIP enrichment, analytics dashboard with hourly chart, top IPs and credential heatmap.",
    stack: ["Python", "asyncssh", "FastAPI", "React", "SQLite"],
    github: "https://github.com/HugoDGS/ssh-honeypot",
    category: "security",
  },
  {
    title: "Web Security Audit",
    description:
      "Automated scanner that inspects HTTP security headers, SSL/TLS certificate validity and exposed ports. Weighted scoring system graded A+ to D.",
    stack: ["Python", "FastAPI", "React", "SSL/TLS", "Docker"],
    github: "https://github.com/HugoDGS/web-security-audit",
    category: "security",
  },
  {
    title: "CV Analyzer",
    description:
      "AI-powered resume analyzer using GPT-4o-mini. Extracts strengths, weaknesses, keyword gaps and a job-match score. Supports PDF and plain text upload.",
    stack: ["FastAPI", "React", "OpenAI", "Python", "Docker"],
    github: "https://github.com/HugoDGS/cv-analyzer",
    category: "ai",
  },
  {
    title: "Job Tracker",
    description:
      "Full-stack application to track job applications with a kanban board, status history and stats dashboard. JWT auth, REST API, dark UI.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/HugoDGS/job-tracker",
    category: "fullstack",
  },
  {
    title: "Expense Tracker",
    description:
      "Cross-platform mobile app with offline-first SQLite storage, budget categories, custom SVG pie charts and monthly breakdown.",
    stack: ["React Native", "Expo", "TypeScript", "SQLite"],
    github: "https://github.com/HugoDGS/expense-tracker",
    category: "mobile",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Tailwind CSS", "Socket.io"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Python", "C#", ".NET"],
  },
  {
    label: "Database & DevOps",
    skills: ["PostgreSQL", "SQLite", "MongoDB", "Docker", "Git", "Linux", "Vercel"],
  },
  {
    label: "Security",
    skills: ["AES-256", "Argon2", "JWT", "SSL/TLS", "asyncssh", "PBKDF2"],
  },
];
