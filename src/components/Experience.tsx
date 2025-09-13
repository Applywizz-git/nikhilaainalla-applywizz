import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '@/data/content';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative bg-surface-secondary py-20"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise in Workday ecosystem across leading technology companies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-accent h-full rounded-full" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:border-primary/30 transition-all duration-300 relative"
                  >
                    {/* Company & Role */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center mb-2">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          {exp.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-gradient-primary">
                          {exp.position}
                        </h4>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground bg-surface-primary px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: index * 0.2 + achievementIndex * 0.1 + 0.3,
                            duration: 0.4,
                          }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-50" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-accent/10 to-warning/10 rounded-full opacity-50" />
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: experience.length * 0.2 + 0.5, duration: 0.5 }}
            className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-accent rounded-full"
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: experience.length * 0.2 + 0.7, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() =>
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-secondary to-accent text-background font-medium rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Explore My Skills
            <motion.svg
              className="ml-5 w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 flex justify-center"
      >
        <button
          onClick={() =>
            document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
