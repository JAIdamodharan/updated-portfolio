import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Laptop, FileCheck, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: 'CBSE Merit Certificate (2020)',
            description: 'Awarded for exceptional academic performance, scoring 100/100 in Mathematics and 99/100 in Science.',
            icon: <Trophy className="text-yellow-500" size={24} />
        },
        {
            title: 'Competitive Programming',
            description: 'Solved 100+ problems on LeetCode focusing on advanced algorithms and optimization techniques.',
            icon: <Code className="text-primary" size={24} />,
            link: 'https://leetcode.com/u/JaiShreeD'
        },
        {
            title: 'Hackathons',
            description: 'Participated in technical web development hackathons organized by Gravitas VIT and SCORE Department VIT.',
            icon: <Laptop className="text-accent" size={24} />
        }
    ];

    const certifications = [
        {
            name: 'Mastering Data Structures & Algorithms using C and C++',
            issuer: 'Udemy',
            date: '2023'
        },
        {
            name: 'Learn Fundamentals of Computer Programming with C Language',
            issuer: 'Coursera (Issued Apr 2023)',
            date: '2023',
            id: '2TRGB82HDGLP'
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & <span className="gradient-text">Activities</span></h2>
                    <p className="text-gray-400">Beyond the code: Awards, competitions, and continuous learning.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all flex flex-col h-full"
                        >
                            <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:underline">
                                    View Profile <ExternalLink size={14} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FileCheck className="text-accent" /> Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex justify-between items-center p-6 glass rounded-2xl group hover:bg-white/5 transition-all">
                                <div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.name}</h4>
                                    <p className="text-gray-500 text-sm">{cert.issuer} • {cert.date}</p>
                                    {cert.id && <p className="text-xs text-primary/50 font-mono mt-1">ID: {cert.id}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
