import React from 'react';
import { Activity, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nura-charcoal text-nura-cream pt-24 pb-12 px-6 rounded-t-[3rem] -mt-12 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-nura-clay text-white rounded-full flex items-center justify-center">
                <Activity size={20} />
              </div>
              <span className="font-display font-bold text-3xl tracking-tight">nura</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Pioneering the future of personalized health intelligence. 
              Join us in the pursuit of a longer, richer life.
            </p>
            <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-nura-charcoal transition-all">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full lg:w-auto">
            <div>
              <h4 className="font-display font-medium text-lg mb-6">Platform</h4>
              <ul className="space-y-4 text-white/60">
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Methodology</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Technology</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Research</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-medium text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-white/60">
                <li className="hover:text-nura-clay cursor-pointer transition-colors">About</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Press</li>
                <li className="hover:text-nura-clay cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
                <h4 className="font-display font-medium text-lg mb-6">Stay Updated</h4>
                <div className="flex flex-col gap-3">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-nura-clay transition-colors"
                    />
                    <button className="bg-nura-clay text-white px-4 py-3 rounded-lg font-medium hover:bg-nura-clayHover transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; 2024 Nura Health Inc. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};