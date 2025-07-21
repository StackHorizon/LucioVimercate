import React from 'react';
import {Link} from 'react-router-dom';
import {Hammer, Phone, MapPin, Clock} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative min-h-[200px] overflow-hidden text-slate-900 dark:text-white">
            {/* Sfondo glass con gradienti */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="w-full h-full rounded-3xl bg-gradient-to-br from-amber-100/60 via-white/70 to-slate-200/60 dark:from-slate-900/80 dark:via-slate-950/70 dark:to-slate-900/80 backdrop-blur-2xl border border-amber-200/30 dark:border-slate-700/40 shadow-2xl"/>
                {/* Decorazioni */}
                <div
                    className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
                <div
                    className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-slate-400/20 to-amber-300/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-14">
                    {/* Company info */}
                    <div
                        className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative">
                        <div
                            className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow-md border border-white/30 tracking-wide animate-pulse">
                            25+ anni
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div
                                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-xl shadow-lg border-2 border-amber-300/40 ring-2 ring-amber-200/30">
                                <Hammer className="h-6 w-6 text-white drop-shadow"/>
                            </div>
                            <span
                                className="text-2xl font-extrabold bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent drop-shadow tracking-tight">
                                                                    Fabbro Luciano
                                                                </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4 font-medium">
                            Il tuo fabbro di fiducia da oltre 25 anni.<br/>
                            Professionalità, rapidità e qualità garantita.
                        </p>
                        <div className="flex items-center space-x-2 text-amber-500 font-bold">
                            <Phone className="h-5 w-5"/>
                            <span>329 328 5783</span>
                        </div>
                    </div>
                    {/* Legal Links */}
                    <div
                        className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Informazioni Legali
                        </h3>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-medium">
                            <li>
                                <Link to="/privacy-policy"
                                      className="hover:text-amber-500 transition-colors hover:drop-shadow-glow">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service"
                                      className="hover:text-amber-500 transition-colors hover:drop-shadow-glow">
                                    Termini di Servizio
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy"
                                      className="hover:text-amber-500 transition-colors hover:drop-shadow-glow">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li className="pt-2 text-slate-500 dark:text-slate-400 text-sm">P.IVA: 09082580961</li>
                        </ul>
                    </div>
                    {/* Contact & Hours */}
                    <div
                        className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Contatti & Orari
                        </h3>
                        <div className="space-y-3 text-slate-700 dark:text-slate-300 font-medium">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-5 w-5"/>
                                <span>+39 329 328 5783</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5"/>
                                <span>Vimercate e dintorni,</span>
                                <span>Monza e Brianza</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Clock className="h-5 w-5 mt-1"/>
                                <div>
                                    <p>Dal lunedì al venerdì: 7:30 - 20:00</p>
                                    <p>Sabato: 8:00 - 19:00</p>
                                    <p>Domenica: Chiuso</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5"/>
                                <p>Sede legale: Via Gran Paradiso, 4, Brugherio, MB, 20861</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom section */}
                <div className="border-t border-amber-200/30 dark:border-slate-700/40 py-6 mt-2">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Fabbro Luciano Vimercate. Tutti i diritti riservati.
                            <p>
                                Sviluppato da{' '}
                                <a
                                    href="https://stackhorizon.it"
                                    target="_blank"
                                    className="text-amber-500 hover:text-amber-400 hover:drop-shadow-glow transition-colors font-bold"
                                    rel="noopener noreferrer"
                                >
                                    StackHorizon
                                </a>
                            </p>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right space-x-2">
                            <a href="/"
                               className="hover:text-amber-500 hover:drop-shadow-glow transition-colors font-bold">
                                Home
                            </a>
                            |
                            <Link to="/privacy-policy"
                                  className="hover:text-amber-500 hover:drop-shadow-glow transition-colors font-bold">
                                Privacy
                            </Link>
                            |
                            <Link to="/terms-of-service"
                                  className="hover:text-amber-500 hover:drop-shadow-glow transition-colors font-bold">
                                Termini
                            </Link>
                            |
                            <Link to="/cookie-policy"
                                  className="hover:text-amber-500 hover:drop-shadow-glow transition-colors font-bold">
                                Cookie
                            </Link>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right">
                            P.IVA: 09082580961
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;