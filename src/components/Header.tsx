
import React, { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
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
    <header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white sticky top-0 z-50 shadow-lg border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-amber-500 dark:text-amber-400" />
            <span className="text-xl font-bold">Fabbro Luciano</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('servizi')} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Servizi
            </button>
            <button onClick={() => scrollToSection('galleria')} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Galleria
            </button>
            <button onClick={() => scrollToSection('contatti')} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Contatti
            </button>
            <ThemeToggle />
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-2 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('servizi')} className="text-left hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2">
                Servizi
              </button>
              <button onClick={() => scrollToSection('galleria')} className="text-left hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2">
                Galleria
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-left hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2">
                Contatti
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
