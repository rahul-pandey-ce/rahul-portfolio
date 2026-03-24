import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Bill Reminder System',
    category: 'Django Web Application',
    description: 'A sophisticated full-stack platform designed to automate bill tracking and financial management.',
    features: ['Automated Due Date Reminders', 'Secure MVT Architecture', 'Admin Analytics Dashboard', 'Complete CRUD Functionality'],
    image: '/bill_reminder_ai.png',
    tags: ['Python', 'Django', 'SQLite', 'Tailwind'],
    github: 'https://github.com/rahul-pandey-ce/Bill-Reminder',
    live: '#live',
    color: '#8B5CF6'
  },
  {
    title: 'TrackIt',
    category: 'Study Tracker App',
    description: 'An advanced student productivity suite built to optimize learning workflows and task organization.',
    features: ['Real-time Task Tracking', 'Pomodoro Focus Timers', 'Progress Visualization', 'Firebase Sync'],
    image: ['/trackit_real_1.png', '/trackit_real_2.png'],
    tags: ['React', 'Firebase', 'Tailwind', 'Motion'],
    github: 'https://github.com/rahul-pandey-ce/TrackIt',
    live: '#live',
    color: '#00FFFF'
  },
  {
    title: 'Student Grievance Portal',
    category: 'Mobile App Development',
    description: 'A streamlined mobile solution for educational institutions to manage and resolve student concerns.',
    features: ['Real-time Status Tracking', 'Secure File Attachments', 'Push Notifications', 'Departmental Filters'],
    image: '/flutter_mobile_ai.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    github: 'https://github.com/rahul-pandey-ce/Student-grievance',
    live: '#live',
    color: '#FF00FF'
  },
  {
    title: 'Hospital Management System',
    category: 'Full Stack Web',
    description: 'An integrated healthcare management system improving operational efficiency in medical facilities.',
    features: ['Appointment Scheduling', 'Patient Record Management', 'Digital Billing System', 'Inventory Tracking'],
    image: '/hospital_ai.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahul-pandey-ce/Hospital-management-system',
    live: '#live',
    color: '#00E0FF'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[800px] bg-gradient-radial from-neon-purple/5 to-transparent blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs"
            >
              Curated Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-7xl font-black"
            >
              Featured <span className="neon-text">Creations</span>
            </motion.h2>
          </div>
          <button className="btn-outline text-sm">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2500}
              className="parallax-effect"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] rounded-[2.5rem] overflow-hidden glass-card border-white/10 flex flex-col"
              >
                {/* Image Section - Reduced size to make room for text */}
                <div className="h-2/5 relative overflow-hidden bg-black flex transition-transform duration-700 hover:scale-105">
                   {Array.isArray(project.image) ? (
                      project.image.map((img, idx) => (
                        <img 
                          key={idx}
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-1/2 h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                      ))
                   ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                      />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Section - Expanded */}
                <div className="relative flex-grow p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b from-[#030014]/80 to-[#030014]">
                   <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                           <span key={i} className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase bg-white/5 border border-white/10 backdrop-blur-md text-white/40">
                              {tag}
                           </span>
                        ))}
                      </div>
                      
                      <div className="space-y-4">
                         <div className="text-secondary-light font-black text-[10px] uppercase tracking-[0.3em] opacity-60">
                            {project.category}
                         </div>
                         <h3 className="text-3xl font-black group-hover:neon-text transition-all duration-300">
                            {project.title}
                         </h3>
                         <p className="text-white/40 text-sm md:text-base leading-relaxed">
                            {project.description}
                         </p>
                         
                         {/* Features List */}
                         <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2">
                            {project.features.map((feature, i) => (
                               <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 size={14} className="text-neon-cyan flex-shrink-0" />
                                  <span className="text-[11px] font-bold text-white/60 tracking-wide">{feature}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white/30 hover:text-white transition-colors group/link"
                      >
                         <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em]">Source Code</span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-neon-blue hover:text-secondary-light transition-colors group/link"
                      >
                         <ExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Experience</span>
                      </a>
                   </div>
                </div>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
