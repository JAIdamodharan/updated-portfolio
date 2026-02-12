import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Search, Laptop } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'NXTIO Technologies Private Limited',
            location: 'Chennai, India',
            role: 'Software Development Intern',
            duration: 'June 2025 – July 2025',
            points: [
                'Built a cross-platform mobile application using Flutter and Dart, implementing efficient state management and optimized UI rendering to improve user accessibility by 50%',
                'Integrated and fine-tuned 2+ REST APIs along with third-party services, achieving 40% reduction in backend data retrieval time through optimized parsing',
                'Performed comprehensive performance profiling and debugging across 5+ Android and iOS device configurations, ensuring 99% consistency',
                'Used Postman extensively to validate, test, and debug APIs, identifying and resolving integration issues before deployment'
            ]
        }
    ];

    const hackathonImages = ['/hackathon.jpg', '/hackathon2.jpg', '/hackathon3.jpg'];
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % hackathonImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="experience" className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Work <span className="gradient-text">Experience</span></h2>
                    <p className="text-gray-400">Professional journey and internships in software development.</p>
                </div>

                <div className="space-y-16">
                    {/* Work Experience */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <Briefcase className="text-primary" size={28} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-wider">Professional Internships</h3>
                        </div>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="glass p-8 md:p-12 rounded-[2.5rem] relative group border-white/5 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                                            <h4 className="text-xl text-primary font-semibold">{exp.role}</h4>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-primary" />
                                                {exp.duration}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-primary" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 ml-2">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-4 text-gray-400 leading-relaxed group/item">
                                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors shrink-0" />
                                                <span className="group-hover/item:text-gray-200 transition-colors">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-3">
                                        <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-primary">Flutter</span>
                                        <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-primary">Dart</span>
                                        <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-primary">REST APIs</span>
                                        <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-primary">Postman</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Hackathon Experience */}
                    <div className="pt-12">
                        <div className="flex items-center gap-4 mb-10">
                            <Laptop className="text-accent" size={28} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-wider">Hackathons & Competitions</h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass rounded-[3rem] overflow-hidden border border-white/5 group"
                        >
                            <div className="grid lg:grid-cols-2">
                                <div className="relative h-72 lg:h-auto overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImg}
                                            src={hackathonImages[currentImg]}
                                            alt="Hackathon Team"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0"
                                        />
                                    </AnimatePresence>
                                    <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/0 to-background/50 hidden lg:block"></div>

                                    {/* Slider Indicators */}
                                    <div className="absolute bottom-6 left-6 flex gap-2 z-30">
                                        {hackathonImages.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="p-10 lg:p-14 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-xl text-xs font-black uppercase tracking-widest mb-6 w-fit">
                                        VIT Vellore • 2024
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Technical Innovation & Teamwork</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        Participated in high-intensity web development hackathons organized by <span className="text-white font-bold">Gravitas VIT</span> and the <span className="text-white font-bold">SCORE Department</span>. Focused on building real-time solutions and collaborating with diverse teams to solve complex problems under tight deadlines.
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-white">12h</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Hackathons</p>
                                        </div>
                                        <div className="w-px h-8 bg-white/10"></div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-white">3</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Events</p>
                                        </div>
                                        <div className="w-px h-8 bg-white/10"></div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-white">UI, UX & Frontend</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
