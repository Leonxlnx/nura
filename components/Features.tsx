
import React, { useEffect, useRef } from 'react';
import { Dna, Brain, HeartPulse, Leaf, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Genomic Insight",
    desc: "Deep DNA analysis tailored for longevity markers.",
    icon: Dna,
    color: "bg-slate-50",
    colSpan: "md:col-span-2",
  },
  {
    title: "Neural Sync",
    desc: "Cognitive load balancing for peak mental state.",
    icon: Brain,
    color: "bg-orange-50/50",
    colSpan: "md:col-span-1",
  },
  {
    title: "Cardio Metamorphosis",
    desc: "Real-time heart variability adaptation engine.",
    icon: HeartPulse,
    color: "bg-stone-50",
    colSpan: "md:col-span-1",
  },
  {
    title: "Holistic Nutrition",
    desc: "AI-driven meal plans based on your gut microbiome.",
    icon: Leaf,
    color: "bg-green-50/50",
    colSpan: "md:col-span-2",
  },
];

// Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -3; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 3;

        window.gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        window.gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            className={`transform-gpu perspective-1000 ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = window.gsap.context(() => {
      window.ScrollTrigger.batch(".feature-wrapper", {
        onEnter: (batch: any) => {
          window.gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out"
          });
        },
        start: "top 85%", // Trigger slightly earlier
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // REMOVED NEGATIVE MARGIN (-mt-12) to ensure Hero is fully visible
    <section id="features" ref={sectionRef} className="py-32 px-4 md:px-6 bg-white rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] relative z-20 mt-0">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20 pt-0">
          <h2 className="font-display font-medium text-4xl md:text-6xl text-nura-moss mb-8 leading-tight">
            Intelligence meeting <br/>
            <span className="text-nura-clay italic font-serif">intuition.</span>
          </h2>
          <p className="text-nura-moss/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            We don't just track data. We interpret the subtle language of your body to provide actionable, life-extending insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className={`feature-wrapper opacity-0 translate-y-20 ${feature.colSpan}`}>
                <TiltCard className={`h-full group relative p-10 rounded-[2rem] ${feature.color} flex flex-col justify-between overflow-hidden border border-nura-moss/5 transition-all duration-300 hover:shadow-xl`}>
                    
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 translate-z-10">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-nura-moss mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <feature.icon size={26} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display font-medium text-3xl text-nura-moss mb-4 tracking-tight">
                        {feature.title}
                        </h3>
                        <p className="text-nura-moss/70 leading-relaxed text-lg">
                        {feature.desc}
                        </p>
                    </div>

                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none transform rotate-[-12deg]">
                        <feature.icon size={240} />
                    </div>
                </TiltCard>
            </div>
          ))}
        </div>
        
        {/* Secondary Features Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="feature-wrapper opacity-0 translate-y-20">
                <div className="p-10 rounded-[2rem] bg-nura-moss text-white flex items-center justify-between group cursor-pointer hover:bg-nura-mossLight transition-colors duration-500">
                    <div>
                        <h3 className="font-display text-2xl font-medium mb-2">Data Security</h3>
                        <p className="text-white/60">HIPAA Compliant & End-to-End Encrypted.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-nura-moss transition-all duration-300">
                        <ShieldCheck size={24} strokeWidth={1.5} />
                    </div>
                </div>
             </div>
             
             <div className="feature-wrapper opacity-0 translate-y-20">
                <div className="p-10 rounded-[2rem] bg-white border border-nura-moss/10 flex items-center justify-between group cursor-pointer hover:border-nura-clay/50 transition-colors duration-500">
                    <div>
                        <h3 className="font-display text-2xl font-medium text-nura-moss mb-2">Instant Response</h3>
                        <p className="text-nura-moss/60">24/7 Access to AI Health Assistant.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-nura-clay/10 text-nura-clay flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap size={24} strokeWidth={1.5} />
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};
