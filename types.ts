import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Stat {
  value: string;
  label: string;
}

// Global declaration for GSAP since we load it via CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}