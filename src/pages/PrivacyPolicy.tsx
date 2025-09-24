import { Building, Hammer, IdCard, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
							Privacy{" "}
							<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
								Policy
							</span>
						</h1>
						<p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
							Ai sensi del Regolamento (UE) 2016/679 (GDPR), forniamo
							informazioni sul trattamento dei dati raccolti tramite il nostro
							sito
						</p>
						<div className="mt-8 inline-block px-6 py-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
							<span className="text-sm text-amber-700 dark:text-amber-300 font-semibold">
								Ultimo aggiornamento: 24 settembre 2025
							</span>
						</div>
					</div>

					{/* Content Sections */}
					<div className="max-w-6xl mx-auto">
						{/* Titolare del Trattamento */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
										<Building className="h-6 w-6 text-white" />
									</span>
									Titolare del Trattamento
								</h2>
								<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
									<div className="space-y-4 text-slate-700 dark:text-slate-300">
										<div className="flex items-center space-x-3">
											<Building className="h-6 w-6 text-blue-600" />
											<span className="text-xl font-semibold text-blue-800 dark:text-blue-300">
												Fabbro Luciano Vimercate
											</span>
										</div>
										<div className="flex items-start space-x-3">
											<MapPin className="h-6 w-6 text-blue-600 mt-1" />
											<div>
												<div className="font-semibold text-slate-800 dark:text-slate-200">
													Sede Operativa:
												</div>
												<div className="text-slate-600 dark:text-slate-400">
													Via Gran Paradiso, 4<br />
													Brugherio (MB) 20861
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<Phone className="h-6 w-6 text-blue-600" />
											<div>
												<div className="font-semibold text-slate-800 dark:text-slate-200">
													Telefono:
												</div>
												<a
													href="tel:3293285783"
													className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
												>
													329 328 5783
												</a>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<IdCard className="h-6 w-6 text-blue-600" />
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
								</div>
							</div>
						</section>

						{/* Dati Raccolti */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">📊</span>
									</span>
									Dati Raccolti
								</h2>
								<div className="space-y-6">
									<div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
										<h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">
											✅ Principio di Minimizzazione
										</h3>
										<p className="text-slate-700 dark:text-slate-300 leading-relaxed">
											Il sito{" "}
											<strong>
												non raccoglie né conserva dati personali identificabili
											</strong>{" "}
											durante la navigazione normale.
										</p>
									</div>

									<div className="grid md:grid-cols-1 gap-6">
										<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
											<h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
												<Phone className="h-6 w-6 mr-3" />
												Pulsante "Chiama"
											</h3>
											<p className="text-slate-700 dark:text-slate-300 text-sm">
												Apre l'app del telefono del dispositivo.{" "}
												<strong>Nessun dato viene raccolto</strong> dal nostro
												sito durante questa operazione.
											</p>
										</div>


									</div>
								</div>
							</div>
						</section>

						{/* Analisi e Statistiche */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">📈</span>
									</span>
									Analisi e Statistiche
								</h2>
								<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
									<h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-4 flex items-center">
										<span className="text-2xl mr-3">📊</span>
										Google Search Console
									</h3>
									<p className="text-slate-700 dark:text-slate-300 leading-relaxed">
										Il nostro sito utilizza{" "}
										<strong>Google Search Console</strong> per raccogliere{" "}
										<strong>dati anonimi e aggregati</strong>
										sulle visite al sito, esclusivamente a fini statistici e di
										ottimizzazione SEO.
										<strong>
											Nessun dato personale identificabile viene tracciato
										</strong>{" "}
										attraverso questo servizio.
									</p>
								</div>
							</div>
						</section>

						{/* Cookie e Servizi Esterni */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">🍪</span>
									</span>
									Cookie e Servizi Esterni
								</h2>
								<div className="space-y-6">
									<div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
										<h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">
											🛠️ Cookie Tecnici e di Terze Parti
										</h3>
										<p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
											Il sito utilizza cookie tecnici e di terze parti per il
											corretto funzionamento:
										</p>
									</div>

									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
										<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
											<h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
												<span className="text-2xl mr-2">🔤</span>
												Google Fonts
											</h4>
											<p className="text-slate-700 dark:text-slate-300 text-sm">
												Per il caricamento dei font utilizzati nel sito.
												Servizio fornito da Google.
											</p>
										</div>

										<div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
											<h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
												<span className="text-2xl mr-2">🎨</span>
												Lucide Icons
											</h4>
											<p className="text-slate-700 dark:text-slate-300 text-sm">
												Per la visualizzazione delle icone utilizzate
												nell'interfaccia utente.
											</p>
										</div>

										<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
											<h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-3 flex items-center">
												<span className="text-2xl mr-2">⚡</span>
												React/Vite
											</h4>
											<p className="text-slate-700 dark:text-slate-300 text-sm">
												Framework utilizzato per il funzionamento
												dell'applicazione web.
											</p>
										</div>
									</div>

									<div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-800">
										<h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">
											⚠️ Importante
										</h4>
										<p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
											<strong>
												Nessuno di questi servizi raccoglie direttamente dati
												personali attraverso il nostro sito
											</strong>
											, ma potrebbero applicare le proprie politiche di privacy.
											Per maggiori dettagli, consulta le rispettive Privacy
											Policy e visita la nostra{" "}
											<Link
												to="/cookie-policy"
												className="text-red-600 dark:text-red-400 hover:underline font-semibold"
											>
												Cookie Policy
											</Link>
											.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Finalità e Base Giuridica */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">⚖️</span>
									</span>
									Finalità e Base Giuridica
								</h2>
								<div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
									<div className="space-y-4 text-slate-700 dark:text-slate-300">
										<div className="flex items-start space-x-3">
											<span className="text-2xl mt-1">🎯</span>
											<div>
												<h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
													Finalità del Trattamento
												</h3>
												<p className="leading-relaxed">
													I dati tecnici e aggregati sono trattati
													esclusivamente per{" "}
													<strong>migliorare l'esperienza utente</strong>e{" "}
													<strong>l'efficienza del sito web</strong>,
													ottimizzando le prestazioni e l'accessibilità dei
													nostri servizi.
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-3">
											<span className="text-2xl mt-1">⚖️</span>
											<div>
												<h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
													Base Giuridica
												</h3>
												<p className="leading-relaxed">
													Il trattamento è basato sul{" "}
													<strong>legittimo interesse del titolare</strong>
													(art. 6 par. 1 lett. f del GDPR) per garantire il
													corretto funzionamento del sito e migliorare i servizi
													offerti ai clienti.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Diritti dell'Utente */}
						<section className="mb-16">
							<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
								<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
									<span className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
										<span className="text-white text-xl">👤</span>
									</span>
									Diritti dell'Utente
								</h2>
								<div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
									<p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
										L'utente può esercitare tutti i{" "}
										<strong>diritti previsti dagli artt. 15-22 del GDPR</strong>
										, contattando il titolare tramite i recapiti forniti in
										questa pagina:
									</p>
									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">🔍</span>
												Accesso
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Conoscere quali dati trattiamo
											</p>
										</div>
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">✏️</span>
												Rettifica
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Correggere dati inesatti
											</p>
										</div>
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">🗑️</span>
												Cancellazione
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Richiedere la rimozione
											</p>
										</div>
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">⏸️</span>
												Limitazione
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Limitare il trattamento
											</p>
										</div>
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">❌</span>
												Opposizione
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Opporsi al trattamento
											</p>
										</div>
										<div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
											<h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
												<span className="text-lg mr-2">📦</span>
												Portabilità
											</h3>
											<p className="text-emerald-700 dark:text-emerald-400 text-sm">
												Ottenere i propri dati
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

export default PrivacyPolicy;
