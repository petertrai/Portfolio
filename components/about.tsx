"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
export default function About() {
  return (
    <motion.section
      //   ref={ref}
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
        learning how to solve complex problems. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and SQL</span>. I
        am also very familiar TypeScript and Prisma. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">In my freetime,</span> I enjoy cycling,
        traveling, and being outdoors. I also love{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          maintaining and fixing road bicycles
        </span>
        .
      </p>
    </motion.section>
  );
}
