import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'

export function TechnologiesFrame() {
  const technologies = [
    { name: 'React', level: 90, category: 'Frontend', color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, category: 'Language', color: 'bg-blue-600' },
    { name: 'Next.js', level: 80, category: 'Framework', color: 'bg-gray-800' },
    { name: 'Tailwind', level: 95, category: 'Styling', color: 'bg-cyan-500' },
    { name: 'Node.js', level: 75, category: 'Backend', color: 'bg-green-600' },
    { name: 'Figma', level: 88, category: 'Design', color: 'bg-purple-500' },
  ]

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: 'Expert', variant: 'default' as const, icon: '⭐' }
    if (level >= 80) return { label: 'Advanced', variant: 'default' as const, icon: '🔥' }
    if (level >= 70) return { label: 'Intermediate', variant: 'default' as const, icon: '📈' }
    return { label: 'Learning', variant: 'default' as const, icon: '🌱' }
  }

  const getSkillStars = (level: number) => {
    const stars = Math.ceil(level / 20)
    return '⭐'.repeat(stars)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full w-full border-2 border-purple-200 dark:border-purple-500 relative flex flex-col scroll-mt-24"
      id="tech-frame"
    >
      {/* Frame Label */}
      <div className="absolute -top-6 left-0 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
        Technologies
      </div>
      
      <div className="space-y-4 flex-1">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          My Tech Stack 🚀
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-4 flex-1">
          {technologies.map((tech, index) => {
            const skillLevel = getSkillLevel(tech.level)
            const stars = getSkillStars(tech.level)
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="space-y-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                {/* Technology Name and Category */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800 dark:text-white">{tech.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                </div>
                
                {/* Skill Level and Visual Indicators */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={skillLevel.variant}
                      className="text-xs"
                    >
                      {skillLevel.icon} {skillLevel.label}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-300 font-medium">{tech.level}%</span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{stars}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.ceil(tech.level / 20) 
                              ? tech.color 
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pt-4 border-t border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              🚀 Always Learning
            </Badge>
            <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              📚 Open Source
            </Badge>
            <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              💡 Innovation
            </Badge>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}