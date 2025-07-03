
import React from 'react';
import { Key, Shield, Home, Wrench, Lock, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Apertura Porte",
      description: "Servizio di apertura porte h24 senza danneggiare la serratura"
    },
    {
      icon: Lock,
      title: "Sostituzione Serrature",
      description: "Installazione e sostituzione di serrature di sicurezza"
    },
    {
      icon: Shield,
      title: "Blindature",
      description: "Porte blindate e sistemi di sicurezza avanzati"
    },
    {
      icon: Home,
      title: "Cancelli e Inferriate",
      description: "Realizzazione su misura di cancelli, inferriate e recinzioni"
    },
    {
      icon: Wrench,
      title: "Riparazioni",
      description: "Riparazione di serrature, maniglie e meccanismi di chiusura"
    },
    {
      icon: Settings,
      title: "Manutenzione",
      description: "Servizi di manutenzione preventiva per sistemi di sicurezza"
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Offriamo soluzioni complete per tutte le vostre esigenze di fabbro con 
            professionalità e rapidità di intervento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto Intervento 24/7</h3>
          <p className="text-slate-300 mb-6">
            Emergenze? Ti raggiungiamo ovunque nella provincia entro 30 minuti
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
            Chiama per Emergenze: 345 123 4567
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
