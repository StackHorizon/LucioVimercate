import React from 'react';
            import { Phone } from 'lucide-react';

            const Hero = () => {
              return (
                <section
                  id="home"
                  className="relative mx-auto my-8 max-w-6xl px-4"
                >
                  {/* Sfondo glass con gradienti */}
                  <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-amber-100/60 via-white/70 to-slate-200/60 dark:from-slate-900/80 dark:via-slate-950/70 dark:to-slate-900/80 backdrop-blur-2xl border border-amber-200/30 dark:border-slate-700/40 shadow-2xl" />
                    {/* Decorazioni */}
                    <div className="absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-slate-400/20 to-amber-300/10 rounded-full blur-2xl pointer-events-none" />
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 md:py-20">
                    {/* Colonna testo */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <div className="inline-flex items-center mb-6 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-amber-200 dark:border-slate-700 shadow">
                        <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
                          Fabbro Luciano
                        </span>
                        <span className="ml-2 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow border border-white/30">
                          25+ anni
                        </span>
                      </div>
                      <p className="text-base sm:text-lg mb-8 text-slate-700 dark:text-slate-200 font-medium">
                        Il tuo fabbro di fiducia da oltre 25 anni.<br />
                        Professionalità, rapidità e qualità garantita.
                      </p>
                    </div>
                    {/* Colonna CTA */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                      <a href="tel:3293285783" className="w-full">
                        <button
                          className="w-full bg-amber-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-base md:text-lg"
                        >
                          <Phone className="h-5 w-5" />
                          <span>Chiama Ora: 329 328 5783</span>
                        </button>
                      </a>
                      <button
                        onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full border border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 rounded-2xl transition-colors shadow bg-white/80 dark:bg-slate-900/40 text-base md:text-lg"
                      >
                        Scopri i Servizi
                      </button>
                    </div>
                  </div>
                </section>
              );
            };

            export default Hero;