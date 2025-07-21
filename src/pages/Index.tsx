import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-500">
			<Header />
			<Hero />
			<Services />
			<Gallery />
			<Contact />
			<Footer />
		</div>
	);
};

export default Index;
