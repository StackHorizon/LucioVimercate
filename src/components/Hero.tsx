
import React from 'react';
import { Phone, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fabbro <span className="text-amber-400 dark:text-amber-300">Luciano</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 dark:text-slate-200">
            Interventi su serrature, cilindri, casseforti, serrande e tapparelle. Affidabilità, competenza e attenzione ai dettagli per soluzioni durature e su misura.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-amber-400 dark:text-amber-300" />
              <span className="text-lg">Intervento Rapido</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-amber-400 dark:text-amber-300" />
              <span className="text-lg">25+ Anni di Esperienza</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-slate-900 dark:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Chiama Ora: 329 328 5783
            </button>
            <button 
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-400 dark:border-amber-300 text-amber-400 dark:text-amber-300 hover:bg-amber-400 dark:hover:bg-amber-300 hover:text-slate-900 dark:hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
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
