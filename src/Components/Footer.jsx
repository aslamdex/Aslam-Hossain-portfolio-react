import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function Footer() {
    return (
        <footer className="relative bg-[#0B1120] text-gray-300 pt-16 pb-8 px-6 md:px-12 overflow-hidden">

            {/* Top Gradient Glow Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

                {/* About */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
                        Aslam Hossain
                    </h2>

                    <p className="text-gray-400 leading-relaxed text-sm">
                        Full Stack Developer passionate about building
                        modern, responsive and scalable web applications
                        with clean UI and smooth user experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        {["Home", "About", "Projects", "Contact"].map((item, i) => (
                            <li
                                key={i}
                                className="cursor-pointer hover:text-cyan-400 transition duration-300 hover:translate-x-2"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Connect With Me
                    </h3>

                    <div className="flex gap-5 text-2xl">

                        {/* GitHub */}
                        <a
                            href="https://github.com/aslamdex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1E293B] hover:bg-cyan-400 hover:text-[#0B1120] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-cyan-400/40"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/aslam-hossain2000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1E293B] hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-blue-500/40"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:sahanabaz8@gmail.com"
                            className="p-3 rounded-full bg-[#1E293B] hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-purple-500/40"
                        >
                            <MdMarkEmailRead />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1E293B] hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-green-500/40"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-14 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Aslam Hossain. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
