import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Search } from 'lucide-react';

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

    return (
        <section id="experience" className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Work <span className="gradient-text">Experience</span></h2>
                    <p className="text-gray-400">Professional journey and internships in software development.</p>
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
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-primary/10 rounded-2xl text-primary mt-1">
                                        <Briefcase size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                                        <h4 className="text-xl text-primary font-semibold">{exp.role}</h4>
                                    </div>
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
        </section>
    );
};

export default Experience;
