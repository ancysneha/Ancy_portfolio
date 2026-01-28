import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Hero = () => {
  return (
    <>
      {/* ✅ Page Title Control */}
      <Helmet>
        <title>Ancy Sneha | Full Stack Developer | AI Enthusiast</title>
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Ancy Sneha
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driven by curiosity, guided by purpose, and focused on meaningful creation.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-primary-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
