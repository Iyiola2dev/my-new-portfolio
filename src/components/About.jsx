import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiTrendingUp, FiGlobe } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
     { name: 'Social Media', level: 88 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'UI/UX Design', level: 75 },
   
  ]

  const services = [
    {
      icon: <FiTrendingUp />,
      title: 'Social Media Management',
      description: 'Developing and executing strategies to grow and engage your audience across platforms.'
    },
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Building responsive, performant websites and web applications using modern technologies.'
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, visually appealing interfaces that provide exceptional user experiences.'
    },
    
    {
      icon: <FiGlobe />,
      title: 'Content Creation',
      description: 'Producing high-quality, engaging content tailored to your brand and audience.'
    }
  ]

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
    <section id="about" className="section bg-primary-50 dark:bg-primary-900">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">About Me</h2>
          <p className="text-primary-600 dark:text-primary-300">
            I'm a passionate developer and social media strategist with experience in
            creating digital solutions that help businesses succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6">My Story</h3>
            <div className="space-y-4 text-primary-600 dark:text-primary-300">
              <p>
                I began my journey as a self-taught developer, fueled by curiosity and passion for creating
                things on the web. What started as a hobby quickly evolved into a career as I discovered
                the power of combining technical skills with creative problem-solving.
              </p>
              <p>
                Over the years, I've worked with startups, agencies, and established companies, helping them
                build their online presence and connect with their audience through compelling digital experiences
                and strategic social media management.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user behavior and
                digital marketing principles, allowing me to create solutions that not only look great
                but also deliver results.
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h3 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My Skills
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary-500 dark:text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-primary-200 dark:bg-primary-700 rounded-full">
                    <div 
                      className="h-full bg-accent-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-center mb-12">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="card p-6 hover:shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-accent-600 text-3xl mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl mb-2">{service.title}</h4>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About