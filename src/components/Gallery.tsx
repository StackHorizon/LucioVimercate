
import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      alt: "Cancello in ferro battuto",
      title: "Cancelli Artistici"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop",
      alt: "Serratura di sicurezza",
      title: "Serrature di Sicurezza"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      alt: "Inferriate decorative",
      title: "Inferriate su Misura"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop",
      alt: "Porta blindata",
      title: "Porte Blindate"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      alt: "Ringhiere in ferro",
      title: "Ringhiere Artistiche"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop",
      alt: "Cancello automatico",
      title: "Automazioni"
    }
  ];

  return (
    <section id="galleria" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            I Nostri Lavori
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Alcuni esempi dei nostri interventi più rappresentativi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Hai un progetto in mente?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contattaci per un preventivo personalizzato e gratuito
            </p>
            <a 
              href="tel:3293285783" 
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <span>Richiedi Preventivo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
