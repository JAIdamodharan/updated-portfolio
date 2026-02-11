import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Awards', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-3xl font-black gradient-text tracking-tighter">
                            JD.
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="flex items-baseline space-x-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-primary px-1 py-2 rounded-md text-[11px] font-black uppercase tracking-[0.2em] transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="https://github.com/JAIdamodharan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/jaishree-damodharan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white glass focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden glass mt-2 mx-4 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-primary block px-3 py-4 text-sm font-black uppercase tracking-widest border-b border-white/5 last:border-none"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex justify-center gap-8 pt-6">
                            <a href="https://github.com/JAIdamodharan" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/jaishree-damodharan" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
