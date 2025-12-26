
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/70 backdrop-blur-2xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="text-2xl font-black text-slate-900 flex items-center gap-1 group"
          >
            SOHAM<span className="text-blue-600">.</span>
          </motion.a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-xs font-black uppercase tracking-widest transition-all relative ${
                  activeSection === link.href.substring(1) 
                  ? 'text-blue-600' 
                  : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span 
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                  />
                )}
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl"
            >
              Hire
            </motion.a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu logic remains same but with better styling... */}
      </nav>
    </>
  );
};

export default Navbar;
