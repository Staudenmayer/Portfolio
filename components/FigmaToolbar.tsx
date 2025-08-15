import { motion } from 'motion/react'
import { Smile, Brain, Code, User, FileText } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export function FigmaToolbar() {
  const tools = [
    { icon: User, label: 'Hero', color: 'bg-blue-500' },
    { icon: Smile, label: 'About', color: 'bg-green-500' },
    { icon: Brain, label: 'Knowledge', color: 'bg-orange-500' },
    { icon: Code, label: 'Tech', color: 'bg-purple-500' },
    { icon: FileText, label: 'CV', color: 'bg-pink-500' },
  ];

  function copyUrlToClipboard() {
    const url = window.location.origin;
    navigator.clipboard.writeText(url);
    //only get root url
  }

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">Portfolio Board</span>
          </motion.div>
        </div>
        
        {/* Center - Tools */}
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-1">
          {tools.map((tool, index) => (
            <a key={tool.label} href={`#${tool.label.toLowerCase()}-frame`}>
              <motion.button
                key={tool.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-md ${tool.color} text-white shadow-sm cursor-pointer`}
                title={tool.label}
              >
                <tool.icon size={16} />
              </motion.button>
            </a>
          ))}
        </div>
        
        {/* Right side - Share button */}
        <span className='flex items-center space-x-2'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
          onClick={copyUrlToClipboard}
        >
          Share
        </motion.button>
        <ThemeToggle />
        </span>
      </div>
    </motion.div>
  )
}