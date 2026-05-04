import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-rustic-earth/20 rounded-lg transform rotate-3 scale-105 blur-lg"></div>
                    <img
                        src="/assets/images/banda-rincon.png"
                        alt="Pep Còsmic i Es Verros de Balàfia al Rincón de Pepe"
                        className="relative rounded-lg shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-starlight mb-6">
                        Himnes Rurals i <span className="text-rustic-earth">Còsmics</span>
                    </h2>
                    <p className="text-lg opacity-80 mb-6 leading-relaxed">
                        Pep Còsmic i Es Verros de Balàfia son sa fusió definitiva entre sa tradició pagesa i l'univers infinit.
                        Amb una guitarra, un capell de palla i una visió surrealista de sa realitat, transformem ses històries
                        quotidianes d'Eivissa en himnes intergalàctics.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        No som només un grup de música; som una experiència. Des de ses feixes de Balàfia fins a ses estrelles,
                        cantem a sa terra, a la vida i a s'irreverència de ser eivissenc en un món modern.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
