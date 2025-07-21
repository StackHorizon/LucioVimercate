import { Building, Hammer, IdCard, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TermsOfService = () => {
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
							<a
								href="/"
								className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
							>
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
							Termini e{" "}
							<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
								Condizioni
							</span>
						</h1>
						<p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
							Benvenuto sul nostro sito web. Ti invitiamo a leggere attentamente
							questi Termini e Condizioni prima di utilizzare i nostri servizi
							professionali
						</p>
						<div className="mt-8 inline-block px-6 py-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
							<span className="text-sm text-amber-700 dark:text-amber-300 font-semibold">
								Ultimo aggiornamento: 21 luglio 2025
							</span>
						</div>
					</div>

					{/* Content Sections */}
					<div className="max-w-6xl mx-auto">
						{/* Accettazione dei Termini */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">✅</span>
									</span>
									Accettazione dei Termini
								</h2>
								<div className="space-y-4 text-slate-700 dark:text-slate-300">
									<p className="leading-relaxed">
										Accedendo e utilizzando i servizi di{" "}
										<strong>Fabbro Luciano Vimercate</strong>, accetti i
										seguenti Termini e Condizioni. Se non sei d'accordo con
										queste condizioni, ti invitiamo a non utilizzare il nostro
										sito web.
									</p>
									<p className="leading-relaxed">
										L'utilizzo dei nostri servizi implica l'accettazione
										integrale di tutti i termini e condizioni qui riportati,
										incluse le politiche di privacy e cookie.
									</p>
								</div>
							</div>
						</section>

						{/* Modifiche ai Termini */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">🔄</span>
									</span>
									Modifiche ai Termini
								</h2>
								<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
									<div className="space-y-4 text-slate-700 dark:text-slate-300">
										<p className="leading-relaxed">
											<strong>Fabbro Luciano</strong> si riserva il diritto di
											modificare questi Termini e Condizioni in qualsiasi
											momento per adeguarli alle normative vigenti o ai
											cambiamenti dei servizi offerti.
										</p>
										<p className="leading-relaxed">
											Le modifiche saranno pubblicate su questa pagina e
											diventeranno effettive immediatamente dopo la
											pubblicazione. Ti invitiamo a verificare periodicamente
											questa pagina per restare aggiornato sulle eventuali
											modifiche.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Uso del Sito */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">🌐</span>
									</span>
									Uso del Sito
								</h2>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
										<h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">
											✅ Uso Consentito
										</h3>
										<ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
											<li>• Consultazione delle informazioni sui servizi</li>
											<li>• Richiesta di preventivi e appuntamenti</li>
											<li>• Contatto per assistenza fabbro</li>
											<li>• Utilizzo conforme alle leggi applicabili</li>
										</ul>
									</div>
									<div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-800">
										<h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">
											❌ Uso Vietato
										</h3>
										<ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
											<li>
												• Violazione dei diritti di proprietà intellettuale
											</li>
											<li>• Utilizzo per scopi illeciti o fraudolenti</li>
											<li>• Invio di contenuti offensivi o spam</li>
											<li>• Tentativi di compromettere la sicurezza</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						{/* Proprietà Intellettuale */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">©️</span>
									</span>
									Proprietà Intellettuale
								</h2>
								<div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
									<div className="space-y-4 text-slate-700 dark:text-slate-300">
										<p className="leading-relaxed">
											Tutti i contenuti del sito web di{" "}
											<strong>Fabbro Luciano</strong> sono di proprietà
											dell'azienda.
										</p>
										<p className="leading-relaxed">
											<strong>
												È vietata la riproduzione, distribuzione o utilizzo non
												autorizzato di qualsiasi materiale presente sul sito.
											</strong>
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Limitazione di Responsabilità */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">⚠️</span>
									</span>
									Limitazione di Responsabilità
								</h2>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-800">
										<h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">
											🚫 Esclusioni
										</h3>
										<ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
											<li>• Danni indiretti o consequenziali</li>
											<li>• Perdita di dati o interruzione del servizio</li>
											<li>• Problemi tecnici del sito web</li>
											<li>• Utilizzo improprio delle informazioni</li>
										</ul>
									</div>
									<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
										<h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
											📋 Limitazioni
										</h3>
										<p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
											<strong>Fabbro Luciano Vimercate</strong> non sarà
											responsabile per danni diretti, indiretti, incidentali,
											speciali o consequenziali derivanti dall'uso del sito web,
											fatta salva la responsabilità per i servizi di fabbro
											effettivamente prestati.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Contatti */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
										<Phone className="h-6 w-6 text-white" />
									</span>
									Contatti
								</h2>
								<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
									<div className="text-center mb-6">
										<h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-4">
											Per qualsiasi domanda sui Termini e Condizioni
										</h3>
										<div className="inline-block bg-white dark:bg-slate-700 px-6 py-4 rounded-xl border border-amber-200 dark:border-amber-700 shadow-lg">
											<div className="flex items-center justify-center space-x-3">
												<Phone className="h-8 w-8 text-amber-600" />
												<div className="text-left">
													<div className="text-sm text-slate-600 dark:text-slate-400">
														Contattaci:
													</div>
													<a
														href="tel:3293285783"
														className="text-xl font-bold text-amber-600 dark:text-amber-400 hover:underline"
													>
														329 328 5783
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div className="space-y-3">
											<div className="flex items-center space-x-3">
												<Building className="h-6 w-6 text-amber-600" />
												<span className="font-semibold text-slate-800 dark:text-slate-200">
													Fabbro Luciano Vimercate
												</span>
											</div>
											<div className="flex items-start space-x-3">
												<MapPin className="h-6 w-6 text-amber-600 mt-1" />
												<div>
													<div className="font-semibold text-slate-800 dark:text-slate-200">
														Sede:
													</div>
													<div className="text-slate-600 dark:text-slate-400">
														Via Gran Paradiso, 4<br />
														Brugherio (MB) 20861
													</div>
												</div>
											</div>
											<div className="flex items-center space-x-3">
												<IdCard className="h-6 w-6 text-amber-600" />
												<div>
													<div className="font-semibold text-slate-800 dark:text-slate-200">
														P.IVA:
													</div>
													<div className="text-slate-600 dark:text-slate-400">
														09082580961
													</div>
												</div>
											</div>
										</div>

										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-amber-200 dark:border-amber-700">
											<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
												Per chiarimenti sui termini e condizioni, reclami o
												segnalazioni, contattaci durante gli orari di servizio.
												Il nostro team è a disposizione per rispondere a ogni
												tua domanda.
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

export default TermsOfService;
