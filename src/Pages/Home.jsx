import React from 'react';
import Profile from '../assets/Image.png';
import Resume from '../assets/aslam.pdf';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

import { Typewriter } from 'react-simple-typewriter';

function Home() {
    return (
        <section id="home" className="scroll-mt-28 min-h-screen pt-20 md:pt-0 w-full bg-[#0F172A] text-[#FDFCDC]  flex items-start md:items-center justify-center px-6 md:px-12">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left Side */}
                <div className="space-y-6 text-center md:text-left">

                    <p className="text-xl md:text-2xl font-medium opacity-90">
                        Hello, It's Me
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight break-words">
                        Aslam Hossain
                    </h2>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold break-words
bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
bg-clip-text text-transparent">
                        <Typewriter
                            words={['Full Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>

                    <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90 max-w-lg mx-auto md:mx-0">
                        🚀 I design and develop dynamic, responsive web apps with React, Tailwind CSS, and Firebase.
                        🤖 Using AI-assisted coding, I create efficient and optimized solutions faster.
                        🌟 Committed to building intuitive interfaces, smooth user experiences, and
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6 sm:text-3xl flex-wrap">

                        {/* GitHub */}
                        <a
                            href="https://github.com/aslamdex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-[#35607A] hover:bg-[#35607A] hover:text-white transition-all duration-300"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/aslam-hossain2000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-[#35607A] hover:bg-[#35607A] hover:text-white transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:sahanabaz8@gmail.com"
                            className="p-3 rounded-full border border-[#35607A] hover:bg-[#35607A] hover:text-white transition-all duration-300"
                        >
                            <MdMarkEmailRead />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/918342078382"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-[#35607A] hover:bg-green-500 hover:text-white transition-all duration-300"
                        >
                            <FaWhatsapp />
                        </a>


                    </div>


                    {/* Download CV */}
                    <div className="mt-8">
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = Resume;
                                link.download = 'aslam.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="
        bg-[#457B9D]
        hover:bg-[#35607A]
        text-white
        font-semibold
        px-8 py-3
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:scale-105
    "
                        >
                            Download CV
                        </button>

                    </div>

                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <div className="relative group">

                        <img
                            src={Profile}
                            alt="Aslam Hossain"
                            className="
                                w-64 h-64 
                                md:w-80 md:h-80 
                                lg:w-96 lg:h-96 
                                object-cover 
                                rounded-3xl 
                                shadow-2xl shadow-cyan/60
                                transition-all duration-500
                                group-hover:scale-105
                                group-hover:rotate-0
                                rotate-3
                            "
                        />

                        {/* Glow Effect */}
                        <div className="
                            absolute inset-0 
                            rounded-3xl
                            bg-[#E0FFFF]/30
                            opacity-0 
                            group-hover:opacity-70
                            transition-opacity 
                            duration-500
                        "></div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Home;
