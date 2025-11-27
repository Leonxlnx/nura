
import React, { useEffect, useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const navItems = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Science', href: '#features' },
  { label: 'Method', href: '#how-it-works' },
  { label: 'Membership', href: '#membership' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}
      >
        <div 
          className={`
            relative w-full max-w-5xl transition-all duration-500 rounded-full px-6 py-4 flex items-center justify-between
            ${isScrolled 
              ? 'bg-nura-moss/90 backdrop-blur-xl shadow-2xl border border-white/10 translate-y-0' 
              : 'bg-transparent border border-transparent translate-y-2'
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white text-nura-moss transition-transform group-hover:scale-110`}>
              <Activity size={16} />
            </div>
            <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              nura
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-[0.15em] hover:text-nura-clay transition-colors ${isScrolled ? 'text-white/80' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className={`hidden md:block px-5 py-2 rounded-full font-medium text-xs uppercase tracking-wider transition-all hover:scale-105 ${
              isScrolled 
                ? 'bg-white text-nura-moss hover:bg-nura-clay hover:text-white' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-nura-moss'
            }`}>
              Join Waitlist
            </button>
            
            <button
              className={`md:hidden p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-nura-moss text-nura-cream flex flex-col items-center justify-center gap-8 animate-in slide-in-from-top-10 fade-in duration-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-3xl font-display font-light hover:text-nura-clay transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <button className="mt-8 px-8 py-4 bg-nura-clay text-white rounded-full font-medium text-lg">
            Get Early Access
          </button>
        </div>
      )}
    </>
  );
};
