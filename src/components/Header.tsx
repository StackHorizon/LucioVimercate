
import React, { useState } from 'react';
import { Menu, X, Hammer, Phone, Clock } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white sticky top-0 z-50 shadow-lg border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto px-4">
         
        
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Fabbro Luciano
              </span>
             </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="relative hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servizi')} 
              className="relative hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
            >
              Servizi
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button 
              onClick={() => scrollToSection('galleria')} 
              className="relative hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
            >
              Galleria
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contatti')} 
              className="relative hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
            >
              Contatti
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <a 
              href="tel:3293285783" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>329 328 5783</span>
            </a>
            
          </nav>

          <div className="flex items-center space-x-3 md:hidden">
            
            <button 
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50 shadow-lg">
            <nav className="flex flex-col space-y-1 p-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('servizi')} 
                className="text-left hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium"
              >
                Servizi
              </button>
              <button 
                onClick={() => scrollToSection('galleria')} 
                className="text-left hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium"
              >
                Galleria
              </button>
              <button 
                onClick={() => scrollToSection('contatti')} 
                className="text-left hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium"
              >
                Contatti
              </button>
              <a 
                href="tel:3293285783" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 px-4 rounded-lg font-medium mt-3 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span>329 328 5783</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
