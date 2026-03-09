import React, { useState } from "react";
import Portfolio from "../assets/port.png";
import Tip from "../assets/tips.png";
import Commerce from "../assets/commerce.png";
import El from "../assets/electri.png";
import Hotel from "../assets/hotel.png";
import Login1 from "../assets/loginpage.png";
import Result from "../assets/result.png";
import Todo from "../assets/todo.png";
import M from "../assets/mini.png";
import Login2 from "../assets/login-react.png";
import Reactimg from "../assets/reactimg.png";

function Projects() {

    const projects = [
        {
            title: "My Portfolio",
            description:
                "Personal portfolio website with modern UI, animations & responsive design.",
            image: Portfolio,
            github: "https://github.com/aslamdex/Aslam-portfolio.git",
            Live: "https://aslam-portfolio-drab.vercel.app/",
            category: "html,bootstrap,javascript"
        },
        {
            title: "Tip Calculator",
            description:
                "Responsive tip calculator built with HTML, CSS & JavaScript.",
            image: Tip,
            github: "https://github.com/aslamdex/Tip-calculator.git",
            Live: "https://tip-calculator-umber-sigma.vercel.app/",
            category: "bootstrap,javascript"
        },
        {
            title: "College Website",
            description:
                "College website with notice board, admin panel & responsive layout.",
            image:
                "https://t3.ftcdn.net/jpg/09/81/22/52/360_F_981225210_NBBkqMdSxUaf7X7Y5rGTRIrJXqUs8zdt.jpg",
            github: "https://github.com/aslamdex/college-website.git",
            Live: "#",
            category: "html,css"
        },
        {
            title: "E-Commerce Store",
            description:
                "Full-stack shopping app with cart system & product filters.",
            image: Commerce,
            github: "https://github.com/aslamdex/e-commerce.git",
            Live: "#",
            category: "bootstrap,javascript"

        },
        {
            title: "Electric Bill Calculator",
            description:
                "Electricity bill calculator using tier pricing system.",
            image: El,
            github: "https://github.com/aslamdex/electricity-bill.git",
            Live: "https://electricity-bill-three.vercel.app/",
            category: "javascript"

        },
        {
            title: "Hotel Bill Calculator",
            description:
                "Hotel billing system with room selection & total calculation.",
            image: Hotel,
            github: "https://github.com/aslamdex/hotelbill-generator.git",
            Live: "https://hotelbill-generator.vercel.app/",
            category: "javascript"
        },
        {
            title: "Login Page",
            description:
                "Modern login/signup page with validation & animations.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDD9dk3bD0hKU02uSjEfxuwGURUJYVfROKrw&s",
            github: "https://github.com/aslamdex/html-login-page.git",
            Live: "https://html-login-page.vercel.app/",
            category: "bootstrap , javascript"
        },
        {
            title: "Result Publish System",
            description:
                "Student result portal with search & print functionality.",
            image: Result,
            github: "https://github.com/aslamdex/Result-publish.git",
            Live: "https://result-publish.vercel.app/",
            category: "javascript, bootstrap"
        },
        {
            title: "Todo App",
            description:
                "Todo application with categories & local storage support.",
            image: Todo,
            github: "https://todo-app-one-umber-25.vercel.app/",
            Live: "#",
            category: "javascript,bootstrap"
        },
        {
            title: "React Mini Projects",
            description:
                "Collection of React mini projects using JSX, props, hooks & responsive design.",
            image: M,
            github: "https://github.com/aslamdex/react-task-10.git",
            Live: "https://react-task-10-kohl.vercel.app/",
            category: "React"
        },
        {
            title: "Login Form (React)",
            description:
                "Responsive login form built with React using controlled components and validation.",
            image: Login2,
            github: "https://github.com/aslamdex/loginform-react.git",
            Live: "https://login-form-react-eosin.vercel.app/",
            category: "React"
        },

        {
            title: "React portfolio",
            description: "Developed a responsive React.js portfolio using Tailwind CSS, components, pages, images, and favicon etc..",
            image: Reactimg,
            github: "https://github.com/aslamdex/Aslam-Hossain-portfolio-react.git",
            Live: "https://aslam-hossain-portfolio-react.vercel.app/",
            category: "React"

        }
    ];




    const [items, setItems] = useState(projects)

    function filterProject(category) {

        if (category === "all") {
            setItems(projects)
            return
        }

        const filtered = projects.filter((project) =>
            project.category.toLowerCase().includes(category.toLowerCase())
        )

        setItems(filtered)
    }



    return (
        <section className="min-h-screen bg-[#0F172A] text-gray-200 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                {/* ..................Button section.................. */}


                <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-10">

                    <button className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-lg border border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0F172A] hover:scale-105 w-[45%] sm:w-auto"
                        onClick={() => filterProject('all')}>
                        All
                    </button>

                    <button className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-lg border border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0F172A] hover:scale-105 w-[45%] sm:w-auto"
                        onClick={() => filterProject('Html')}>
                        Html/Css
                    </button>

                    <button className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-lg border border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0F172A] hover:scale-105 w-[45%] sm:w-auto"
                        onClick={() => filterProject('Bootstrap')}>
                        Bootstrap
                    </button>

                    <button className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-lg border border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0F172A] hover:scale-105 w-[45%] sm:w-auto"
                        onClick={() => filterProject('javaScript')}>
                        JavaScript
                    </button>

                    <button className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base rounded-lg border border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0F172A] hover:scale-105 w-[45%] sm:w-auto"
                        onClick={() => filterProject('React')}>
                        React
                    </button>

                </div>


                {/*................... Grid .................*/}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map((project, index) => (
                        <div
                            key={index}
                            className="
              group relative
              h-[380px] sm:h-[400px] md:h-[420px]
              flex flex-col
              bg-[#1E293B]
              border border-gray-700
              rounded-2xl overflow-hidden
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-2xl hover:shadow-cyan-400/20
            "
                        >
                            {/* Image */}
                            <div className="h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow text-center">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Button */}

                                {/* Buttons */}
                                <div className="mt-auto flex gap-3 justify-center">

                                    {/* GitHub Button */}
                                    <button
                                        onClick={() => window.open(project.github, "_blank")}
                                        className="
        px-4 py-2 rounded-lg
        border-2 border-cyan-400
        text-cyan-400
        hover:bg-cyan-400 hover:text-[#0F172A]
        transition-all duration-300
        text-sm
        "
                                    >
                                        GitHub
                                    </button>

                                    {/* Live Button */}
                                    {project.Live && (
                                        <button
                                            onClick={() => window.open(project.Live, "_blank")}
                                            className="
            px-4 py-2 rounded-lg
            bg-[#457b9d]
            text-white
            hover:bg-[#457b9d]
            transition-all duration-300
            text-sm
            "
                                        >
                                            Live Demo
                                        </button>
                                    )}

                                </div>



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
