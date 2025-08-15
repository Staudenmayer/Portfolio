import { motion } from 'motion/react'
import { Download, ExternalLink, Award, Calendar } from 'lucide-react'
import { Button } from './ui/button'

export function CVFrame() {
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Startup Inc.',
      period: '2022 - Present',
      highlight: 'Led UI/UX improvements',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      highlight: 'Built 15+ client projects',
    },
    {
      role: 'Junior Developer',
      company: 'Local Studio',
      period: '2019 - 2020',
      highlight: 'Learned React & Node.js',
    },
  ]

  const handleDownload = () => {
    // Mock download functionality
    alert('CV download would start here! 📄')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full w-full border-2 border-pink-200 dark:border-pink-500 relative flex flex-col scroll-mt-24"
      id="cv-frame"
    >
      {/* Frame Label */}
      <div className="absolute -top-6 left-0 bg-pink-500 text-white px-3 py-1 rounded-md text-sm font-medium">
        CV & Experience
      </div>
      
      <div className="space-y-4 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Experience 📋</h3>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Award size={20} className="text-yellow-500" />
          </motion.div>
        </motion.div>
        
        <div className="space-y-3 flex-1 overflow-y-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 5 }}
              className="border-l-4 border-pink-300 pl-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg transition-colors cursor-pointer"
            >
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-800 dark:text-white">{exp.role}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-200">{exp.company}</p>
                <p className="text-xs text-pink-600 font-medium dark:text-pink-400">{exp.highlight}</p>
                <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-300">
                  <Calendar size={10} />
                  <span className="text-xs">{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-4 border-t border-gray-100 dark:border-gray-600 space-y-3"
        >
          <div className="flex space-x-2">
            <Button
              onClick={handleDownload}
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
              size="sm"
            >
              <Download size={14} className="mr-2" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <ExternalLink size={14} />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            Let's build something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}