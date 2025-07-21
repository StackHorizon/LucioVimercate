import React from 'react';
            import { Phone, MapPin, Clock } from 'lucide-react';

            const Contact = () => {
                return (
                    <section
                        id="contatti"
                        className="relative mx-auto my-8 max-w-7xl px-4"
                    >
                        {/* Sfondo glass con gradienti */}
                        <div className="absolute inset-0 -z-10">
                            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-amber-100/60 via-white/70 to-slate-200/60 dark:from-slate-900/80 dark:via-slate-950/70 dark:to-slate-900/80 backdrop-blur-2xl border border-amber-200/30 dark:border-slate-700/40 shadow-2xl" />
                            {/* Decorazioni */}
                            <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-amber-400/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-slate-400/20 to-amber-300/10 rounded-full blur-2xl pointer-events-none"></div>
                        </div>
                        <div className="relative z-10 py-14 md:py-24">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                                    Contattaci
                                </h2>
                                <span
                                    className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow-md border border-white/30 tracking-wide animate-pulse">
                                    Risposta rapida
                                </span>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    {/* Card telefono */}
                                    <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300/40 ring-2 ring-amber-200/30">
                                                <Phone className="h-7 w-7 text-white drop-shadow" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Telefono</h3>
                                                <a
                                                    href="tel:3293285783"
                                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white px-5 py-2 rounded-xl font-bold shadow-2xl hover:shadow-amber-300/40 transition-all duration-300 border-2 border-amber-300/40 ring-2 ring-amber-200/30 hover:scale-105"
                                                >
                                                    <Phone className="h-5 w-5 drop-shadow" />
                                                    <span>+39 329 328 5783</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card zona */}
                                    <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300/40 ring-2 ring-amber-200/30">
                                                <MapPin className="h-7 w-7 text-white drop-shadow" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zona di Intervento</h3>
                                                <p className="text-slate-700 dark:text-slate-200">Vimercate e dintorni</p>
                                                <p className="text-slate-700 dark:text-slate-200">Monza e Brianza</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card orari */}
                                    <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300/40 ring-2 ring-amber-200/30">
                                                <Clock className="h-7 w-7 text-white drop-shadow" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Orari</h3>
                                                <div className="space-y-1">
                                                    <p className="text-slate-700 dark:text-slate-200">Lun-Ven: 7:30 - 20:00</p>
                                                    <p className="text-slate-700 dark:text-slate-200">Sabato: 8:00 - 19:00</p>
                                                    <p className="text-slate-700 dark:text-slate-200">Domenica: Chiuso</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Colonna motivazionale */}
                                <div className="bg-gradient-to-br from-amber-50/80 via-white/70 to-slate-100/80 dark:from-amber-900/20 dark:via-slate-900/60 dark:to-slate-800/80 border-2 border-amber-200/40 dark:border-amber-800/30 rounded-3xl p-10 shadow-2xl flex flex-col justify-center items-center relative">
                                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white font-semibold shadow-md border border-white/30 tracking-wide animate-pulse">
                                        25+ anni
                                    </span>
                                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent">
                                        Perché sceglierci?
                                    </h3>
                                    <div className="space-y-5 w-full">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">Oltre 25 anni di esperienza nel settore</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">Lavori garantiti e certificati</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">Puntualità e professionalità</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">Materiali di prima qualità</p>
                                        </div>
                                    </div>
                                    <div className="mt-10 pt-6 border-t border-amber-200 dark:border-amber-800/30 w-full text-center">
                                        <p className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Chiamaci subito!</p>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">La tua sicurezza è la nostra priorità</p>
                                        <a
                                            href="tel:3293285783"
                                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white px-7 py-3 rounded-2xl font-bold shadow-2xl hover:shadow-amber-300/40 transition-all duration-300 border-2 border-amber-300/40 ring-2 ring-amber-200/30 hover:scale-105 text-lg"
                                        >
                                            <Phone className="h-5 w-5 drop-shadow" />
                                            <span>329 328 5783</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            };

            export default Contact;