import { motion } from 'motion/react'
import { Coffee, Music, Camera } from 'lucide-react'

export function AboutFrame() {
  const interests = [
    { icon: Coffee, label: 'Coffee Lover', color: 'text-amber-600' },
    { icon: Music, label: 'Music Enthusiast', color: 'text-purple-600' },
    { icon: Camera, label: 'Photography', color: 'text-green-600' },
  ]

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full w-full border-2 border-green-200 dark:border-green-500 relative flex flex-col  scroll-mt-24"
      id="about-frame"
    >
      {/* Frame Label */}
      <div className="absolute -top-6 left-0 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-medium">
        About Me
      </div>
      
      <div className="space-y-4 flex-1">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          Hey there! 👋
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 leading-relaxed flex-1 dark:text-gray-200"
        >
          I'm a passionate developer who loves creating beautiful, functional experiences. 
          When I'm not coding, you'll find me exploring new design trends or tinkering with side projects.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <h4 className="font-medium text-gray-700 dark:text-gray-300">What I love:</h4>
          {interests.map((interest, index) => (
            <motion.div
              key={interest.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <interest.icon size={18} className={interest.color} />
              <span className="text-gray-600 dark:text-gray-300">{interest.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}