
import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-slate-900 dark:bg-slate-950 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Fabbro  Luciano 
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto">
           Il tuo fabbro di fiducia da oltre 25 anni. Professionalità, rapidità e qualità garantita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:3293285783">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Chiama Ora: 329 328 5783</span>
              </button>
            </a>
            
            <button 
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Scopri i Servizi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
