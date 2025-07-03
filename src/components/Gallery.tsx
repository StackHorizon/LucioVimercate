
import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
      alt: "Cancello in ferro battuto",
      title: "Cancelli Artistici"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=500&h=400&fit=crop",
      alt: "Serratura di sicurezza",
      title: "Serrature di Sicurezza"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
      alt: "Inferriate decorative",
      title: "Inferriate su Misura"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=500&h=400&fit=crop",
      alt: "Porta blindata",
      title: "Porte Blindate"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
      alt: "Ringhiere in ferro",
      title: "Ringhiere Artistiche"
    },
    {
      src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=500&h=400&fit=crop",
      alt: "Cancello automatico",
      title: "Automazioni"
    }
  ];

  return (
    <section id="galleria" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">I Nostri Lavori</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Scopri alcuni dei nostri lavori realizzati con passione e professionalità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default Gallery;
