import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '@/data/content';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  // ✅ Safe scroll handler
  const handleScrollToExperience = () => {
    const target = document.querySelector('#experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("⚠️ Element with id='experience' not found. Please check your section id.");
    }
  };

  return (
    <section id="about" className="py-20 bg-surface-secondary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-3" />
                
                {/* Main Content Card */}
                <div className="relative bg-card rounded-2xl p-8 shadow-elegant border border-border">
                  <div className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-surface-primary rounded-xl">
                        <div className="text-2xl font-bold text-gradient-primary">3+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-surface-primary rounded-xl">
                        <div className="text-2xl font-bold text-gradient-primary">1000+</div>
                        <div className="text-sm text-muted-foreground">Employees Managed</div>
                      </div>
                      <div className="text-center p-4 bg-surface-primary rounded-xl">
                        <div className="text-2xl font-bold text-gradient-primary">30%</div>
                        <div className="text-sm text-muted-foreground">Efficiency Boost</div>
                      </div>
                      <div className="text-center p-4 bg-surface-primary rounded-xl">
                        <div className="text-2xl font-bold text-gradient-primary">$150K+</div>
                        <div className="text-sm text-muted-foreground">Savings Generated</div>
                      </div>
                    </div>

                    {/* Key Skills */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Workday HCM', 'Payroll Automation', 'BIRT Reports', 'EIB Integration', 'Studio Workflows'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="order-1 lg:order-2 space-y-6"
            >
              {/* Main Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {personalInfo.about}
                </p>
              </div>

              {/* Highlight Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Key Achievements</h4>
                <div className="space-y-3">
                  {[
                    "Improved payroll accuracy by 30% through automation",
                    "Prevented $150K+ in overpayments annually",
                    "Reduced reporting cycles by 30% with custom dashboards",
                    "Enhanced employee satisfaction through streamlined processes"
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="pt-4"
              >
                {/* <button
                  onClick={handleScrollToExperience}  // ✅ fixed handler
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Explore My Experience
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </button> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
