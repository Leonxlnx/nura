
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { HowItWorks } from './components/HowItWorks';
import { Membership } from './components/Membership';
import { Footer } from './components/Footer';

function App() {
  // Register ScrollTrigger
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative selection:bg-nura-clay selection:text-white font-sans overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] bg-noise mix-blend-overlay"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        {/* Features pulls up over Hero for seamless blend */}
        <Features />
        <Philosophy />
        <HowItWorks />
        <Membership />
        
        {/* Final CTA Section */}
        <section className="py-40 px-6 bg-nura-charcoal text-center text-white relative overflow-hidden">
           {/* Decorative blurred blobs */}
           <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-nura-moss/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nura-clay/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="font-display font-medium text-5xl md:text-7xl mb-8 tracking-tight">
              Ready to meet your <br />
              <span className="text-nura-clay italic font-serif">future self?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Join the waitlist today and receive our "Longevity Starter Guide" immediately.
            </p>
            <button className="px-12 py-5 bg-white text-nura-charcoal rounded-full text-xl font-medium hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
              Secure Your Spot
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
