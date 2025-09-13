import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/content';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-primary to-secondary',
      bgColor: 'from-primary/10 to-secondary/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-accent to-warning',
      bgColor: 'from-accent/10 to-warning/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'from-success to-primary',
      bgColor: 'from-success/10 to-primary/10',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-500',
    },
    {
      icon: Mail,
      label: 'Email', 
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
   
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your HR operations? Let's discuss how I can help transform your Workday ecosystem.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're looking to implement Workday solutions, optimize existing processes, 
                  or need expert consultation on HR technology, I'm here to help. Let's collaborate 
                  to drive efficiency and innovation in your organization.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`w-6 h-6 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.label}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 border-t border-border"
              >
                <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-surface-primary border border-border rounded-xl flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:border-primary/30 hover:shadow-lg`}
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-elegant"
            >
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
                  <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-surface-primary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-surface-primary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                        placeholder="john@company.com"
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-surface-primary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                      placeholder="Workday Implementation Consultation"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-primary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground resize-none"
                      placeholder="Tell me about your project and how I can help..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}