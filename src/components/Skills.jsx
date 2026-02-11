import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Smartphone, Globe, Terminal, Shield, Layers } from 'lucide-react';
import { supabase } from '../lib/supabase';

const dummySkills = [
    { id: 1, skill_name: 'C++', proficiency: 5, category: 'Languages', icon: <Terminal size={20} /> },
    { id: 2, skill_name: 'Python', proficiency: 5, category: 'Languages', icon: <Terminal size={20} /> },
    { id: 3, skill_name: 'Java', proficiency: 5, category: 'Languages', icon: <Terminal size={20} /> },
    { id: 4, skill_name: 'JavaScript', proficiency: 4, category: 'Languages', icon: <Terminal size={20} /> },
    { id: 5, skill_name: 'Dart / PHP', proficiency: 4, category: 'Languages', icon: <Terminal size={20} /> },

    { id: 6, skill_name: 'PyTorch / TensorFlow', proficiency: 5, category: 'AI / ML', icon: <Cpu size={20} /> },
    { id: 7, skill_name: 'OpenCV / CNNs', proficiency: 5, category: 'AI / ML', icon: <Cpu size={20} /> },
    { id: 8, skill_name: 'NLP / BART', proficiency: 4, category: 'AI / ML', icon: <Cpu size={20} /> },
    { id: 9, skill_name: 'OCR (Tesseract)', proficiency: 4, category: 'AI / ML', icon: <Cpu size={20} /> },

    { id: 10, skill_name: 'Flutter / Android SDK', proficiency: 5, category: 'Mobile', icon: <Smartphone size={20} /> },
    { id: 11, skill_name: 'Cross-platform', proficiency: 4, category: 'Mobile', icon: <Smartphone size={20} /> },
    { id: 12, skill_name: 'React / Node.js', proficiency: 4, category: 'Web', icon: <Globe size={20} /> },
    { id: 13, skill_name: 'REST APIs', proficiency: 5, category: 'Web', icon: <Globe size={20} /> },

    { id: 14, skill_name: 'DSA / Algorithms', proficiency: 5, category: 'Core', icon: <Layers size={20} /> },
    { id: 15, skill_name: 'Operating Systems', proficiency: 5, category: 'Core', icon: <Layers size={20} /> },
    { id: 16, skill_name: 'MySQL / RDBMS', proficiency: 5, category: 'Core', icon: <Database size={20} /> },

    { id: 17, skill_name: 'Linux / Bash', proficiency: 4, category: 'System', icon: <Shield size={20} /> },
    { id: 18, skill_name: 'Networking Basics', proficiency: 4, category: 'System', icon: <Shield size={20} /> },
    { id: 19, skill_name: 'Git / GitHub', proficiency: 5, category: 'Tools', icon: <Code size={20} /> },
    { id: 20, skill_name: 'Postman / Wireshark', proficiency: 4, category: 'Tools', icon: <Code size={20} /> }
];

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { data, error } = await supabase
                    .from('skills')
                    .select('*')
                    .order('proficiency', { ascending: false });

                if (error) throw error;
                setSkills(data && data.length > 0 ? data : dummySkills);
            } catch (err) {
                setSkills(dummySkills);
            }
        };
        fetchSkills();
    }, []);

    const categories = [...new Set(skills.map(s => s.category))];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter italic">Technical <span className="gradient-text">Proficiency</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise in software engineering and AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                            className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"></div>

                            <h3 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs flex items-center justify-between">
                                {category}
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/20">
                                    {skills.find(s => s.category === category)?.icon || <Code size={20} />}
                                </div>
                            </h3>

                            <div className="space-y-6">
                                {skills
                                    .filter(s => s.category === category)
                                    .map((skill) => (
                                        <div key={skill.id} className="group/item">
                                            <div className="flex justify-between items-center mb-2.5">
                                                <span className="text-gray-300 font-bold text-sm tracking-tight group-hover/item:text-primary transition-colors">
                                                    {skill.skill_name}
                                                </span>
                                                <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">
                                                    {skill.proficiency === 5 ? 'Expert' : skill.proficiency === 4 ? 'Advanced' : 'Intermediate'}
                                                </span>
                                            </div>
                                            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                                                    className="h-full bg-gradient-to-r from-primary via-blue-400 to-accent rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
