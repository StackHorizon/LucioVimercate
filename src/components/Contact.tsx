
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contattaci</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Siamo sempre disponibili per rispondere alle vostre esigenze.   
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Telefono</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-1">Cellulare: +39 329 328 5783</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sede legale</h3>
                <p className="text-slate-600 dark:text-slate-300">Indirizzo</p>
                <p className="text-slate-600 dark:text-slate-300">CAP, città</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Orari</h3>
                <p className="text-slate-600 dark:text-slate-300">Lun-Ven: 7:00 - 19:00</p>
                <p className="text-slate-600 dark:text-slate-300">Sab: 8:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Richiedi un Preventivo</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                  Nome e Cognome
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Il tuo nome completo"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                  Telefono
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Il tuo numero di telefono"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="La tua email"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                  Descrivi il tuo problema o richiesta
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Descrivici di cosa hai bisogno..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
