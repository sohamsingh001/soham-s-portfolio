
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Journey</h2>
        <p className="text-slate-600">Educational background and professional experiences.</p>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600/0 before:via-slate-200 before:to-slate-200/0">
        {EXPERIENCE.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ 
              opacity: 0, 
              y: 40,
            }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: idx * 0.1 
            }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white group-hover:bg-blue-600 group-hover:text-white text-slate-400 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all z-10"
            >
              {item.role.includes('M.C.A') || item.role.includes('B.C.A') ? <GraduationCap size={18} /> : <Briefcase size={18} />}
            </motion.div>

            {/* Content card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all group/card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wider">
                  {item.company}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover/card:text-blue-600 transition-colors">
                {item.role}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
