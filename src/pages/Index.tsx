import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Background3D } from '@/components/Background3D';

const Index = () => {
  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50 transition-all duration-200"
      >
        Skip to main content
      </a>

      {/* 3D Background */}
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
