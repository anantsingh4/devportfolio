"use client";
import React, { useState, startTransition, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Jaypee University of Information Technology</li>
        <li>Grade 12 - City Montessori School -- 94.25%</li>
        <li>Grade 10 - City Montessori School -- 94%</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, setIsPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-black" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-demo2.jpg"
          width={500}
          height={300}
          className="hidden"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I'm a Full-Stack MERN (MongoDB, Express.js, React.js, Node.js)
            Developer specializing in crafting dynamic web applications. With
            expertise in frontend and backend development, I create seamless
            user experiences using React.js for intuitive interfaces and
            Node.js/Express.js for robust server-side logic. Proficient in
            modern tools and practices, I deliver high-quality, scalable
            solutions that exceed expectations.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
