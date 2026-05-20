import React from "react";

function About() {
    return (
        <section id="about" className="scroll-mt-28 min-h-screen bg-[#0F172A] text-gray-200 flex items-center justify-center px-6 md:px-12 py-20">
            <div className="max-w-4xl mx-auto space-y-14 md:space-y-20">

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
                    About <span className="text-cyan-400">Me</span>
                </h2>

                {/* Bio */}
                <div className="space-y-6 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                        Hey, I'm Aslam
                    </h3>

                    <p className="text-lg leading-relaxed text-gray-400">
                        I am a passionate Full-Stack Developer based in Bhubaneswar, Odisha.
                        With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS,
                        I create clean, responsive, and visually appealing user interfaces.
                        On the backend, I work with Python to develop scalable and efficient applications.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-400">
                        I have also developed strong skills in using AI tools for coding —
                        crafting effective prompts to accelerate development, debugging, and generating high-quality code.
                        I am experienced in deploying and hosting projects using GitHub Pages and Firebase.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-400">
                        I enjoy turning ideas into reality with clean code and continuously exploring
                        new technologies to build better digital experiences.
                    </p>
                </div>

                {/* Education */}
                <div className="space-y-8 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                        Education
                    </h3>

                    <div className="space-y-6">
                        <div className="bg-[#1E293B] p-5 rounded-xl border border-gray-700">
                            <p className="text-lg font-medium text-white">
                                FullStack Developer With Python
                            </p>
                            <p className="text-gray-400">
                                Skyy Skill Academy
                            </p>
                        </div>

                        <div className="bg-[#1E293B] p-5 rounded-xl border border-gray-700">
                            <p className="text-lg font-medium text-white">
                                Bachelor of Technology (B.Tech) - Mechanical Engineering
                            </p>
                            <p className="text-gray-400">
                                Srinix College of Engineering, Balasore • 2022 – 2025
                            </p>
                        </div>

                        <div className="bg-[#1E293B] p-5 rounded-xl border border-gray-700">
                            <p className="text-lg font-medium text-white">
                                Diploma in Mechanical Engineering
                            </p>
                            <p className="text-gray-400">
                                Balasore School of Engineering • 2019 – 2021
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="space-y-6 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                        Hobbies & Interests
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 list-disc list-inside">
                        <li>Coding & building personal projects</li>
                        <li>Playing video games / mobile games</li>
                        <li>Watching tech reviews & tutorials</li>
                        <li>Listening to music</li>
                        <li>Football / outdoor sports</li>
                        <li>Experimenting with AI tools (ChatGPT, Claude, Gemini)</li>
                        <li>Learning new tech trends & frameworks</li>
                    </ul>
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl italic text-gray-500 text-center mt-10">
                    "Code is poetry. I just try to make it rhyme."
                </p>

            </div>
        </section>
    );
}

export default About;
