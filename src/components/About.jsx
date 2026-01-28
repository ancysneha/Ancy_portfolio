import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient"
              whileInView={{ opacity: 1, y: 0 }}
            >
              About Me
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Building full-stack and AI-powered applications with a strong problem-solving mindset.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                Passionate about creating modern, animated, and user-centric web experiences.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats or Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: 'Projects Built', value: '7+', icon: '🚀' },
              { label: 'Technologies', value: '10+', icon: '💻' },
              { label: 'AI Projects', value: '3+', icon: '🤖' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

