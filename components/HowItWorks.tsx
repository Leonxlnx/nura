
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const phases = [
  {
    id: "01",
    label: "The Audit",
    title: "Biological Mapping",
    desc: "We begin by digitizing your internal landscape. Through advanced genomic sequencing and comprehensive blood panels, we create a high-fidelity twin of your biology.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2548&auto=format&fit=crop", // Abstract data/cells
    tags: ["Genomics", "Blood Panel", "Microbiome"]
  },
  {
    id: "02",
    label: "The Strategy",
    title: "Neural Synthesis",
    desc: "Data without direction is noise. Our engine correlates 150+ biomarkers against longevity research to uncover your specific levers for performance and lifespan extension.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Abstract tech/light
    tags: ["Pattern Recognition", "AI Modeling", "Risk Analysis"]
  },
  {
    id: "03",
    label: "The Ritual",
    title: "Daily Calibration",
    desc: "The blueprint becomes behavior. Receive a dynamic daily protocol—nutrition, supplementation, and movement—that adapts in real-time to your body's feedback.",
    image: "https://images.unsplash.com/photo-1606820854416-439b33051b46?q=80&w=2670&auto=format&fit=crop", // Nature/Water/Calm
    tags: ["Smart Supplementation", "Nutrition Plan", "HRV Training"]
  }
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = window.gsap.context(() => {
        // Simple fade ups for each row
        const rows = document.querySelectorAll('.method-row');
        rows.forEach((row) => {
            window.gsap.from(row, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 px-6 bg-nura-cream overflow-hidden">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-32 max-w-3xl mx-auto">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-nura-moss/40 uppercase block mb-4">
                The Nura Protocol
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-nura-moss mb-8">
                From molecular data to <br/>
                <span className="font-serif italic text-nura-clay">daily habits.</span>
            </h2>
            <div className="flex justify-center">
                <div className="w-[1px] h-20 bg-nura-moss/10"></div>
            </div>
        </div>

        {/* Process Steps (Z-Pattern) */}
        <div className="space-y-32">
            {phases.map((phase, idx) => (
                <div 
                    key={idx} 
                    className={`method-row flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                >
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <img 
                                src={phase.image} 
                                alt={phase.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            {/* Number Overlay */}
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xl md:text-2xl w-16 h-16 rounded-full flex items-center justify-center">
                                {phase.id}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                        <span className="text-nura-clay font-medium uppercase tracking-widest text-sm mb-4 block">
                            {phase.label}
                        </span>
                        <h3 className="font-display text-4xl md:text-5xl text-nura-moss mb-6 leading-tight">
                            {phase.title}
                        </h3>
                        <p className="text-nura-moss/60 text-lg leading-relaxed mb-10 max-w-md">
                            {phase.desc}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            {phase.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="px-4 py-2 rounded-full border border-nura-moss/10 text-nura-moss/60 text-sm font-medium hover:border-nura-moss/30 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
