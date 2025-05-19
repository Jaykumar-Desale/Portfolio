
import { PortfolioData } from "@/types/portfolio";
import { v4 as uuidv4 } from "uuid";

export const defaultPortfolioData: PortfolioData = {
  profile: {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    summary: "Passionate developer with expertise in React, Node.js, and cloud architecture. I build scalable, user-friendly web applications with a focus on performance and accessibility.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  skills: [
    { id: uuidv4(), name: "React", proficiency: 90, category: "Frontend" },
    { id: uuidv4(), name: "TypeScript", proficiency: 85, category: "Languages" },
    { id: uuidv4(), name: "Node.js", proficiency: 80, category: "Backend" },
    { id: uuidv4(), name: "GraphQL", proficiency: 75, category: "Backend" },
    { id: uuidv4(), name: "AWS", proficiency: 70, category: "DevOps" },
    { id: uuidv4(), name: "Docker", proficiency: 65, category: "DevOps" },
    { id: uuidv4(), name: "TailwindCSS", proficiency: 85, category: "Frontend" },
    { id: uuidv4(), name: "PostgreSQL", proficiency: 75, category: "Database" },
  ],
  projects: [
    {
      id: uuidv4(),
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, cart functionality, and payment processing.",
      imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true,
    },
    {
      id: uuidv4(),
      title: "Task Management App",
      description: "A Kanban-style task management application with real-time updates, built with React, TypeScript, and Firebase.",
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "TypeScript", "Firebase", "Redux"],
      demoUrl: "https://task-app.example.com",
      githubUrl: "https://github.com/alexjohnson/task-management",
      featured: true,
    },
    {
      id: uuidv4(),
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data using the OpenWeatherMap API.",
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["JavaScript", "API Integration", "CSS"],
      demoUrl: "https://weather.example.com",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      featured: false,
    },
  ],
  experience: [
    {
      id: uuidv4(),
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      startDate: "2022-01",
      endDate: null,
      description: "Lead development of the company's main SaaS product. Improved performance by 40% and implemented new features that increased user engagement by 25%.",
      technologies: ["React", "TypeScript", "GraphQL", "AWS"],
    },
    {
      id: uuidv4(),
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      startDate: "2019-03",
      endDate: "2021-12",
      description: "Developed and maintained multiple client projects. Worked closely with design and product teams to deliver high-quality web applications.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
    },
    {
      id: uuidv4(),
      role: "Junior Developer",
      company: "WebDev Agency",
      startDate: "2017-06",
      endDate: "2019-02",
      description: "Contributed to frontend development for various client websites and applications.",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
    },
  ],
  education: [
    {
      id: uuidv4(),
      institution: "University of Technology",
      degree: "Master's Degree",
      field: "Computer Science",
      startDate: "2015",
      endDate: "2017",
      description: "Specialized in Software Engineering with a focus on distributed systems.",
    },
    {
      id: uuidv4(),
      institution: "State College",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      startDate: "2011",
      endDate: "2015",
      description: "Graduated with honors. Participated in the ACM programming competition.",
    },
  ],
  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
  },
};

// Initially use the default data
let portfolioData: PortfolioData = { ...defaultPortfolioData };

// Functions to manage portfolio data
export const getPortfolioData = (): PortfolioData => {
  const savedData = localStorage.getItem("portfolioData");
  if (savedData) {
    portfolioData = JSON.parse(savedData);
  }
  return portfolioData;
};

export const savePortfolioData = (data: PortfolioData): void => {
  portfolioData = data;
  localStorage.setItem("portfolioData", JSON.stringify(data));
};

export const resetPortfolioData = (): void => {
  portfolioData = { ...defaultPortfolioData };
  localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
};
