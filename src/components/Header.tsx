// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NOTE: corrected duplicate href for Certifications -> '#certifications'
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' }, // fixed
    { href: '#contact', label: 'Contact' },
  ];

  /**
   * Scroll helper that:
   * 1) closes the mobile menu first (so layout stabilizes),
   * 2) then scrolls to the target position with an offset for the fixed header.
   *
   * Closing the menu first prevents the layout-shift problem where scrollIntoView is
   * called while the menu is still open and the final layout (after menu closes)
   * causes the scrolled-to element to be obscured or moved.
   */
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    // Close mobile menu first so layout stabilizes.
    setIsMobileMenuOpen(false);

    // Wait for the DOM/layout to update after closing menu.
    // requestAnimationFrame is usually enough; use setTimeout(50) if you have animations.
    requestAnimationFrame(() => {
      // If your header has a CSS height different on mobile/desktop, computing dynamically is safer:
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;

      // Compute absolute top position respecting current scroll position
      const elementTop = window.scrollY + element.getBoundingClientRect().top - headerHeight - 8; // small gap

      window.scrollTo({
        top: Math.max(0, elementTop),
        behavior: 'smooth',
      });
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl text-gradient-primary cursor-pointer"
              onClick={() => scrollToSection('#hero')}
              role="button"
              tabIndex={0}
            >
              NA
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <a href="/nikhila-resume.pdf" download>
                <Button
                  size="sm"
                  className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-left text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button
                    size="sm"
                    className="self-start flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild={false}
                  >
                    <a href="/nikhila-resume.pdf" download className="inline-flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Resume</span>
                    </a>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </>
  );
}
