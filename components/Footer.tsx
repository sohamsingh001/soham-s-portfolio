
import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">S</span>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Soham<span className="text-blue-600">.</span></span>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/sohamsingh001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all" 
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/soham-singh-781417229/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#0077B5] hover:scale-110 transition-all" 
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://leetcode.com/u/Soham1416/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#FFA116] hover:scale-110 transition-all" 
              title="LeetCode"
            >
              <Code2 size={22} />
            </a>
            <a 
              href="mailto:singhsoham298@gmail.com" 
              className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all" 
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            © {currentYear} Soham Singh. Portfolio built with React & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
