import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/content';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getProjectIcon = (index: number) => {
    const icons = [Code, Database, TrendingUp];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6" />;
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformative Workday implementations and automation solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full -ml-16 -mb-16" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Project Info */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground"
                        >
                          {getProjectIcon(index)}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + techIndex * 0.05 + 0.3 }}
                            className="px-3 py-1 bg-surface-primary text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/10 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="md:w-64 flex-shrink-0">
                      <div className="bg-surface-primary rounded-2xl p-6 border border-border">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-success" />
                          Impact
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.impact}
                        </p>
                        
                        {/* Decorative Bar */}
                        <div className="mt-4 h-1 bg-gradient-to-r from-success to-primary rounded-full opacity-60" />
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="mt-6 pt-6 border-t border-border"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="group/btn border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: projects.length * 0.2 + 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent to-warning text-background font-medium rounded-lg hover:shadow-glow transition-all duration-300"
          >
            View Education & Certifications
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}