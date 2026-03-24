import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Code, 
  MonitorPlay, 
  Cloud, 
  ExternalLink,
  Award
} from 'lucide-react';

const certs = [
  {
    title: 'Privacy and Security in online Social-Media',
    issuer: 'NPTEL',
    date: 'Nov 2025',
    icon: ShieldCheck,
    color: '#8B5CF6',
    image: '/cert_nptel.png'
  },
  {
    title: 'The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    date: 'Sept 2025',
    icon: Code,
    color: '#00E0FF',
    image: '/cert_python.png'
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Aug 2025',
    icon: MonitorPlay,
    color: '#FF00FF',
    image: '/cert_fullstack.jpg'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'Free Code Camp',
    date: 'Nov 2023',
    icon: MonitorPlay,
    color: '#F7DF1E',
    image: '/cert_fcc.png'
  },
  {
    title: 'AWS Academy Cloud Foundation Course',
    issuer: 'AWS Training',
    date: 'Jan 2025',
    icon: Cloud,
    color: '#FF9900',
    image: '/aws_logo.png'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-neon-purple font-bold tracking-[0.4em] uppercase text-xs"
          >
            Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black"
          >
            Certifications & <span className="neon-text">Badges</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/20"
            >
              {/* Image Preview - Fixed Size & Visibility */}
              <div className="relative h-64 w-full overflow-hidden bg-white/5 flex items-center justify-center p-4">
                 {cert.image ? (
                    <img 
                       src={cert.image} 
                       alt={cert.title} 
                       className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 shadow-2xl" 
                    />
                 ) : (
                    <div className="flex flex-col items-center justify-center gap-4 text-white/20">
                       <cert.icon size={64} strokeWidth={1} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Image Pending</span>
                    </div>
                 )}
                 
                 {/* Remove the dark gradient overlay that masks the image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                 
                 <div className="absolute top-4 left-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center p-2.5 shadow-2xl backdrop-blur-md border border-white/10"
                      style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                    >
                       <cert.icon size={20} />
                    </div>
                 </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow space-y-4 relative z-10 bg-[#030014]/40">
                <div className="space-y-2">
                   <div className="text-[10px] uppercase font-black tracking-[0.3em] text-neon-purple">
                      {cert.issuer}
                   </div>
                   <h3 className="text-xl font-black leading-tight text-white/90 group-hover:text-white group-hover:neon-text transition-all duration-300 min-h-[3.5rem]">
                      {cert.title}
                   </h3>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                   <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{cert.date}</div>
                   <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-purple/5 border border-neon-purple/10 text-[9px] font-black uppercase tracking-[0.2em] text-neon-purple/60 group-hover:text-neon-cyan group-hover:border-neon-cyan/20 transition-all">
                      <Award size={10} />
                      Verified
                   </div>
                </div>
              </div>

              {/* Edge glow on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
