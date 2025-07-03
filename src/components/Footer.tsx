
import React from 'react';
import { Hammer, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Fabbro Rossi</span>
            </div>
            <p className="text-slate-400 mb-4">
              Il tuo fabbro di fiducia da oltre 25 anni. 
              Professionalità, rapidità e qualità garantita.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">345 123 4567</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servizi Principali</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Apertura Porte</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sostituzione Serrature</li>
              <li className="hover:text-white transition-colors cursor-pointer">Porte Blindate</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cancelli e Inferriate</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pronto Intervento 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+39 345 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@fabbrorossi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Via Roma 123, Milano</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Orari di Lavoro</h3>
            <div className="space-y-2 text-slate-400">
              <p>Lunedì - Venerdì: 8:00 - 18:00</p>
              <p>Sabato: 8:00 - 12:00</p>
              <p>Domenica: Solo emergenze</p>
              <p className="text-amber-400 font-semibold">Pronto Intervento: 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Fabbro Rossi. Tutti i diritti riservati.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-slate-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
              <button className="hover:text-white transition-colors">Termini di Servizio</button>
              <button className="hover:text-white transition-colors">Note Legali</button>
            </div>
          </div>
          
          <div className="mt-4 text-center md:text-right text-xs text-slate-500">
            P.IVA: 12345678901 | Codice Fiscale: RSSMRA80A01F205X
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
