import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/content';

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-surface-secondary to-surface-tertiary overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-left"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-gradient-primary">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="text-foreground">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{personalInfo.location}</span>
            </motion.div>

            {/* One Liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {personalInfo.oneLiner}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow"
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Experience
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start gap-6 text-sm text-muted-foreground pt-8"
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Profile`}
                    className="w-60 h-60 md:w-76 md:h-76 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-60 h-60 md:w-76 md:h-76 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-foreground">
                          ${personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
