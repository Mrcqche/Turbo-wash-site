import React from "react";

export default function Contact() {
  return (
    <section className="bg-black w-full p-8 text-center space-y-6">
      <h2 className="text-3xl text-white font-semibold mb-6">Contactez-nous</h2>
      <p className="text-gray-300 mb-4">
        Pour toute question, réservation ou information, n'hésitez pas à nous contacter.
      </p>

      <div className="flex flex-col items-center space-y-4">
    <a
      href="https://turbowash3.reservio.com/booking"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-white bg-black text-yellow-400 px-6 py-2 rounded shadow hover:bg-gray-600 transition-colors font-semibold"
    >
      Bloque ta réservation !
    </a>

    <a
      href="tel:+33750357593"
      className="inline-block border border-white bg-black text-yellow-400 px-6 py-2 rounded shadow hover:bg-gray-600 transition-colors font-semibold"
    >
      Appeler maintenant
    </a>
  </div>
    </section>
  );
}
