
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, Github, X, Eye, Info, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            Selected <span className="text-blue-600">Works</span>
          </h3>
          <p className="text-slate-500 mt-4 max-w-xl text-lg">
            A curated showcase of engineering projects focusing on performance, scalability, and user-centric design.
          </p>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          href="https://github.com/sohamsingh001" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
        >
          Explore All Repositories
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" } 
            }}
            className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-50 transition-all group"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Container with Zoom & Overlay */}
            <div className="relative aspect-[16/10] overflow-hidden cursor-pointer">
              <motion.img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Quick View Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 backdrop-blur-md text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl"
                >
                  <Eye size={18} />
                  Quick View
                </motion.div>
              </div>
              
              {/* Floating Tech Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-900 shadow-sm">
                  {project.techStack[0]}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                {project.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <div 
                      key={tech} 
                      className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black ${
                        i % 2 === 0 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
                      }`}
                      title={tech}
                    >
                      {tech.substring(0, 1)}
                    </div>
                  ))}
                  {project.techStack.length > 3 && (
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-400">
                      +{project.techStack.length - 3}
                    </div>
                  )}
                </div>
                
                <button 
                  className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/btn"
                >
                  Details
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modern Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full transition-colors z-20 shadow-lg md:text-slate-400 md:hover:text-slate-900"
              >
                <X size={24} />
              </button>

              {/* Modal Left: Image */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-slate-100 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Modal Right: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col">
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-slate-50 text-slate-400 border border-slate-100 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-100">
                  <div>
                    <h5 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-3">Goal</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      To deliver a robust, user-centric solution that addresses complex technical challenges with elegant architecture.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-3">Tech Highlights</h5>
                    <ul className="text-sm text-slate-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Clean Codebase</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Scalable Infrastructure</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                    >
                      <ExternalLink size={20} />
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
