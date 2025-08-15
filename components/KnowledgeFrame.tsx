import { motion } from 'motion/react'
import { Lightbulb, Rocket, Zap, Target } from 'lucide-react'

export function KnowledgeFrame() {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges',
      color: 'bg-yellow-500',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed & efficiency',
      color: 'bg-blue-500',
    },
    {
      icon: Zap,
      title: 'Quick Learning',
      description: 'Adapting to new technologies',
      color: 'bg-purple-500',
    },
    {
      icon: Target,
      title: 'User Focus',
      description: 'Creating meaningful experiences',
      color: 'bg-green-500',
    },
  ]

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full w-full border-2 border-orange-200 dark:border-orange-500 relative flex flex-col scroll-mt-24"
      id="knowledge-frame"
    >
      {/* Frame Label */}
      <div className="absolute -top-6 left-0 bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium">
        Knowledge
      </div>
      
      <div className="space-y-4 flex-1">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          Core Strengths 💪
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-3 flex-1">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center space-y-2 cursor-pointer hover:shadow-md transition-shadow h-fit"
            >
              <div className={`w-10 h-10 ${skill.color} rounded-lg flex items-center justify-center mx-auto`}>
                <skill.icon size={20} className="text-white" />
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white">{skill.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pt-2"
        >
          <p className="text-xs text-gray-500">
            Continuous growth mindset 🌱
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}