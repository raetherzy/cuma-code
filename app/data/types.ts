export interface PortfolioProject {
  title: string;
  description: string;
  category: string;
  stacks: string[];
  link: string;
}

export interface Service {
  category: string;
  icon: string;
  stacks: string[];
}

export interface Testimonial {
  name: string;
  project: string;
  stars: number;
  quote: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  accent: string;
}
