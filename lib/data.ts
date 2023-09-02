import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import trelloImg from "@/public/trello.png";
import coursecreatorImg from "@/public/coursecreator.png";
import nikeImg from "@/public/nike.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sales Management",
    location: "Atlanta, GA",
    description:
      "I managed an award winning team of sales representatives at a Fortune 500 company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Graduated bootcamp",
    location: "Los Angeles, CA",
    description:
      "While transitioning careers, I graduated from BloomTech, a 6 month intensive coding bootcamp, in just 3 months.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Pasadena, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and Prisma.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Trello Clone",
    description:
      "Beautifully designed to-do list application using AI and drag and drop libraries. Complete with backend databases + API routes for ChatGPT.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "Planetscale"],
    imageUrl: trelloImg,
  },
  {
    title: "AI Course Generator",
    description:
      "Uses AI to generate a full custom curriculum complete with graded assessments using YouTube, OpenAI, and Google APIs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "SQL"],
    imageUrl: coursecreatorImg,
  },
  {
    title: "Nike Landing Page",
    description:
      "A simple and clean Nike homepage clone using NextJS, React and TailwindCSS.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: nikeImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Prisma",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Redux",
  "SQL",
  "Express",
  "Python",
  "Framer Motion",
] as const;