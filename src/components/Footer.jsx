import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 dark:bg-black text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold font-display mb-4 inline-block">
              <span className="text-white">Port</span>
              <span className="text-accent-500">folio</span>
            </a>
            <p className="text-primary-300 mb-6 max-w-md">
              Building exceptional digital experiences that connect brands with their audience.
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-primary-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-primary-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#social" className="text-primary-300 hover:text-white transition-colors">Social Media</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">Social Media Management</a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">Content Creation</a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">Digital Marketing</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm">
            © {currentYear} Iyiola. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer