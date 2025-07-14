
import React from 'react';
import { Key, Shield, Home, Wrench, Lock, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Apertura Porte",
      description: "Servizio di apertura porte 24/7 senza danni alla serratura" ,
      features: []
    },
    {
      icon: Lock,
      title: "Sostituzione Serrature",
      description: "Installazione di serrature certificate di alta sicurezza" ,
      features: []
    },
    {
      icon: Shield,
      title: "Porte Blindate",
      description: "Porte blindate classe 3-4 con certificazione antieffrazione" ,
      features: []
    },
    {
      icon: Home,
      title: "Cancelli e Inferriate",
      description: "Realizzazione su misura di cancelli e inferriate decorative" ,
      features: []
    },
    {
      icon: Wrench,
      title: "Riparazioni",
      description: "Riparazione di serrature, maniglie e meccanismi" ,
      features: []
    },
    {
      icon: Settings,
      title: "Manutenzione",
      description: "Servizi di manutenzione preventiva per sistemi di sicurezza" ,
      features: []
    }
  ];

  return (
    <section id="servizi" className="py-24 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            I Nostri <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Servizi</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluzioni complete per tutte le vostre esigenze di sicurezza, con la garanzia di un servizio professionale e affidabile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-6 mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
 

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hai bisogno di un intervento urgente?
            </h3>
            <p className="text-amber-100 mb-8 text-lg">
              Contattaci. Rispondiamo in pochi minuti!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3293285783" 
                className="inline-flex items-center space-x-2 bg-white text-amber-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <span>Chiama Ora: 329 328 5783</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button 
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <span>Scopri di Più</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
