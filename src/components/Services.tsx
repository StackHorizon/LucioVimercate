import React from 'react';
          import { Key, Shield, Lock, CheckCircle } from 'lucide-react';

          const services = [
            {
              icon: Key,
              title: "Apertura Porte",
              description: "Servizio professionale di apertura porte senza danneggiamenti.",
              features: [
                "Intervento rapido 24/7",
                "Tecniche non invasive",
                "Sblocco porte blindate"
              ]
            },
            {
              icon: Lock,
              title: "Sostituzione Serrature",
              description: "Installazione e sostituzione di serrature certificate di alta sicurezza. Migliora la protezione della tua casa o ufficio.",
              features: [
                "Serrature europee e cilindri",
                "Upgrade sicurezza",
                "Consulenza personalizzata"
              ]
            },
            {
              icon: Shield,
              title: "Serrande e Tapparelle",
              description: "Riparazione, manutenzione e installazione di serrande e tapparelle. Ripristiniamo la funzionalità e la sicurezza dei vostri avvolgibili.",
              features: [
                "Motorizzazione",
                "Riparazione urgente",
                "Installazione nuovi modelli"
              ]
            }
          ];

          const Services = () => (
            <section
              id="servizi"
              className="relative mx-auto my-8 max-w-7xl px-4"
            >
              {/* Sfondo glass con gradienti */}
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-amber-100/60 via-white/70 to-slate-200/60 dark:from-slate-900/80 dark:via-slate-950/70 dark:to-slate-900/80 backdrop-blur-2xl border border-amber-200/30 dark:border-slate-700/40 shadow-2xl" />
                {/* Decorazioni */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-slate-400/20 to-amber-300/10 rounded-full blur-2xl pointer-events-none" />
              </div>
              <div className="relative z-10 py-14 md:py-24">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    I Nostri <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Servizi</span>
                  </h2>
                  <p className="text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
                    Soluzioni complete per tutte le vostre esigenze di sicurezza, con la garanzia di un servizio professionale e affidabile.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg p-8 rounded-3xl border border-amber-200/30 dark:border-slate-700/40 shadow-2xl hover:shadow-amber-300/30 transition-all duration-300 relative group"
                    >
                      {/* Badge animato */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow-md border border-white/30 tracking-wide animate-pulse">
                        Professionale
                      </div>
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl mb-6 mx-auto shadow-lg border border-amber-300/30 ring-2 ring-amber-200/20">
                        <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 text-base font-medium">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5 drop-shadow" />
                            <span className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );

          export default Services;