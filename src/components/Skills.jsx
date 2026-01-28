import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillsData = {
    frontend: [
      { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-400 to-cyan-400' },
      { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-orange-400' },
      { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-400' },
      { name: 'CSS', icon: '💎', color: 'from-blue-400 to-indigo-400' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
      { name: 'Express.js', icon: '🚂', color: 'from-gray-400 to-gray-600' },
      { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    ],
    ai: [
      {
        name: 'Machine Learning Systems',
        icon: '🤖',
        color: 'from-sky-400 to-cyan-500',
      },
      {
        name: 'Deep Learning Models',
        icon: '🧠',
        color: 'from-indigo-400 to-violet-500',
      },
      {
        name: 'Model Deployment & Integration',
        icon: '🚀',
        color: 'from-teal-400 to-emerald-500',
      },
    ],
    
    
    
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={skillCardVariants}
      className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.05 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="text-4xl mb-3">{skill.icon}</div>
        <div className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
          {skill.name}
        </div>
      </div>
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
      />
    </motion.div>
  )

  const SkillSection = ({ title, skills, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="mb-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-pink">{title}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          <SkillSection title="Frontend" skills={skillsData.frontend} delay={0.2} />
          <SkillSection title="Backend" skills={skillsData.backend} delay={0.4} />
          <SkillSection title="AI / ML" skills={skillsData.ai} delay={0.6} />
        </div>
      </div>
    </section>
  )
}

export default Skills

