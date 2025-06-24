import React from "react";

export default function Services() {
  const interiorServices = [
    {
      title: "Intérieur Express",
      price: "30 €",
      duration: "1h30",
      details: [
        "Aspiration habitacle",
        "Aspiration tapis",
        "Nettoyage plastiques visibles",
      ],
    },
    {
      title: "Intérieur Premium",
      price: "90 €",
      duration: "2h",
      details: [
        "Nettoyage complet habitacle",
        "Shampouinage tapis et sièges",
        "Désinfection et traitement anti-odeur",
      ],
    },
    {
      title: "Cabine Utilitaire",
      price: "45 €",
      duration: "2h",
      details: [
        "Aspiration complète",
        "Nettoyage plastiques cabine",
        "Vitres intérieures",
      ],
    },
  ];

  const exteriorServices = [
    {
      title: "Extérieur Express",
      price: "40 €",
      duration: "1h30",
      details: [
        "Prélavage et lavage carrosserie",
        "Nettoyage jantes",
        "Séchage microfibre",
      ],
    },
    {
      title: "Extérieur Prestige",
      price: "90 €",
      duration: "2h",
      details: [
        "Lavage complet à la main",
        "Dégoudronnage",
        "Lustrage et brillance",
      ],
    },
  ];

  const supplements = [
    {
      title: "Shampouinage Tapis",
      price: "15 €",
      description: "Nettoyage en profondeur des tapis de sol",
    },
    {
      title: "Shampouinage Sièges",
      price: "25 €",
      description: "Nettoyage en profondeur des sièges",
    },
    {
      title: "Dépoilage",
      price: "10 €",
      description: "Élimination des poils d’animaux",
    },
    {
      title: "Seuils de portes",
      price: "10 €",
      description: "Nettoyage des seuils",
    },
    {
      title: "Coffre",
      price: "10 €",
      description: "Nettoyage du coffre",
    },
    {
      title: "Nettoyage des vitres",
      price: "5 €",
      description: "Nettoyage des vitres intérieures et extérieures",
    },
  ];

  return (
    <section className="bg-black p-8 min-h-screen">
      <h2 className="text-2xl text-white font-semibold mb-6">Nos Services</h2>

      {/* Services Intérieurs */}
      <h3 className="text-xl text-yellow-400 font-semibold mb-4 mt-8">Services Intérieurs</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {interiorServices.map((service, idx) => (
          <div key={idx} className="border border-white bg-black shadow-md p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-white text-lg">{service.title}</h3>
              <span className="text-sm text-gray-300">{service.duration}</span>
            </div>
            <p className="font-semibold mb-2 text-yellow-400">{service.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-200">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Services Extérieurs */}
      <h3 className="text-xl text-yellow-400 font-semibold mb-4 mt-12">Services Extérieurs</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exteriorServices.map((service, idx) => (
          <div key={idx} className="border border-white bg-black shadow-md p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-white text-lg">{service.title}</h3>
              <span className="text-sm text-gray-300">{service.duration}</span>
            </div>
            <p className="font-semibold mb-2 text-yellow-400">{service.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-200">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Suppléments */}
      <h2 className="text-2xl text-white font-semibold mt-16 mb-6">Suppléments</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {supplements.map((supp, idx) => (
          <div key={idx} className="border border-white bg-black shadow-md p-4 rounded-lg">
            <h3 className="font-bold text-white text-lg mb-1">{supp.title}</h3>
            <p className="font-semibold mb-2 text-yellow-400">{supp.price}</p>
            <p className="text-sm text-gray-200 mb-2">{supp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
