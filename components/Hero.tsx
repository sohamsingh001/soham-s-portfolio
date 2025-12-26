
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax offsets: shapes move at different speeds relative to scroll
  const y1 = useTransform(scrollY, [0, 800], [0, -150]);
  const y2 = useTransform(scrollY, [0, 800], [0, 100]);
  const y3 = useTransform(scrollY, [0, 800], [0, -50]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Parallax Background Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-60"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-100 rounded-full blur-[140px] opacity-50"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-[40%] right-[30%] w-48 h-48 bg-purple-50 rounded-full blur-[100px] opacity-40"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            MCA Candidate @ Nirma University
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
            Soham Singh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Software Engineer</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Building scalable <span className="text-slate-900 font-semibold">Full-Stack Solutions</span> with a focus on Backend Engineering, Cloud, and AI. Transforming complex ideas into elegant digital reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, '#projects')}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:translate-y-[-2px] shadow-xl shadow-blue-200/50"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8">
            <a href="https://github.com/sohamsingh001" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-900 transition-all" title="GitHub">
              <Github size={28} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/soham-singh-781417229/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-[#0077B5] transition-all" title="LinkedIn">
              <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Soham1416/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-[#FFA116] transition-all" title="LeetCode">
              <Code2 size={28} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LeetCode</span>
            </a>
            <a href="mailto:singhsoham298@gmail.com" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-all" title="Email">
              <Mail size={28} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-200 hidden md:block cursor-pointer"
        onClick={(e) => handleScroll(e as any, '#skills')}
      >
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-300 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
