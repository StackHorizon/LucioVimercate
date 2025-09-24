import React from 'react';

const images = [
  { src: "imm1.jpeg", title: "" },
  { src: "imm2.jpeg", title: "" },
  { src: "imm3.jpeg", title: "" },
  { src: "imm4.jpeg", title: "" },
  { src: "imm5.jpeg", title: "" },
  { src: "imm6.jpeg", title: "" }
];

const Gallery = () => (
  <section
    id="galleria"
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
        <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          I Nostri <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Lavori</span>
        </h2>
        <p className="text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto font-medium drop-shadow">
          Alcuni esempi dei nostri interventi più rappresentativi
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg border border-amber-200/30 dark:border-slate-700/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-amber-300/30"
          >
            {/* Badge animato */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow-md border border-white/30 tracking-wide animate-pulse z-10">
              Lavoro
            </div>
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay titolo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="w-full text-center text-lg font-bold text-white mb-6 drop-shadow bg-gradient-to-r from-amber-500/80 to-orange-600/80 bg-clip-text text-transparent">
                {image.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;