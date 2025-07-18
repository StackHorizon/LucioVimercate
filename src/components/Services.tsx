
import React from 'react';
import { Key, Shield, Home, Wrench, Lock, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Apertura Porte",
      description: "Servizio professionale di apertura porte senza danneggiamenti. ",
      features: [ 
      ]
    },
    {
      icon: Lock,
      title: "Sostituzione Serrature",
      description: "Installazione e sostituzione di serrature certificate di alta sicurezza. Migliora la protezione della tua casa o ufficio.",
      features: [ 
      ]
    }, 
    {
      icon: Shield,
      title: "Serrande e Tapparelle",
      description: "Riparazione, manutenzione e installazione di serrande e tapparelle. Ripristiniamo la funzionalità e la sicurezza dei vostri avvolgibili.",
      features: [ 
      ]
    }, 
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl mb-6 mx-auto shadow-lg">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
