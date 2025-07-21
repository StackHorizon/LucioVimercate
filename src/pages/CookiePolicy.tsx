import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Phone, Building, MapPin, IdCard } from 'lucide-react';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-500">
      
      {/* Header */}
      <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white sticky top-0 z-50 shadow-lg border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Fabbro Luciano
                </span> 
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="/" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                ← Torna alla Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Informazioni sui cookie utilizzati sul nostro sito web e su come gestiamo i tuoi dati di navigazione
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <span className="text-sm text-amber-700 dark:text-amber-300 font-semibold">
                Ultimo aggiornamento: 21 luglio 2025
              </span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto">
            
            {/* Cosa sono i Cookie */}
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🍪</span>
                  </span>
                  Cosa sono i Cookie
                </h2>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p className="leading-relaxed">
                    I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                    Permettono al sito di <strong>ricordare le tue preferenze</strong> e migliorare la tua esperienza di navigazione.
                  </p>
                  <p className="leading-relaxed">
                    Il nostro sito utilizza esclusivamente <strong>cookie tecnici necessari</strong> per il corretto funzionamento 
                    e <strong>cookie di terze parti</strong> per servizi esterni essenziali.
                  </p>
                </div>
              </div>
            </section>

            {/* Tipi di Cookie */}
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </span>
                  Tipi di Cookie Utilizzati
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">
                      🔧 Cookie Tecnici (Sempre Attivi)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Questi cookie sono <strong>essenziali per il funzionamento del sito</strong> e non possono essere disabilitati. 
                      Includono cookie per la gestione delle sessioni, la sicurezza e l'accessibilità.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                        <span className="text-2xl mr-3">🔤</span>
                        Google Fonts
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        <strong>Scopo:</strong> Caricamento dei caratteri tipografici<br />
                        <strong>Durata:</strong> Sessione di navigazione<br />
                        <strong>Tipo:</strong> Cookie tecnico di terze parti
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                        <span className="text-2xl mr-3">🎨</span>
                        Lucide Icons
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        <strong>Scopo:</strong> Visualizzazione delle icone<br />
                        <strong>Durata:</strong> Sessione di navigazione<br />
                        <strong>Tipo:</strong> Cookie tecnico di terze parti
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie di Terze Parti */}
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🌐</span>
                  </span>
                  Cookie di Terze Parti
                </h2>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-4 flex items-center">
                    <span className="text-2xl mr-3">📈</span>
                    Google Search Console
                  </h3>
                  <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p className="leading-relaxed">
                      <strong>Finalità:</strong> Raccolta di statistiche anonime e aggregate per il miglioramento del sito<br />
                      <strong>Durata:</strong> Variabile (gestita da Google)<br />
                      <strong>Privacy:</strong> Nessun dato personale identificabile viene raccolto
                    </p>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-amber-200 dark:border-amber-700">
                      <p className="text-sm leading-relaxed">
                        Per maggiori informazioni sui cookie di Google, consulta la 
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline font-semibold ml-1">
                          Privacy Policy di Google
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gestione Cookie */}
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚙️</span>
                  </span>
                  Come Gestire i Cookie
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">
                      🌐 Impostazioni del Browser
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      Puoi gestire o eliminare i cookie attraverso le impostazioni del tuo browser. 
                      Ecco le guide per i browser più comuni:
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Chrome</h4>
                      <p className="text-purple-700 dark:text-purple-400 text-sm">
                        Impostazioni → Privacy e sicurezza → Cookie
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Firefox</h4>
                      <p className="text-purple-700 dark:text-purple-400 text-sm">
                        Opzioni → Privacy e sicurezza → Cookie
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Safari</h4>
                      <p className="text-purple-700 dark:text-purple-400 text-sm">
                        Preferenze → Privacy → Cookie
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Edge</h4>
                      <p className="text-purple-700 dark:text-purple-400 text-sm">
                        Impostazioni → Privacy e servizi → Cookie
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-3">⚠️ Importante</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Disabilitando i cookie tecnici, alcune funzionalità del sito potrebbero non funzionare correttamente. 
                      I cookie di terze parti possono essere disabilitati senza compromettere l'esperienza di navigazione di base.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contatti */}
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </span>
                  Contatti per Cookie Policy
                </h2>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
                      Per domande sui cookie o sulla privacy
                    </h3>
                    <div className="inline-block bg-white dark:bg-slate-700 px-6 py-4 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-lg">
                      <div className="flex items-center justify-center space-x-3">
                        <Phone className="h-8 w-8 text-emerald-600" />
                        <div className="text-left">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Contattaci:</div>
                          <a href="tel:3293285783" className="text-xl font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                            329 328 5783
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Building className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Fabbro Luciano Vimercate</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                        <div>
                          <div className="font-semibold text-slate-800 dark:text-slate-200">Sede:</div>
                          <div className="text-slate-600 dark:text-slate-400">Via Gran Paradiso, 4<br />Brugherio (MB) 20861</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <IdCard className="h-6 w-6 text-emerald-600" />
                        <div>
                          <div className="font-semibold text-slate-800 dark:text-slate-200">P.IVA:</div>
                          <div className="text-slate-600 dark:text-slate-400">09082580961</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Per maggiori informazioni sui cookie, richieste di cancellazione dati o chiarimenti sulla privacy, 
                        contattaci durante gli orari di servizio. La tua privacy è importante per noi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
