
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contattaci</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Siamo sempre disponibili per rispondere alle vostre esigenze. 
            Contattateci per un preventivo gratuito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Telefono</h3>
                <p className="text-slate-600 mb-1">Cellulare: +39 345 123 4567</p>
                <p className="text-slate-600">Fisso: +39 02 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">info@fabbrorossi.com</p>
                <p className="text-slate-600">emergenze@fabbrorossi.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Indirizzo</h3>
                <p className="text-slate-600">Via Roma 123</p>
                <p className="text-slate-600">20100 Milano (MI)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Orari</h3>
                <p className="text-slate-600">Lun-Ven: 8:00 - 18:00</p>
                <p className="text-slate-600">Sab: 8:00 - 12:00</p>
                <p className="text-amber-600 font-semibold">Emergenze: 24/7</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Richiedi un Preventivo</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Nome e Cognome
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Il tuo nome completo"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Telefono
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Il tuo numero di telefono"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="La tua email"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Descrivi il tuo problema o richiesta
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Descrivici di cosa hai bisogno..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
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
