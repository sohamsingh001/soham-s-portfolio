
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import * as LucideIcons from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
            A toolkit designed for <span className="text-slate-400 italic font-medium">performance</span>.
          </h3>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed"
        >
          My focus is on the intersection of scalability and efficiency. I leverage modern frameworks and cloud architectures to build solutions that don't just work, but excel.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            className={`p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 ${
              idx === 1 ? 'md:translate-y-12 bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 -mr-16 -mt-16 rounded-full ${idx === 1 ? 'bg-white' : 'bg-blue-600'}`}></div>
            
            <h4 className={`text-2xl font-black mb-10 flex items-center gap-3 ${idx === 1 ? 'text-white' : 'text-slate-900'}`}>
              <span className={`w-2 h-8 rounded-full ${idx === 1 ? 'bg-white/40' : 'bg-blue-600'}`}></span>
              {category.name}
            </h4>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const IconComponent = (LucideIcons as any)[skill.icon];
                return (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border ${
                      idx === 1 
                        ? 'bg-white/10 border-white/20 text-white backdrop-blur-sm' 
                        : 'bg-slate-50 border-slate-100 text-slate-700'
                    }`}
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
