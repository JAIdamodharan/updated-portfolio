import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/JAIdamodharan', icon: <Github size={20} /> },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/jaishree-damodharan', icon: <Linkedin size={20} /> },
        { name: 'LeetCode', href: 'https://leetcode.com/u/JaiShreeD', icon: <ExternalLink size={20} /> },
        { name: 'Email', href: 'mailto:jai.shree.dam@gmail.com', icon: <Mail size={20} /> }
    ];

    return (
        <footer className="py-16 relative overflow-hidden bg-black/40 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <a href="#" className="text-4xl font-black gradient-text tracking-tighter">
                            JD.
                        </a>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-medium">
                            Developing high-performance AI systems and optimized software solutions. Currently based in Vellore, India with deep roots in Qatar.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="#about" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">About</a>
                            <a href="#experience" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">Experience</a>
                            <a href="#projects" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">Projects</a>
                            <a href="#skills" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">Skills</a>
                            <a href="#achievements" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">Achievements</a>
                            <a href="#contact" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 glass rounded-2xl text-gray-400 hover:text-primary hover:bg-white/5 transition-all group"
                                    title={link.name}
                                >
                                    <span className="group-hover:scale-110 transition-transform inline-block">
                                        {link.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
                        © {currentYear} Jaishree Damodharan
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
