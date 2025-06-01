import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description: "A fully responsive e-commerce website with cart functionality, product filtering, and secure checkout.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["web", "react"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Centralized dashboard for managing multiple social media accounts with analytics and scheduling features.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["web", "social"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Portfolio for Photographer",
      description: "Minimalist portfolio website for a professional photographer with image gallery and contact form.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["design", "web"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Social Content Scheduler",
      description: "Tool for planning and scheduling social media content across multiple platforms.",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["social", "react"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      description: "Online reservation system for restaurants with table management and customer notifications.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["web", "react"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, color palette, typography, and usage guidelines.",
      image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["design"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">My Projects</h2>
          <p className="text-primary-600 dark:text-primary-300">
            Explore my recent work across web development, design, and social media management.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', 'web', 'design', 'react', 'social'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === tag 
                  ? 'bg-primary-900 text-white dark:bg-white dark:text-primary-900' 
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-200 dark:hover:bg-primary-700'}`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          {project.links.github && (
                            <a href={project.links.github} className="text-white hover:text-accent-400 transition-colors">
                              <FiGithub size={20} />
                            </a>
                          )}
                          {project.links.live && (
                            <a href={project.links.live} className="text-white hover:text-accent-400 transition-colors">
                              <FiExternalLink size={20} />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-accent-600 text-white px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-primary-600 dark:text-primary-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p 
            className="text-center text-primary-500 dark:text-primary-400 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            No projects found with the selected filter.
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default Projects