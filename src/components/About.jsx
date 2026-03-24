import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { label: 'Academic Experience', value: '1+' },
    { label: 'Major Projects', value: '4+' },
    { label: 'Happy Inquiries', value: '5+' },
    { label: 'Git Contributions', value: '200+' },
  ];

  return (
    <section id="about" className="section relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 glass-card border-neon-purple/20 text-xs font-bold tracking-widest text-primary-light uppercase">

            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              Engineering <span className="neon-text">Scalable Solutions</span>
            </h2>

            <p className="text-xl text-white/60 leading-relaxed md:pr-12">
              I'm a Cloud-focused Full-Stack Developer specializing in building high-performance applications with robust infrastructure. With deep knowledge of <span className="text-white font-bold">AWS, Docker, and DevOps</span> practices, I seamlessly bridge the gap between complex backend systems and intuitive user interfaces.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className="space-y-2 p-6 glass-card group hover:bg-white/[0.08]"
                >
                  <div className="text-4xl font-black neon-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold tracking-widest text-white/40 uppercase whitespace-nowrap">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-4 glass-card p-10 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4 text-white/50">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-xs uppercase font-bold tracking-[0.3em]">Developer DNA</div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <p className="text-2xl font-light italic text-white/90 leading-snug">
                  "Architecting the infrastructure of tomorrow with unyielding security, absolute scalability, and zero-compromise performance."
                </p>
              </div>

              <div className="glass-card bg-neon-purple/10 border-neon-purple/20 p-8 space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple text-sm">💡</span>
                  The Mindset
                </h4>
                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  My approach is deeply rooted in end-to-end reliability. Whether I am deploying resilient infrastructure via <span className="text-neon-cyan font-bold">Cloud & DevOps</span> tech, engineering bulletproof backends in <span className="text-neon-purple font-bold">Django</span>, or crafting fluid mobile experiences with <span className="text-neon-blue font-bold">Flutter</span>, my ultimate goal is architectural excellence across every layer.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-[60px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-blue/20 rounded-full blur-[60px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
