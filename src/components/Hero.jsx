import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

function ParticleBackground() {
  const points = useRef();
  
  const particleCount = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.07;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-16">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 text-center lg:text-left nebula-bg py-20 rounded-[4rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1"
          >
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="inline-block px-4 py-1.5 mb-8 glass-card border-white/5 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase"
            >
              Architecting the Future
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tighter text-white">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue animate-gradient-x bg-[length:200%_auto] inline-block pt-1">Rahul Pandey</span>
            </h1>
            
            <div className="h-10 mb-10 text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white/80">
                <Typewriter
                  words={['Software Developer', 'Cloud Computing Enthusiast', 'DevOps Practitioner', 'Full-Stack Expert']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p className="max-w-xl mb-12 text-base md:text-lg text-white/40 leading-relaxed mx-auto lg:mx-0 font-medium">
              Passionate Computer Science student at Lovely Professional University specializing in <span className="text-white/70">Cloud Architecture</span> and <span className="text-white/70">DevOps</span>. Highly skilled in Python, Django, AWS, and Docker to architect robust scalable applications and craft high-performance digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a 
                href="mailto:rahulpandey03452@gmail.com" 
                className="btn-primary flex items-center gap-2 group"
              >
                Hire Me
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="/Gen.pdf" 
                download
                className="btn-outline flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative"
          >
             <div className="w-[300px] h-[420px] md:w-[420px] md:h-[580px] relative">
                {/* Profile Portrait */}
                 <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                       duration: 6,
                       repeat: Infinity,
                       ease: "easeInOut",
                    }}
                    className="absolute inset-0 glass-card rounded-[3rem] md:rounded-[4rem] overflow-hidden border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,224,255,0.15)] flex items-center justify-center p-2 md:p-3"
                 >
                    <div className="w-full h-full rounded-[2.5rem] md:rounded-[3.2rem] overflow-hidden relative group bg-white/5">
                       <img 
                         src="/rahul_photo.jpg" 
                         alt="Rahul Pandey" 
                         className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                       />
                       {/* Subtle inner shadow/gradient for depth */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                 </motion.div>
                
                {/* Orbiting rings */}
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="absolute -inset-10 border border-white/5 rounded-full"
                />
             </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 cursor-pointer hover:text-white/50 transition-colors"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

export default Hero;
