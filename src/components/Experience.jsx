import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, Milestone } from 'lucide-react';

const experiences = [
  {
    role: 'Bachelor of Technology - CSE',
    company: 'Lovely Professional University',
    period: 'Aug 2023 - Present',
    description: 'Pursuing B.Tech in Computer Science and Engineering. Current CGPA: 7.32. Focused on core software engineering principles and collaborative development.',
    type: 'Education',
    icon: Calendar,
    color: '#8B5CF6'
  },

  {
    role: 'Intermediate',
    company: 'Heritage Academy',
    period: 'Apr 2020 - Mar 2022',
    description: 'Secured 67.80% in senior secondary education with focus on science and mathematics.',
    type: 'Education',
    icon: Award,
    color: '#FF00FF'
  },
  {
    role: 'Matriculation',
    company: 'Aatmdeep Vidyalaya',
    period: 'Apr 2018 - Mar 2020',
    description: 'Secured 73.40% in secondary education.',
    type: 'Education',
    icon: Calendar,
    color: '#00FFFF'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-neon-purple font-bold tracking-[0.4em] uppercase text-xs"
          >
            Career Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black"
          >
            Experience <span className="neon-text">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-10 space-y-4 hover:border-white/20 group">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                      >
                        <exp.icon size={24} />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/40">{exp.period}</div>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:neon-text transition-all duration-300">
                      {exp.role}
                    </h3>
                    <div className="text-secondary-light font-bold text-sm">{exp.company}</div>
                    <p className="text-white/50 text-base leading-relaxed max-w-lg ml-auto mr-auto md:ml-0 md:mr-0 inline-block">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex items-center justify-center z-10 w-12 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-neon-purple group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all" />
                  <div className="absolute w-20 h-px bg-white/5 right-full hidden md:block" style={{ display: index % 2 === 0 ? 'none' : 'block' }} />
                  <div className="absolute w-20 h-px bg-white/5 left-full hidden md:block" style={{ display: index % 2 === 0 ? 'block' : 'none' }} />
                </div>

                {/* Blank space for MD+ layout */}
                <div className="flex-1 w-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
