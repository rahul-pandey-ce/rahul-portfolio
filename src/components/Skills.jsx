import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Cpu,
  Database,
  Smartphone,
  Zap,
  Layers,
  Terminal,
  Github,
  Monitor,
  Cloud
} from 'lucide-react';

const skills = [
  { name: 'Python', category: 'Language', icon: Code2, percentage: 95, color: '#3776AB', description: 'Extensive experience in writing efficient scripts, building scalable backends.' },
  { name: 'C++', category: 'Language', icon: Cpu, percentage: 90, color: '#00599C', description: 'Strong foundation in systems programming, data structures, and algorithms.' },
  { name: 'HTML', category: 'Language', icon: Globe, percentage: 95, color: '#E34F26', description: 'Expertise in semantic HTML5 for building accessible and SEO-friendly structures.' },
  { name: 'CSS', category: 'Language', icon: Layers, percentage: 90, color: '#1572B6', description: 'Advanced styling with CSS3, Flexbox, Grid, and modern design principles.' },
  { name: 'JavaScript', category: 'Language', icon: Code2, percentage: 85, color: '#F7DF1E', description: 'Interactive front-end experiences and dynamic web interface development.' },
  { name: 'Dart', category: 'Language', icon: Code2, percentage: 80, color: '#0175C2', description: 'Solid understanding of object-oriented programming for mobile logic.' },
  { name: 'Django', category: 'Framework', icon: Zap, percentage: 85, color: '#092E20', description: 'Specialized in developing robust REST APIs and scalable web applications.' },
  { name: 'Flutter', category: 'Framework', icon: Smartphone, percentage: 90, color: '#02569B', description: 'Cross-platform, high-performance mobile application development.' },
  { name: 'AWS', category: 'Platform', icon: Cloud, percentage: 85, color: '#FF9900', description: 'Leveraging cloud services for hosting, storage, and infrastructure management.' },
  { name: 'Docker', category: 'Tools', icon: Terminal, percentage: 90, color: '#2496ED', description: 'Containerizing applications for seamless deployment and scalability.' },
  { name: 'Git', category: 'Version Control', icon: Terminal, percentage: 95, color: '#F05032', description: 'Advanced version control management and collaborative code workflows.' },
  { name: 'GitHub', category: 'Collaboration', icon: Github, percentage: 95, color: '#181717', description: 'Open source contribution and complex repository management.' },
  { name: 'Linux', category: 'OS', icon: Terminal, percentage: 85, color: '#FCC624', description: 'Proficient in terminal operations, shell scripting, and server management.' },
  { name: 'DevOps', category: 'Workflow', icon: Layers, percentage: 90, color: '#06B6D4', description: 'CI/CD pipeline implementation and automated deployment processes.' },
  { name: 'MySQL', category: 'Database', icon: Database, percentage: 85, color: '#4479A1', description: 'Relational database design and complex query optimization.' },
  { name: 'MongoDB', category: 'Database', icon: Database, percentage: 80, color: '#47A248', description: 'NoSQL database management for flexible data storage solutions.' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary-light font-bold tracking-[0.4em] uppercase text-xs"
          >
            Technical Proficiency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black"
          >
            My <span className="neon-text">Skill Arsenal</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card p-10 space-y-6"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-transform group-hover:scale-110 group-hover:rotate-12"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  <skill.icon size={32} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white group-hover:neon-text transition-colors">
                    {skill.percentage}%
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 truncate">
                    {skill.category}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight">{skill.name}</h3>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 w-8 h-full bg-white/20 blur-sm" />
                  </motion.div>
                </div>
              </div>

              <div className="hidden group-hover:block transition-all duration-300">
                <p className="text-xs text-white/40 leading-relaxed italic">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
