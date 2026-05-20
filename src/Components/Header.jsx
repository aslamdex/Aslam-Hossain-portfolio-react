import React, { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0081A7] border-b border-[#00AFB9]/70 shadow-md">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#FDFCDC] tracking-tight">
                        Port<span className="text-[#0F172A]">Folio</span>
                    </h1>

                    <button
                        className="md:hidden text-[#FDFCDC] text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>


                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollToSection(item.id)}
                                className="relative font-bold text-[#FDFCDC] hover:text-[#0F172A] transition-colors duration-200
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:w-full after:h-[2px] after:bg-[#0F172A]
                         after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                         hover:after:scale-x-100"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>


            {menuOpen && (
                <div
                    className="fixed inset-0 top-0 bg-[#0081A7]/95 z-40 flex items-center justify-center md:hidden"
                    onClick={() => setMenuOpen(false)}
                >
                    <nav
                        className="flex flex-col items-center gap-8 text-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollToSection(item.id)}
                                className="text-[#FDFCDC] hover:text-[#0F172A]"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            <div className="h-16 md:h-20"></div>
        </>
    );
}

export default Header;
