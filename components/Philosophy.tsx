
import React, { useRef, useEffect } from 'react';

export const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = window.gsap.context(() => {
            // Parallax the background image subtly
            window.gsap.to(".phil-bg", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Reveal text lines
            const lines = window.gsap.utils.toArray('.phil-line');
            lines.forEach((line: any) => {
                window.gsap.from(line, {
                    y: 100,
                    opacity: 0,
                    rotationX: -45,
                    transformOrigin: "0% 50% -50",
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: line,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={containerRef} className="relative py-40 px-6 bg-nura-charcoal overflow-hidden text-nura-cream min-h-screen flex items-center justify-center">
            
            {/* Ambient Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img 
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2400&auto=format&fit=crop" 
                    alt="Organic Texture" 
                    className="phil-bg w-full h-[120%] object-cover grayscale brightness-50 contrast-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nura-charcoal via-transparent to-nura-charcoal"></div>
            </div>

            {/* Central Manifesto */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="mb-12">
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm">
                        The Philosophy
                    </span>
                </div>

                <div ref={textRef} className="space-y-4 md:space-y-8 perspective-1000">
                    <div className="overflow-hidden">
                        <h2 className="phil-line font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white/90">
                            Modern medicine asks,
                        </h2>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="phil-line font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white/50">
                            "What is wrong?"
                        </h2>
                    </div>
                    
                    <div className="py-12 flex justify-center">
                        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-nura-clay to-transparent opacity-50"></div>
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="phil-line font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white/90">
                            We ask,
                        </h2>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="phil-line font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-nura-clay">
                            "What is optimal?"
                        </h2>
                    </div>
                </div>

                <div className="mt-24 max-w-2xl mx-auto">
                    <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
                        Health is not merely the absence of disease. It is the <span className="text-white font-normal">infinite capability</span> of your biology to adapt, recover, and thrive in an entropic world.
                    </p>
                </div>
            </div>
        </section>
    );
}
