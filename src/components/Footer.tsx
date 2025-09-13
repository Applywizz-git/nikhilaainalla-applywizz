import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Name and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gradient-primary mb-2">
              {personalInfo.name}
            </h3>
            <div className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-200"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}