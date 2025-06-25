import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="relative h-64 md:h-96 lg:h-[500px] w-full">
                <img
                    src="/assets/M3 E92.png"
                    alt="Bannière"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                    <h2 className="text-white text-4xl text-center font-bold">
                        Votre Voiture, Notre Passion !
                    </h2>
                    <Link
                        to="/services"
                        className="bg-black hover:bg-gray-500 text-yellow-400 px-6 py-2 rounded mt-8 inline-block text-center"
                    >
                        Découvrez nos services
                    </Link>
                </div>
            </div>

            <section id="accueil" className="p-8 bg-black text-white text-center">
                <h2 className="text-white text-4xl font-semibold mb-8">
                    Bienvenue chez Turbo Wash
                </h2>
                <p>
                    Chez Turbo Wash, chaque détail compte. Nous croyons qu'un lavage auto
                    de qualité passe par une expertise technique, des produits adaptés et
                    un engagement envers nos clients. Avec nous, votre voiture repart
                    comme neuve, prête à rouler avec style et brillance
                </p>
            </section>

            <section id="accueil" className="p-8 bg-black text-white text-center">
                <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi nous choisir</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <h3 className="text-xl text-yellow-400 font-semibold mb-2">A domicile</h3>
                        <p>Nous intervenons directement chez vous pour plus de confort et de gain de temps.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl text-yellow-400 font-semibold mb-2">Professionnalisme</h3>
                        <p>Une équipe formée, des produits adaptés, et une qualité garantie à chaque lavage.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl text-yellow-400 font-semibold mb-2">Accessible</h3>
                        <p>Des tarifs compétitifs et des services pour tous les budgets.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl text-yellow-400 font-semibold mb-2">Écologique</h3>
                        <p>Des produits respectueux de l’environnement pour prendre soin de votre voiture et de la planète.</p>
                    </div>
                </div>
            </section>

            {/*<hr className="border-t border-yellow-400 w-full my-0.1" />*/}

            <section id="realisations" className="p-8 bg-black text-white text-center">
                <h2 className="text-2xl font-semibold mb-6">Nos Réalisations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        "/assets/M2N.jpeg",
                        "/assets/M2B.jpeg",
                        "/assets/M4RS.jpeg",
                        "/assets/M4.jpeg",
                    ].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Réalisation ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
                <Link
                        to="https://www.instagram.com/turbowashcar?igsh=N2k5Z2wweW5ibDdn"
                        className="border border-white bg-black hover:bg-gray-500 text-yellow-400 px-6 py-2 rounded mt-8 inline-block text-center">
                        Voir Instagram
                </Link>
            </section>


            <section id="realisations" className="p-8 bg-black text-white text-center">
                <h2 className="text-2xl font-semibold mb-4">Qui sommes nous ?</h2>
                <p>
                    C'est l'histoire de deux amis passionnés par l'automobile qui ont décidé de transformer leur amour des belles carrosseries en service de pro ! Ici, on ne se contente pas de faire briller les voitures, on leur redonne une âme. Avec une bonne dose de passion, un savoir-faire affûté et un grain de folie, on s'engage à offrir un nettoyage qui fait vraiment la différence. Chaque voiture qui passe entre nos mains ressort avec cet éclat unique qui fait tourner les têtes.
                </p>
            </section>
        </>
    );
}
