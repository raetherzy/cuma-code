import { Service } from "./types";

export const services: Service[] = [
  {
    category: "Frontend",
    icon: "</>",
    stacks: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "{}",
    stacks: ["Node.js", "Express", "Laravel (PHP)", "Python/Django", "FastAPI"],
  },
  {
    category: "Mobile",
    icon: "[]",
    stacks: ["React Native", "Flutter"],
  },
  {
    category: "Database",
    icon: "DB",
    stacks: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "CMS / No-Code",
    icon: "WP",
    stacks: ["WordPress", "Webflow", "Notion CMS"],
  },
  {
    category: "DevOps / Deploy",
    icon: ">>",
    stacks: ["Vercel", "Netlify", "Railway", "VPS (Nginx)", "Cloudflare"],
  },
  {
    category: "Lainnya",
    icon: "++",
    stacks: ["Bot WhatsApp", "Telegram Bot", "Scraper", "Automation", "REST API"],
  },
];
