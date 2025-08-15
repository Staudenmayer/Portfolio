import { motion } from 'motion/react'
import { Sparkles, Heart } from 'lucide-react'

export function HeroFrame() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full w-full border-2 border-blue-200 dark:border-blue-500 relative flex flex-col scroll-mt-26"
      id="hero-frame"
    >
      {/* Frame Label */}
      <div className="absolute -top-6 left-0 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">
        Hero
      </div>
      
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 right-4 text-yellow-400"
      >
        <Sparkles size={24} />
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 right-4 text-pink-400"
      >
        <Heart size={20} fill="currentColor" />
      </motion.div>
      
      {/* Content */}
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold"
        >
          JD
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 dark:text-white"
        >
          John Designer
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-200"
        >
          Creative Developer & Designer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 dark:text-gray-400 max-w-md mx-auto"
        >
          Making the web more beautiful, one pixel at a time ✨
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex space-x-3 justify-center pt-4"
        >
          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}