import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:ancysneha005@gmail.com',
      color: 'from-accent-400 to-accent-600',
      hoverColor: 'hover:from-accent-500 hover:to-accent-700',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ancysneha',
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:from-gray-300 hover:to-gray-500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ancysneha/',
      color: 'from-primary-400 to-primary-600',
      hoverColor: 'hover:from-primary-300 hover:to-primary-500',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-3xl p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>

              <div className="space-y-6 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 group`}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">{social.name}</div>
                        <div className="text-white/80 text-sm">
                          {social.href.startsWith('http')
                            ? 'Visit Profile'
                            : 'ancysneha@example.com'}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8 p-6 rounded-2xl glass border border-accent-500/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-400 font-semibold">Quick Response:</span> I typically
                  respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-gray-200 placeholder-gray-500 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-gray-200 placeholder-gray-500 transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-gray-200 placeholder-gray-500 resize-none transition-all"
                    placeholder="Tell me about your project or just say hi!"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ancy Sneha. Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

