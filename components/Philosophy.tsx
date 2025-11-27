
import React, { useRef, useEffect } from 'react';

export const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = window.gsap.context(() => {
            const tl = window.gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse"
                }
            });

            tl.from(".phil-img", { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out" })
              .from(".phil-text", { y: 50, opacity: 0, duration: 1, stagger: 0.2 }, "-=1.0");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={containerRef} className="bg-nura-charcoal text-white py-0 md:py-0 overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
                
                {/* Left: Image / Visual */}
                <div className="w-full md:w-1/2 h-[60vh] md:h-auto relative overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop" 
                        alt="Human potential" 
                        className="phil-img w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-nura-charcoal relative">
                     {/* Decorative Elements */}
                     <div className="absolute top-12 left-12 w-20 h-[1px] bg-nura-clay/50"></div>

                    <div className="max-w-xl">
                        <span className="phil-text block font-sans text-xs font-bold tracking-[0.3em] text-nura-clay uppercase mb-8">
                            Our Philosophy
                        </span>
                        
                        <h2 className="phil-text font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-nura-cream">
                            The Architecture <br/>
                            <span className="font-serif italic text-white/50">of Vitality.</span>
                        </h2>

                        <p className="phil-text text-lg md:text-xl text-white/60 leading-relaxed mb-10 font-light">
                            For decades, the standard has been "sick care"—fixing what breaks. 
                            We believe health is not the absence of pathology, but the presence of boundless capacity.
                        </p>

                        <div className="phil-text pl-6 border-l border-white/20">
                            <p className="text-white/80 italic font-serif text-2xl">
                                "We don't repair. We optimize."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
