import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, ExternalLink } from 'lucide-react';

const Training = () => {
  const points = [
    "Built a mobile application using Flutter with a clean, responsive, and user-friendly UI.",
    "Integrated backend services using Dart and REST APIs for smooth, real-time data flow.",
    "Implemented Firebase for authentication, database operations, and secure user data handling.",
    "Enhanced overall app performance by 40% by optimizing navigation flow, fixing critical bugs, and refining UI components."
  ];

  return (
    <section id="training" className="py-32 relative overflow-hidden bg-[#030014]">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs"
          >
            Practical Mastery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black"
          >
            Professional <span className="neon-text">Training</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 border-neon-cyan/20 max-w-6xl mx-auto relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500"
        >
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 z-0">
              <img 
                src="/cert_cipher.png" 
                alt="" 
                className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#030014]/90 to-transparent shadow-inner" />
           </div>

           {/* Abstract Accent */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-full blur-3xl group-hover:bg-neon-cyan/30 transition-all duration-700 pointer-events-none" />
           
           <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              <div className="lg:w-2/5 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-10 lg:pb-0 lg:pr-10">
                 <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan transition-transform group-hover:scale-110 duration-500">
                        <Target size={32} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-3xl font-black text-white leading-tight">
                          Mobile App Development
                       </h3>
                       <div className="flex items-center gap-3">
                          <p className="text-neon-blue font-black tracking-[0.2em] uppercase text-xs">Cipher Schools</p>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <p className="text-white/30 text-[10px] font-bold">Jun &apos;25 - Jul &apos;25</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Certificate Preview Card - Made Larger and More Visible */}
                 <div className="space-y-4">
                    <div className="relative group/cert cursor-pointer rounded-2xl overflow-hidden border border-white/20 bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-neon-cyan/50 p-1">
                       <img 
                          src="/cert_cipher.png" 
                          alt="Mobile App Development Certificate" 
                          className="w-full h-auto object-contain group-hover/cert:scale-105 transition-transform duration-700 opacity-95 group-hover/cert:opacity-100"
                        />
                       <div className="absolute inset-0 bg-transparent flex items-end justify-center pb-4 opacity-0 group-hover/cert:opacity-100 transition-opacity">
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-neon-cyan/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                             <ExternalLink size={12} />
                             Full Screen View
                          </div>
                       </div>
                    </div>
                    <p className="text-[10px] text-white/30 text-center font-bold tracking-widest uppercase italic">Click to view full credential</p>
                 </div>

                 <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'Firebase', 'REST API', 'Git', 'Android Studio'].map(tag => (
                       <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/40 uppercase tracking-widest transition-all hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5">
                         {tag}
                       </span>
                    ))}
                 </div>
              </div>

              <div className="lg:w-3/5 flex flex-col justify-center">
                 <div className="space-y-2 mb-10">
                    <h4 className="text-xs uppercase font-black tracking-[0.4em] text-neon-cyan/60">
                       Curriculum Mastery
                    </h4>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-neon-cyan to-transparent rounded-full" />
                 </div>
                 
                 <ul className="space-y-8">
                    {points.map((point, index) => (
                       <motion.li 
                         key={index}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: index * 0.15 + 0.3 }}
                         viewport={{ once: true }}
                         className="flex items-start gap-6 group/item"
                       >
                          <div className="mt-1 flex-shrink-0 text-neon-cyan/30 group-hover/item:text-neon-cyan transition-all duration-300 transform group-hover/item:scale-110">
                             <CheckCircle2 size={24} />
                          </div>
                          <div className="space-y-1">
                             <p className="text-white/60 group-hover/item:text-white transition-all duration-300 leading-relaxed text-sm md:text-lg font-medium">
                                {point}
                             </p>
                             <div className="h-px w-0 group-hover/item:w-full bg-gradient-to-r from-neon-cyan/20 to-transparent transition-all duration-700" />
                          </div>
                       </motion.li>
                    ))}
                 </ul>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
