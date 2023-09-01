"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
        ref={ref}
      className="mb-28  max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 ">
        After a successful 4 years in{" "}
        <span className="font-medium">the sales world</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        creating apps that are both beautiful and useful. My core stack is{" "}
        <span className="font-medium">React, TypeScript, Next.js, Node.js, and Prisma</span>. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">In my freetime,</span> I enjoy cycling,
        playing games, and traveling. I also love{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          maintaining and fixing road bikes
        </span>
        .
      </p>
    </motion.section>
  );
}
