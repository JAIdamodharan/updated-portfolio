import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor - These animate behind the animated-bg blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                            Hi, I'm <br className="md:hidden" />
                            <span className="gradient-text">Jaishree</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-medium tracking-tight">
                            AI & ML Enthusiast | Software Developer | Innovator
                            <span className="text-gray-600 block text-lg font-normal mt-4">
                                MTech Software Engineering student at VIT. Passionate about AI-driven cybersecurity and optimized full-stack systems.
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-5 mb-16">
                            <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-primary/20">
                                VIEW WORK
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://github.com/JAIdamodharan" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-3">
                                GITHUB
                                <Github size={20} />
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="flex flex-wrap justify-start gap-8 md:gap-12"
                        >
                            <a href="https://linkedin.com/in/jaishree-damodharan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                                <Linkedin size={18} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                            </a>
                            <a href="https://leetcode.com/u/JaiShreeD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                                <ExternalLink size={18} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm font-bold uppercase tracking-widest">LeetCode</span>
                            </a>
                            <a href="mailto:jai.shree.dam@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                                <Mail size={18} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm font-bold uppercase tracking-widest">Email</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-20 group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>

                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 glass-card">
                                <img
                                    src="/profile.png"
                                    alt="Jaishree Damodharan"
                                    className="w-full aspect-[4/5] object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 profile-mask"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
