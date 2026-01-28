import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaServer, FaBrain } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'BEST BAKES',
      description: 'Modern bakery website showcasing cakes, pastries, and custom orders',
      longDescription: 'Best Bakes is a visually appealing and responsive bakery website designed to highlight baked products, special offers, and custom cake orders. It includes a dynamic product menu, image gallery, contact and order inquiry section, and a clean UI focused on enhancing customer engagement and brand presence.',
      tech: ['HTML','CSS','JavaScript','Bootstrap','Node.js','Express','MongoDB(Atlas)'],
      category:'Full Stack',
      icon: '🧁',
      github: 'https://github.com/ancysneha/best-bakes-frontend',
      demo: '#',
      color: 'from-pink-400 to-orange-400',
    }
    ,
    {
      id: 2,
      title: 'Flood Detection System',
      description: 'AI-based flood prediction using deep learning and real-time weather data',
      longDescription:
        'An intelligent Flood Detection system that combines Convolutional Neural Networks (ResNet50) and LSTM models to predict flood occurrences using satellite images and weather data. The system processes real-time inputs, generates prediction confidence scores, and presents results through an interactive Streamlit application with stored prediction history.',
      tech: ['Python', 'CNN (ResNet50)', 'LSTM', 'Machine Learning', 'Streamlit', 'SQLite', 'Weather APIs'],
      category: 'AI / Machine Learning',
      icon: '🌊',
      github: 'https://github.com/ancysneha/flood_detector',
      demo: '#',
      color: 'from-blue-400 to-cyan-500',
    },
    
    {
      id: 3,
      title: 'Maternal Health Risk Prediction',
      description: 'Machine learning-based system to predict maternal health risk levels',
      longDescription:
        'A healthcare-focused machine learning application designed to predict maternal health risk levels (Low, Medium, High) based on clinical parameters. The project involves data preprocessing, model training and evaluation using Python and Scikit-learn, and an interactive Streamlit interface for real-time risk prediction and visualization.',
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib'],
      category: 'AI / Machine Learning',
      icon: '🤰',
      github: 'https://github.com/ancysneha/Maternal-Health_Risk-prediction',
      demo: '#',
      color: 'from-pink-400 to-rose-500',
    },
    
    {
      id: 4,
      title: 'Gamified Learning App for PwDs',
      description: 'Inclusive gamified learning platform designed for persons with disabilities',
      longDescription:
        'A socially impactful learning application designed to support Persons with Disabilities (PwDs) through gamified educational modules. The platform emphasizes accessibility, intuitive UI/UX, and interactive learning elements such as levels, rewards, and progress tracking to enhance engagement and learning outcomes.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Gamification', 'UI/UX Design'],
      category: 'Full Stack / Social Impact',
      icon: '🎮',
      github: 'https://github.com/ancysneha/gamified_learning',
      demo: '#',
      color: 'from-indigo-400 to-violet-500',
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={cardVariants}
      className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all duration-300 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.03, y: -10 }}
      onClick={() => setSelectedProject(project)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl mb-2">{project.icon}</div>
          <span className="px-3 py-1 rounded-full text-xs font-medium glass text-gray-300">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs glass text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 rounded-full text-xs glass text-gray-300 border border-white/10">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="text-xl" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
          <motion.button
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedProject(project)
            }}
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm font-medium">View Details</span>
          </motion.button>
        </div>
      </div>

      {/* Animated border effect */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      />
    </motion.div>
  )

  return (
    <>
      <section id="projects" className="min-h-screen py-20 px-4 md:px-8 relative">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A collection of my recent work showcasing full-stack development and AI innovation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="glass-strong rounded-3xl p-6 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl z-20"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </motion.button>

              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{selectedProject.icon}</span>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="px-4 py-1 rounded-full text-sm glass text-gray-300">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-200 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 rounded-full glass text-gray-300 border border-white/10"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:glass-strong transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl text-gray-300" />
                    <span className="text-gray-300 font-medium">View Code</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${selectedProject.color} text-white font-medium transition-all`}
                    whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects

