
import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = window.gsap.context(() => {
      const tl = window.gsap.timeline({ defaults: { ease: "power4.out" } });

      // Title Animation: Skew fade up
      tl.from(".hero-word", {
        y: 100,
        opacity: 0,
        skewY: 7,
        duration: 2,
        stagger: 0.15,
      })
      // Subtitle Animation: Clean fade
      .from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.2")
      // Button Animation
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=1.0");

      // Scroll indicator fade in
      window.gsap.from(".scroll-indicator", {
        opacity: 0,
        y: -10,
        duration: 1,
        delay: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Parallax effect for background
      window.gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100dvh] w-full flex flex-col items-center justify-end overflow-hidden bg-nura-moss text-white z-0 pb-32 md:pb-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2670&auto=format&fit=crop" 
          alt="Atmospheric Forest" 
          className="hero-bg w-full h-[120%] object-cover opacity-60" 
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-nura-moss/30 via-nura-moss/10 to-nura-moss/90" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Extra gradient at bottom to seamlessly blend text area */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-nura-moss via-nura-moss/50 to-transparent opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl">
        
        {/* Main Heading - Mixed Typography */}
        <h1 className="flex flex-col items-center mb-10 leading-[0.85]">
          <div className="overflow-hidden">
             <span className="hero-word block font-sans font-light text-5xl md:text-7xl lg:text-8xl tracking-tight text-white/90 mb-2 md:mb-4">
               Nature is the
             </span>
          </div>
          <div className="overflow-hidden p-2 -m-2">
             <span className="hero-word block font-serif italic text-7xl md:text-9xl lg:text-[10rem] text-white mix-blend-overlay">
               Algorithm.
             </span>
          </div>
        </h1>

        {/* Subtitle */}
        <div className="overflow-hidden mb-12 w-full flex justify-center">
            <p className="hero-sub text-lg md:text-xl text-white/70 max-w-lg leading-relaxed font-light">
                Your biology isn't broken. It just needs to be heard. <br className="hidden md:block"/>
                Translating body signals into a longevity blueprint.
            </p>
        </div>

        {/* Single Primary Action */}
        <div className="hero-btn flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
          <button className="group relative px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-medium text-lg overflow-hidden transition-all hover:bg-white hover:text-nura-moss hover:scale-105 hover:border-transparent">
            <span className="relative z-10 flex items-center gap-3">
              Begin Analysis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};
