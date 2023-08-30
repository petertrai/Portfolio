import Image from "next/image";
import React from "react";
import profilejpg from "../public/profile.jpeg";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src={profilejpg}
            alt="Ricardo"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white" 
          />
          <span className="text-4xl absolute bottom-0 right-0">
          👋
          </span>
        </div>
      </div>
    </section>
  );
}
