import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { education, certifications } from '@/data/content';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 bg-surface-secondary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning foundation with specialized HR technology expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground bg-surface-primary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group flex items-start space-x-4 bg-card rounded-xl p-4 border border-border hover:border-accent/30 hover:bg-surface-primary transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent/10 to-warning/10 rounded-lg flex items-center justify-center group-hover:from-accent/20 group-hover:to-warning/20 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 text-accent" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium leading-relaxed group-hover:text-accent transition-colors duration-300">
                      {cert}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Certification Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 bg-gradient-to-r from-accent/10 to-warning/10 rounded-2xl p-6 border border-accent/20"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient-accent">4</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Get In Touch
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}