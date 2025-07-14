
import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contattaci</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Telefono</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-1">+39 329 328 5783</p> 
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zona di Intervento</h3>
                  <p className="text-slate-600 dark:text-slate-300">Vimercate e dintorni</p>
                  <p className="text-slate-600 dark:text-slate-300">Monza e Brianza</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Orari</h3>
                  <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-300">Dal lunedì al venerdì: 7:30 - 20:00</p>
                    <p className="text-slate-600 dark:text-slate-300">Sabato: 8:00 - 19:00</p>
                    <p className="text-slate-600 dark:text-slate-300">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Perché sceglierci?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">Oltre 25 anni di esperienza nel settore</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">Lavori garantiti e certificati</p>
              </div> 
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">Puntualità e professionalità</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">Materiali di prima qualità</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-800/30">
              <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Chiamaci subito!</p>
              <p className="text-slate-600 dark:text-slate-300">La tua sicurezza è la nostra priorità</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
