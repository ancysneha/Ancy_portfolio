import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaServer, FaBrain, FaRocket } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

 
const experiences = [
  {
    icon: FaRocket,
    title: 'Self-Driven Learning & Development',
    period: '2023 - Present',
    description:
      'Engaging in continuous learning by developing full-stack and AI-driven applications through real-world projects and practical experimentation.',
    color: 'from-accent-400 to-accent-600',
    achievements: [
      'Hands-on experience in full-stack application development',
      'Applied AI and machine learning concepts to real-world problem scenarios',
      'Continuously explored and implemented new tools and technologies',
    ],
  },
  {
    icon: FaCode,
    title: 'MERN Stack Development',
    period: '2023 - Present',
    description:
      'Gaining hands-on experience with the MERN stack, emphasizing backend logic, MongoDB integration, and foundational React usage.',
    color: 'from-primary-400 to-primary-600',
    achievements: [
      'Experience in building RESTful APIs and backend services',
      'Frontend development using React with component-based architecture',
      'Database design and integration using MongoDB',
    ],
  },
  {
    icon: FaBrain,
    title: 'AI & Machine Learning Development',
    period: '2024 - Present',
    description:
      'Exploring and applying machine learning and deep learning concepts to develop intelligent, data-driven applications.',
    color: 'from-purple-400 to-pink-600',
    achievements: [
      'Worked with machine learning models for classification and prediction tasks',
      'Hands-on experience with deep learning concepts and model training',
      'Built AI-driven features and integrated them into applications',
    ],
  },
]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My journey in development and AI innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="glass rounded-3xl p-6 md:p-10 hover:glass-strong transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-3xl text-white" />
                      </motion.div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2 group-hover:text-white transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-accent-400 font-medium mb-3">{exp.period}</p>
                        <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pl-20 md:pl-24">
                    <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.3 }}
                        >
                          <motion.span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          className="mt-12 glass rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
          Building with purpose, learning without limits, and creating solutions that drive change.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

