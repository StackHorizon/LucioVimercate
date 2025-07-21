
import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-amber-500 rounded-lg">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Fabbro Luciano</span> 
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Il tuo fabbro di fiducia da oltre 25 anni. 
              Professionalità, rapidità e qualità garantita.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">329 328 5783</span>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informazioni Legali</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-amber-400 transition-colors">Termini di Servizio</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy</Link></li>
              <li className="pt-2 text-slate-400 text-sm">P.IVA: 09082580961</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti & Orari</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+39 329 328 5783</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Vimercate e dintorni,</span>
                <span>Monza e Brianza</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1" />
                <div>
                  <p>Dal lunedì al venerdì: 7:30 - 20:00</p>
                  <p>Sabato: 8:00 - 19:00</p>
                  <p>Domenica: Chiuso</p> 
                </div>
              </div>
              <div className="flex items-start space-x-2">
                 <MapPin className="h-4 w-4" />
                  <p>Sede legale: Via Gran Paradiso, 4, Brugherio, MB, 20861</p> 
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © { new Date().getFullYear()} Fabbro Luciano Vimercate. Tutti i diritti riservati.
              <p>Sviluppato da <a href='https://stackhorizon.it' target='_blank' className="text-amber-400 hover:text-amber-300">StackHorizon</a></p>
            </div>
            <div className="text-slate-400 text-sm">
              <a href="/" className="hover:text-amber-400 transition-colors">Home</a> | 
              <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy</Link> | 
              <Link to="/terms-of-service" className="hover:text-amber-400 transition-colors">Termini</Link> | 
              <Link to="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie</Link>
            </div>
            <div className="text-slate-400 text-sm">
              P.IVA: 09082580961
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
