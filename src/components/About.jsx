import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Flag } from 'lucide-react';

const About = () => {
    const coursework = [
        'Data Structures & Algorithms', 'Operating Systems', 'Object-Oriented Programming',
        'Database Management Systems', 'Computer Architecture', 'Software Engineering', 'Network Programming'
    ];

    const education = [
        {
            title: 'MTech (Integrated) - Software Engineering',
            institution: 'Vellore Institute of Technology (VIT)',
            location: 'Vellore, India',
            duration: '2022 — 2027',
            grade: 'CGPA: 8.73/10.0',
            current: true
        },
        {
            title: 'Higher Secondary & Secondary Education',
            institution: 'Al Khor International School (CBSE)',
            location: 'Al Khor, Qatar',
            duration: '2010 — 2022',
            grade: 'Grade 12: 91.4% | Grade 10: 97%',
            note: 'CBSE Merit Certificate (100/100 Mathematics)'
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter italic">About <span className="gradient-text">Me</span></h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                            <p>
                                I am a dedicated <span className="text-white font-bold">Software Engineering student</span> at VIT Vellore with a passion for building robust, intelligent applications. My background spans from deep learning and computer vision to mobile and web development.
                            </p>
                            <p>
                                I've lived in Qatar for 12 years, graduating from Al Khor International School with top honors, which provided me with a unique global perspective and strong analytical foundations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 glass rounded-[2rem] flex flex-col gap-4 group hover:bg-white/5 transition-all">
                                <div className="p-4 bg-primary/10 w-fit rounded-2xl text-primary group-hover:scale-110 transition-transform">
                                    <GraduationCap size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white leading-none">VIT Vellore</h4>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Current Education</p>
                                </div>
                            </div>
                            <div className="p-8 glass rounded-[2rem] flex flex-col gap-4 group hover:bg-white/5 transition-all">
                                <div className="p-4 bg-accent/10 w-fit rounded-2xl text-accent group-hover:scale-110 transition-transform">
                                    <Flag size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white leading-none">Qatar Resident</h4>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Valid QID Holder</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>

                            <div className="flex items-center gap-4 mb-10">
                                <BookOpen className="text-primary" size={28} />
                                <h3 className="text-2xl font-black text-white tracking-tight">Education Journey</h3>
                            </div>

                            <div className="space-y-12">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-10 border-l-2 border-white/5 last:border-0 pb-2">
                                        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.title}</h4>
                                            <p className="text-primary font-bold text-sm tracking-wide mt-1">{edu.institution}</p>
                                            <p className="text-gray-500 text-sm font-medium">{edu.duration} • {edu.location}</p>
                                            <div className="mt-3 inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-xl text-xs font-black uppercase tracking-widest">
                                                {edu.grade}
                                            </div>
                                            {edu.note && <p className="text-xs text-accent font-bold mt-2 italic">★ {edu.note}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5">
                                <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Applied Coursework</h4>
                                <div className="flex flex-wrap gap-3">
                                    {coursework.map((course) => (
                                        <span key={course} className="text-[10px] font-bold bg-white/5 border border-white/10 text-gray-400 px-5 py-2.5 rounded-2xl hover:bg-white/10 hover:text-white transition-all cursor-default">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
