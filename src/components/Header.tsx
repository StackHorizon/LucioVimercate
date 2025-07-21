import { Hammer, Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="bg-gradient-to-b from-amber-100 via-white to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sticky top-0 z-50 shadow-md border-b border-amber-200 dark:border-slate-700">
			<div className="max-w-full px-4 sm:px-6 mx-auto">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="flex items-center justify-center w-14 h-14 bg-slate-900 rounded-xl shadow border border-slate-800">
							<img
								src="/Logo.png"
								alt="Logo"
								className="h-14 w-14 object-contain filter grayscale"
							/>
						</div>
						<div>
							<span className="text-lg font-extrabold bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
								Fabbro Luciano
							</span>
							<div className="text-xs text-slate-500 dark:text-slate-300 font-medium">
								Da 25 anni per voi
							</div>
						</div>
					</div>
					{/* Navbar desktop */}
					<nav className="hidden md:flex items-center space-x-6">
						{[
							{ id: "home", label: "Home" },
							{ id: "servizi", label: "Servizi" },
							{ id: "galleria", label: "Galleria" },
							{ id: "contatti", label: "Contatti" },
						].map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="px-2 py-1 font-semibold text-slate-800 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
							>
								{item.label}
							</button>
						))}
						<a
							href="tel:3293285783"
							className="bg-amber-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-bold shadow transition-all flex items-center space-x-2 border border-amber-300 dark:border-amber-700"
						>
							<Phone className="h-4 w-4" />
							<span>329 328 5783</span>
						</a>
						<ThemeToggle />
					</nav>
					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
						<ThemeToggle />
						<button
							className="ml-2 p-2 bg-white dark:bg-slate-800 rounded-lg shadow border border-amber-200 dark:border-slate-700"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col md:hidden">
						<div className="bg-white dark:bg-slate-900 shadow-2xl rounded-b-2xl mx-2 mt-2 p-4 border border-amber-200 dark:border-slate-700">
							<nav className="flex flex-col space-y-2">
								{[
									{ id: "home", label: "Home" },
									{ id: "servizi", label: "Servizi" },
									{ id: "galleria", label: "Galleria" },
									{ id: "contatti", label: "Contatti" },
								].map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className="text-left font-semibold text-slate-800 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-2 rounded-lg"
									>
										{item.label}
									</button>
								))}
								<a
									href="tel:3293285783"
									className="bg-amber-500 hover:bg-orange-600 text-white py-3 px-2 rounded-lg font-bold mt-2 flex items-center space-x-2 shadow border border-amber-300 dark:border-amber-700"
								>
									<Phone className="h-4 w-4" />
									<span>329 328 5783</span>
								</a>
							</nav>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
