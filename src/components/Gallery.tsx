
import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "imm1.jpeg", 
    },
    {
      src: "imm2.jpeg", 
    },
    {
      src: "imm3.jpeg", 
    },
    {
      src: "imm4.jpeg", 
    },
    {
      src: "imm5.jpeg", 
    },
    {
      src: "imm6.jpeg", 
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
              className="group relative overflow-hidden rounded-xl shadow-lg   dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <img 
                src={image.src} 
                className="w-full h-64 object-cover  "
              /> 
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default Gallery;
