import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary-900 dark:bg-white text-white dark:text-primary-900 shadow-lg flex items-center justify-center"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  )
}

export default ThemeToggle