import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/content';

interface SkillMeterProps {
  skill: { name: string; proficiency: number };
  index: number;
  type: 'honeycomb' | 'shard' | 'glyph';
}

function HoneycombMeter({ skill, index }: { skill: { name: string; proficiency: number }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hexagonal Container */}
      <div className="relative w-24 h-24 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-90">
          {/* Background Hexagon */}
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          {/* Progress Fill */}
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill={`hsl(var(--primary))`}
            opacity={skill.proficiency / 100}
            className="transition-all duration-500"
          />
          {/* Progress Ring */}
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke={`hsl(var(--primary))`}
            strokeWidth="3"
            strokeDasharray="280"
            strokeDashoffset={280 - (280 * skill.proficiency) / 100}
            className="transition-all duration-1000 ease-out"
            style={{ transformOrigin: 'center' }}
          />
        </svg>
      </div>
      
      {/* Skill Name */}
      <div className="mt-3 text-center">
        <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="text-xs text-primary font-bold"
        >
          {skill.proficiency}%
        </motion.div>
      </div>
    </motion.div>
  );
}

function ShardMeter({ skill, index }: { skill: { name: string; proficiency: number }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-foreground">{skill.name}</h4>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          className="text-sm font-bold text-primary"
        >
          {skill.proficiency}%
        </motion.span>
      </div>
      
      {/* Shard Progress Bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-secondary relative"
        >
          {/* Animated Shard Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function GlyphMeter({ skill, index }: { skill: { name: string; proficiency: number }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glyph Container */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Background Glyph */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          {/* Progress Arc */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={`hsl(var(--primary))`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * skill.proficiency) / 100}
            className="transition-all duration-1000 ease-out"
            transform="rotate(-90 50 50)"
          />
          {/* Inner Glyph Symbol */}
          <motion.circle
            cx="50"
            cy="50"
            r="25"
            fill={`hsl(var(--primary))`}
            opacity={skill.proficiency / 100}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            className="text-xs font-bold fill-primary-foreground"
          >
            {skill.name.charAt(0)}
          </text>
        </svg>
      </div>
      
      {/* Skill Info */}
      <div className="text-center">
        <h4 className="text-sm font-medium text-foreground mb-1">{skill.name}</h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="text-xs text-primary font-bold"
        >
          {skill.proficiency}%
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillMeter({ skill, index, type }: SkillMeterProps) {
  switch (type) {
    case 'honeycomb':
      return <HoneycombMeter skill={skill} index={index} />;
    case 'shard':
      return <ShardMeter skill={skill} index={index} />;
    case 'glyph':
      return <GlyphMeter skill={skill} index={index} />;
    default:
      return <HoneycombMeter skill={skill} index={index} />;
  }
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const meterTypes: ('honeycomb' | 'shard' | 'glyph')[] = ['honeycomb', 'shard', 'glyph', 'honeycomb', 'shard'];

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Technical Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise in Workday ecosystem and HR technology solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-16">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-center text-foreground">
                {skillCategory.category}
              </h3>

              {/* Skills Grid */}
              <div className={`grid ${
                meterTypes[categoryIndex] === 'shard' 
                  ? 'grid-cols-1 md:grid-cols-2 gap-4' 
                  : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'
              }`}>
                {skillCategory.items.map((skill, skillIndex) => (
                  <SkillMeter
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    type={meterTypes[categoryIndex]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}