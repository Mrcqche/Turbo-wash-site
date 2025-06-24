import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        {/* Header */}
        <header className="bg-black text-white p-2 text-center">
          <div className="max-w-4xl mx-auto flex justify-center items-center space-x-12 text-sm">
            <span>✓ Qualité garantie</span>
            <span className="whitespace-nowrap">✓ Produits écologiques</span>
            <span>✓ A domicile</span>
          </div>
          <img
            src="/src/assets/logo.JPG"
            alt="Logo Turbo Wash"
            style={{ height: "150px" }}
            className="mx-auto"
          />
        </header>

        {/* Navigation */}
        <nav className="bg-black flex justify-center space-x-6 py-4">
          <Link to="/" className="text-white hover:underline">Accueil</Link>
          <Link to="/services" className="text-white hover:underline">Nos Services</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </nav>

        {/* Contenu central */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <hr className="border-t mt-12 border-gray-600 w-full my-0.1" />

        {/* Section info */}
        <section className="p-8 bg-black text-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8 text-center md:text-left">
            <img
              src="/src/assets/logo.JPG"
              alt="Logo Turbo Wash"
              className="w-40 h-auto mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-sm font-semibold mb-2">Horaires d'ouverture</h3>
              <p className="text-xs mb-4">Du lundi au dimanche : de 9h à 21h</p>
              <h3 className="text-sm font-semibold mb-2">Réseaux sociaux</h3>
              <p className="text-xs">
                Instagram :
                <a href="https://instagram.com/turbowash" className="text-yellow-400 hover:underline ml-1">
                  @turbowash
                </a>
              </p>
              <h3 className="text-sm mt-2 font-semibold mb-2">Contact</h3>
              <p className="text-xs">
                Email :{" "}
                <a
                  href="mailto:turbowashcar@outlook.com"
                  className="text-yellow-400 hover:underline ml-1"
                >
                  turbowashcar@outlook.com
                </a>
              </p>
              <p className="text-xs mt-1">
                Téléphone :{" "}
                <a href="tel:+33750357593" className="text-yellow-400 hover:underline">
                  +33 7 50 35 75 93
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4 text-xs">
          <p>&copy; 2025 Turbo Wash Car - Tous droits réservés</p>
        </footer>
      </div>
    </Router>
  );
}
