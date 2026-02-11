import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';

const dummyProjects = [
    {
        id: 1,
        title: 'High-Performance Deepfake Detection System',
        description: 'Built an AI-based deepfake detection system focused on cybersecurity and digital fraud prevention. Reached 93.85% test accuracy with a ROC-AUC of 0.9939 using Python, PyTorch, and CNNs.',
        tech_stack: ['Python', 'PyTorch', 'OpenCV', 'CNNs'],
        github_link: 'https://github.com/JAIdamodharan/Deep_Fake_Detection',
        image_url: '/projects/deepfake.png'
    },
    {
        id: 2,
        title: 'Full-Stack Finance Management App',
        description: 'A personal finance tracker with secure login and 15+ features including expense tracking and bill splitting. Designed a relational MySQL database managing 500+ transactions.',
        tech_stack: ['PHP', 'MySQL', 'JavaScript', 'REST APIs'],
        github_link: 'https://github.com/JAIdamodharan/expense-tracker',
        image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'SOSMate – Personal Safety Android App',
        description: 'Real-time safety application enabling one-tap SOS alerts, power-button emergency triggering, and automated SMS with live GPS location using Google Maps API.',
        tech_stack: ['Java', 'Android SDK', 'SQLite', 'Google Maps API'],
        github_link: 'https://github.com/JAIdamodharan/SOSmate',
        image_url: '/projects/sosmate.png'
    },
    {
        id: 4,
        title: 'News Text Summarization & NLP',
        description: 'End-to-end NLP pipeline to summarize 1,000+ tennis news articles using BART and spaCy. Implemented NER system to extract persons, locations, and organizations.',
        tech_stack: ['Python', 'BART', 'spaCy', 'NLP'],
        github_link: 'https://github.com/JAIdamodharan/text-summarization-nlp',
        image_url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop'
    }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(dummyProjects);
                }
            } catch (err) {
                console.error('Error fetching projects:', err);
                setProjects(dummyProjects);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="gradient-text">Work</span></h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            A collection of my research and development projects in AI, mobile safety, and full-stack systems.
                        </p>
                    </div>
                    <a href="https://github.com/JAIdamodharan" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-all font-medium flex items-center gap-2 glass px-6 py-3 rounded-full">
                        Browse GitHub <Github size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {loading ? (
                        [1, 2].map(n => (
                            <div key={n} className="h-[400px] glass rounded-3xl animate-pulse"></div>
                        ))
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass rounded-3xl overflow-hidden card-hover flex flex-col group h-full"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-6 right-6">
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="p-4 bg-background/80 hover:bg-primary text-white rounded-2xl backdrop-blur-xl transition-all shadow-2xl flex items-center justify-center">
                                            <Github size={22} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech_stack?.map(tech => (
                                            <span key={tech} className="text-[11px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-base mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors"
                                        >
                                            VIEW SOURCE CODE <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
