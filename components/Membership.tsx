
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Core",
        price: "$49",
        desc: "Essential tracking for the mindful optimizer.",
        features: ["Daily Readiness Score", "Basic DNA Panel", "Nutrition Guides", "Sleep Tracking"]
    },
    {
        name: "Vitality",
        price: "$129",
        desc: "Full bio-stack integration for serious longevity.",
        features: ["Everything in Core", "Quarterly Blood Panels", "Real-time CGM Integration", "1:1 Health Coach", "Supplement Stack"],
        popular: true
    },
    {
        name: "Legacy",
        price: "Custom",
        desc: "White-glove service for total biological mastery.",
        features: ["Full Genome Sequencing", "Whole Body MRI", "Monthly MD Consults", "Custom Compound Pharmacy", "24/7 Priority Support"]
    }
];

export const Membership: React.FC = () => {
    return (
        <section id="membership" className="py-32 px-6 bg-nura-cream">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl text-nura-moss mb-6">Join the Circle</h2>
                    <p className="text-lg text-nura-moss/60 max-w-xl mx-auto">Invest in your biological asset. Select the tier that matches your ambition.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div 
                            key={i} 
                            className={`
                                relative p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2
                                ${plan.popular 
                                    ? 'bg-nura-moss text-white border-nura-moss shadow-2xl scale-105 z-10' 
                                    : 'bg-white text-nura-moss border-nura-moss/10 hover:border-nura-moss/30'
                                }
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nura-clay text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            
                            <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-semibold">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-sm opacity-60">/month</span>}
                            </div>
                            <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? 'text-white/70' : 'text-nura-moss/60'}`}>
                                {plan.desc}
                            </p>
                            
                            <div className="space-y-4 mb-10">
                                {plan.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-nura-moss/5'}`}>
                                            <Check size={12} className={plan.popular ? 'text-white' : 'text-nura-moss'} />
                                        </div>
                                        <span className="text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-medium transition-colors ${
                                plan.popular 
                                    ? 'bg-white text-nura-moss hover:bg-nura-cream' 
                                    : 'bg-nura-moss text-white hover:bg-nura-mossLight'
                            }`}>
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
