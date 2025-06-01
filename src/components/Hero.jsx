import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              className="inline-block text-accent-600 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="mb-4 text-primary-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Iyiola Daniel
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl mb-6 text-primary-700 dark:text-primary-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Social Media Strategist & <br /> Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-primary-600 dark:text-primary-300 max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I build exceptional digital experiences and help brands grow their
              online presence. Specialized in creating beautiful, functional
              websites and effective social media strategies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in touch
                <FiArrowRight className="ml-2" />
              </a>
              <a href="#projects" className="btn btn-outline">
                View my work
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center md:justify-start space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/Iyiola2dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-900 dark:text-primary-300 dark:hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              {/* <a href="#" className="text-primary-600 hover:text-primary-900 dark:text-primary-300 dark:hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a> */}
              {/* <a href="#" className="text-primary-600 hover:text-primary-900 dark:text-primary-300 dark:hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-accent-600 rounded-lg transform rotate-3"></div>
              <img
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1748744006/simu-l/my-image_hz40b7.jpg"
                alt="Profile"
                className="relative z-10 rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
