
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#F25435] to-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#F25435] to-red-600 bg-clip-text text-transparent">
              Nearz-AI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#F25435] transition-colors">Home</button>
            <button onClick={() => scrollToSection('app-showcase')} className="text-gray-700 hover:text-[#F25435] transition-colors">App</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#F25435] transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-[#F25435] transition-colors">Partners</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#F25435] transition-colors">Contact</button>
            <Button className="bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              BLOGS
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
