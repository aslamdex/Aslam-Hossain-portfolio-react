import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaPython,
    FaGitAlt,
    FaBootstrap
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiGithub,
    SiFirebase,
} from "react-icons/si";
import { SiVercel } from "react-icons/si";

import { FaBrain } from "react-icons/fa";

function Skills() {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-5xl md:text-6xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-5xl md:text-6xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E] text-5xl md:text-6xl" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB] text-5xl md:text-6xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8] text-5xl md:text-6xl" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB] text-5xl md:text-6xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-5xl md:text-6xl" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-200 text-5xl md:text-6xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-5xl md:text-6xl" /> },
        { name: "AI Tools & Prompting", icon: <FaBrain className="text-cyan-400 text-5xl md:text-6xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-black text-5xl md:text-6xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-5xl md:text-6xl" /> }


    ];

    return (
        <section className="min-h-screen bg-[#0F172A] text-gray-200 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="
              group
              bg-[#1E293B]
              border border-gray-700
              rounded-2xl
              p-8
              flex flex-col items-center justify-center
              text-center
              transition-all duration-500
              hover:border-cyan-400
              hover:shadow-2xl hover:shadow-cyan-400/20
              hover:-translate-y-3
              "
                        >
                            <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                                {skill.icon}
                            </div>

                            <div className="text-gray-300 font-medium">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
