import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const { error } = await supabase
                .from('contact_messages')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('Error sending message:', err);
            // Fallback for environment without Supabase
            if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'your_supabase_url') {
                setTimeout(() => {
                    setStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus('idle'), 5000);
                }, 1000);
            } else {
                setStatus('error');
            }
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
                            Currently open to <span className="text-white">Summer 2026 Internships</span> and research collaborations in AI and Software Engineering.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 p-6 glass rounded-2xl group transition-all hover:bg-white/5">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Email Me</h4>
                                    <p className="text-white font-bold">jai.shree.dam@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-6 glass rounded-2xl group transition-all hover:bg-white/5">
                                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Global Presence</h4>
                                    <p className="text-white font-bold">Vellore, India | Al Khor, Qatar</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-6 glass rounded-2xl group transition-all hover:bg-white/5 border border-primary/20">
                                <div className="p-4 bg-green-500/10 rounded-2xl text-green-500 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Residency Status</h4>
                                    <p className="text-white font-bold">Passport Holder | Valid QID</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-10 rounded-[3rem] shadow-2xl relative border-white/5"
                    >
                        {/* Blob backdrop for form */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>

                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="p-6 bg-green-500/10 rounded-full mb-6"
                                >
                                    <CheckCircle size={64} className="text-green-500" />
                                </motion.div>
                                <h3 className="text-3xl font-black mb-4">Message Received!</h3>
                                <p className="text-gray-400 font-medium">I'll review your inquiry and get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-10 px-8 py-3 glass rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-primary"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-primary transition-colors">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all font-medium"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-primary transition-colors">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all font-medium"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-primary transition-colors">Message</label>
                                        <textarea
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all font-medium resize-none"
                                            placeholder=""
                                        ></textarea>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm font-bold text-center px-4 py-2 bg-red-500/10 rounded-xl">Connection error. Please try again.</p>
                                )}

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full py-5 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98]"
                                >
                                    {status === 'loading' ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            SEND ENQUIRY <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
