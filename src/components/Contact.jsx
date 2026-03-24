import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Send, 
  Twitter, 
  Linkedin, 
  Github as GithubIcon, 
  MessageSquare,
  User,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Using Formspree - extremely reliable for portfolios
      // The first time you receive a message, Formspree will send you a confirmation email
      const response = await fetch("https://formspree.io/f/xdawvznr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-neon-purple/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-neon-blue/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-neon-blue font-bold tracking-[0.4em] uppercase text-xs"
              >
                Inquiries & Collaboration
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-7xl font-black"
              >
                Let's <span className="neon-text">Connect</span>
              </motion.h2>
              <p className="text-xl text-white/50 max-w-sm leading-relaxed">
                Ready to transform your ideas into exceptional digital realities? Reach out today.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Me', value: 'rahulpandey03452@gmail.com', color: '#8B5CF6' },
                { icon: MapPin, label: 'Location', value: 'Gorakhpur, Uttar Pradesh', color: '#00E0FF' },
                { icon: MessageSquare, label: 'Mobile', value: '+91 8299477453', color: '#FF00FF' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 glass-card p-6 border-white/5 hover:border-white/10 group"
                >
                   <div 
                     className="w-12 h-12 rounded-xl flex items-center justify-center p-3 transition-transform group-hover:scale-110"
                     style={{ backgroundColor: `${item.color}15`, color: item.color }}
                   >
                      <item.icon size={28} />
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 truncate">{item.label}</div>
                      <div className="text-lg font-bold group-hover:text-white transition-colors">{item.value}</div>
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-6">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/pandey-rahul-ce/' },
                { Icon: GithubIcon, href: 'https://github.com/rahul-pandey-ce' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="w-12 h-12 rounded-full glass-card border-neon-cyan/20 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all"
                >
                   <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 border-neon-purple/20 bg-white/[0.03] shadow-2xl relative"
          >
             <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-6">
                   <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-purple transition-colors" size={18} />
                         <input
                           required
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Ex: Elon Musk"
                           className="w-full bg-background/50 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all placeholder:text-white/10 text-white"
                         />
                      </div>
                   </div>

                   <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                      <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-cyan transition-colors" size={18} />
                         <input
                           required
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="Ex: hello@company.com"
                           className="w-full bg-background/50 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-white/10 text-white"
                         />
                      </div>
                   </div>

                   <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Project Details</label>
                      <div className="relative">
                         <MessageSquare className="absolute left-4 top-4 text-white/20 group-focus-within:text-neon-pink transition-colors" size={18} />
                         <textarea
                           required
                           name="message"
                           rows={5}
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Describe your vision..."
                           className="w-full bg-background/50 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/50 transition-all placeholder:text-white/10 text-white resize-none"
                         />
                      </div>
                   </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary h-16 relative overflow-hidden group"
                >
                   {status === 'loading' ? (
                      <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                   ) : (
                      <span className="flex items-center justify-center gap-3">
                         Send Message
                         <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                   )}
                </button>
             </form>

             {/* Feedback Overlays */}
             <AnimatePresence>
                {status === 'success' && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     className="absolute inset-0 bg-background/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-10 text-center space-y-6"
                   >
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                         <CheckCircle size={40} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-black mb-2">Message Transmitted!</h3>
                         <p className="text-white/50">I'll get back to you faster than light speed.</p>
                      </div>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="btn-outline py-2.5 px-6 text-sm"
                      >
                         Dismiss
                      </button>
                   </motion.div>
                )}
                
                {status === 'error' && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     className="absolute inset-0 bg-background/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-10 text-center space-y-6"
                   >
                      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                         <AlertCircle size={40} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-black mb-2">Transmission Failed</h3>
                         <p className="text-white/50 mb-4">You need to set up a free Formspree ID at formspree.io to use this form.</p>
                         
                         {/* INSTANT BACKUP BUTTON */}
                         <div className="flex flex-col gap-3">
                            <a 
                              href={`mailto:rahulpandey03452@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`}
                              className="btn-primary py-3 px-8 text-sm flex items-center justify-center gap-2"
                            >
                               <Mail size={18} />
                               Send via Direct Gmail
                            </a>
                            <button 
                              onClick={() => setStatus('idle')}
                              className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                            >
                               Try Form Again
                            </button>
                         </div>
                      </div>
                   </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
