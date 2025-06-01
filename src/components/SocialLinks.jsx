import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { 
  FiInstagram, FiTwitter, FiLinkedin, FiYoutube, 
  FiTrello, FiFacebook, FiChevronRight
} from 'react-icons/fi'

const SocialLinks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState('profile')

  const socialProfiles = [
    {
      platform: 'Instagram',
      icon: <FiInstagram />,
      username: '@johndoedesign',
      followers: '15.2K',
      engagement: '3.8%',
      color: 'from-purple-600 to-pink-500'
    },
    {
      platform: 'Twitter',
      icon: <FiTwitter />,
      username: '@johndoedev',
      followers: '8.5K',
      engagement: '2.1%',
      color: 'from-blue-400 to-blue-600'
    },
    {
      platform: 'LinkedIn',
      icon: <FiLinkedin />,
      username: 'John Doe',
      followers: '4.2K',
      engagement: '4.5%',
      color: 'from-blue-600 to-blue-800'
    },
    {
      platform: 'YouTube',
      icon: <FiYoutube />,
      username: 'John Doe Creative',
      followers: '12.7K',
      engagement: '6.2%',
      color: 'from-red-500 to-red-700'
    },
    {
      platform: 'Facebook',
      icon: <FiFacebook />,
      username: 'John Doe Design',
      followers: '9.3K',
      engagement: '1.9%',
      color: 'from-blue-500 to-blue-700'
    }
  ]

  const recentPosts = [
    {
      platform: 'Instagram',
      date: '2 days ago',
      engagement: '1.2K likes',
      content: 'Just launched a new website for a client! Check out the clean design and smooth animations.',
      icon: <FiInstagram />
    },
    {
      platform: 'Twitter',
      date: '4 days ago',
      engagement: '45 retweets',
      content: 'The future of web development is here. React 18 brings some amazing performance improvements.',
      icon: <FiTwitter />
    },
    {
      platform: 'LinkedIn',
      date: '1 week ago',
      engagement: '87 comments',
      content: 'Excited to announce that I\'ll be speaking at the upcoming Web Dev Conference about social media management for developers.',
      icon: <FiLinkedin />
    }
  ]

  const scheduledContent = [
    {
      platform: 'Instagram',
      date: 'Tomorrow, 10:00 AM',
      content: 'Behind the scenes look at my development process.',
      icon: <FiInstagram />
    },
    {
      platform: 'Twitter',
      date: 'Friday, 2:00 PM',
      content: 'Weekly tech tips thread: 5 VS Code extensions that will change your life.',
      icon: <FiTwitter />
    },
    {
      platform: 'LinkedIn',
      date: 'Monday, 9:00 AM',
      content: 'Case study: How I helped a client increase conversions by 150% with a website redesign.',
      icon: <FiLinkedin />
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
    <section id="social" className="section bg-primary-50 dark:bg-primary-900">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Social Media Management</h2>
          <p className="text-primary-600 dark:text-primary-300">
            I help brands build and maintain their social presence across platforms.
            Below is a snapshot of my social media management dashboard.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-primary-800 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex border-b border-primary-200 dark:border-primary-700">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'profile' 
                  ? 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-white border-b-2 border-accent-600' 
                  : 'text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white'
              }`}
            >
              Profiles Overview
            </button>
            <button 
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'recent' 
                  ? 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-white border-b-2 border-accent-600' 
                  : 'text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white'
              }`}
            >
              Recent Posts
            </button>
            <button 
              onClick={() => setActiveTab('scheduled')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'scheduled' 
                  ? 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-white border-b-2 border-accent-600' 
                  : 'text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white'
              }`}
            >
              Scheduled Content
            </button>
          </div>
          
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialProfiles.map((profile, index) => (
                      <div 
                        key={index} 
                        className="rounded-lg overflow-hidden"
                      >
                        <div className={`bg-gradient-to-r ${profile.color} p-4 text-white`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{profile.icon}</span>
                              <span className="font-medium">{profile.platform}</span>
                            </div>
                            <FiChevronRight />
                          </div>
                        </div>
                        <div className="bg-white dark:bg-primary-900 p-4 border border-primary-200 dark:border-primary-700 rounded-b-lg">
                          <div className="mb-2">
                            <span className="text-sm text-primary-500 dark:text-primary-400">Username</span>
                            <p className="font-medium">{profile.username}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-primary-500 dark:text-primary-400">Followers</span>
                              <p className="font-medium">{profile.followers}</p>
                            </div>
                            <div>
                              <span className="text-sm text-primary-500 dark:text-primary-400">Engagement</span>
                              <p className="font-medium">{profile.engagement}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'recent' && (
                <motion.div
                  key="recent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {recentPosts.map((post, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-primary-900 p-4 border border-primary-200 dark:border-primary-700 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <span className="text-xl mr-2 text-primary-600 dark:text-primary-300">{post.icon}</span>
                          <span className="font-medium">{post.platform}</span>
                        </div>
                        <div className="text-sm text-primary-500 dark:text-primary-400">
                          {post.date} • {post.engagement}
                        </div>
                      </div>
                      <p className="text-primary-700 dark:text-primary-200">{post.content}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {activeTab === 'scheduled' && (
                <motion.div
                  key="scheduled"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  variants={containerVariants}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Upcoming Content</h3>
                    <button className="btn btn-primary btn-sm">
                      Schedule New Post
                    </button>
                  </div>
                  
                  {scheduledContent.map((content, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-primary-900 p-4 border border-primary-200 dark:border-primary-700 rounded-lg flex items-center"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-700 flex items-center justify-center text-primary-600 dark:text-primary-300 mr-4">
                        {content.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-primary-700 dark:text-primary-200 font-medium">{content.content}</p>
                        <p className="text-sm text-primary-500 dark:text-primary-400">{content.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-200">
                          <FiTrello />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialLinks