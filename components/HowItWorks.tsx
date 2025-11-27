
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: "01",
    label: "Discovery",
    title: "Biological Mapping",
    desc: "We digitize your internal landscape using clinical-grade genomics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract Dark Liquid
    color: "bg-[#1f2923]", // Very Dark Green
    accent: "text-emerald-400"
  },
  {
    id: "02",
    label: "Synthesis",
    title: "Neural Correlation",
    desc: "AI correlates 150+ biomarkers to find your leverage points.",
    image: "https://images.unsplash.com/photo-1620641788421-7f1c918e7799?q=80&w=2600&auto=format&fit=crop", // Abstract Orange/Clay Mesh
    color: "bg-[#2a1b15]", // Very Dark Clay
    accent: "text-nura-clay"
  },
  {
    id: "03",
    label: "Action",
    title: "Daily Calibration",
    desc: "A dynamic protocol that adapts to your body's real-time needs.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2400&auto=format&fit=crop", // Abstract Light/Fluid
    color: "bg-[#252525]", // Dark Grey
    accent: "text-white"
  }
];

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" ref={containerRef} className="py-24 bg-nura-cream">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-20 pl-4 md:pl-10 border-l-2 border-nura-moss/20">
          <h2 className="font-display text-4xl md:text-5xl text-nura-moss mb-4">The Nura Protocol</h2>
          <p className="text-nura-moss/60 max-w-md">A three-stage journey from data to dominance.</p>
        </div>

        <div className="relative">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="sticky top-32 mb-12 last:mb-0"
              style={{ zIndex: i + 1 }}
            >
              <div 
                className={`
                  relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 
                  min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center gap-12
                  ${step.color} text-white shadow-2xl border border-white/5
                `}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:scale-105 transition-transform duration-[2s]" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full md:w-1/2">
                   <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 font-mono text-lg">
                            {step.id}
                        </span>
                        <span className={`uppercase tracking-widest text-sm font-bold ${step.accent}`}>
                            {step.label}
                        </span>
                   </div>
                   
                   <h3 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
                       {step.title}
                   </h3>
                   
                   <p className="text-white/70 text-xl leading-relaxed max-w-md mb-10">
                       {step.desc}
                   </p>

                   <button className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                       <span className="text-sm uppercase tracking-wider border-b border-white/30 pb-1 group-hover:border-white transition-colors">Learn more</span>
                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

                {/* Visual Decoration Right Side */}
                <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                     {/* Glassmorphism Card */}
                     <div className="w-full max-w-sm aspect-square bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="font-mono text-xs text-white/40">LIVE DATA</div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-current w-3/4 opacity-50"></div>
                            </div>
                             <div className="h-1 w-2/3 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-current w-1/2 opacity-30"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-light">98<span className="text-sm">%</span></div>
                            <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Optimization Score</div>
                        </div>
                     </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
