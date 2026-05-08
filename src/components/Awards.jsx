import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
    return (
        <section id="awards" className="py-20 bg-black/30 rounded-3xl my-10 border border-rustic-earth/20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-starlight mb-4">
                        Reconeixements
                    </h2>
                    <div className="h-1 w-20 bg-rustic-earth mx-auto"></div>
                </div>

                <div className="flex flex-col items-center gap-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-lg"
                    >
                        <img 
                            src="/diploma.jpg" 
                            alt="Diploma Accèssit Concurs Cançó de Sant Joan 2022" 
                            className="w-full h-auto rounded-lg shadow-2xl border-4 border-rustic-earth/30 hover:scale-[1.02] transition-transform duration-500"
                        />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-2xl text-center"
                    >
                        <h3 className="text-2xl font-serif text-rustic-earth mb-4">
                            Accèssit Concurs Cançó de Sant Joan 2022
                        </h3>
                        <p className="text-lg opacity-80 mb-6 italic">
                            "L'Institut d'Estudis Eivissencs atorga l'Accèssit Concurs Cançó de Sant Joan 2022 a la cançó **Així no es pot viure** de Pep Ripoll."
                        </p>
                        <p className="text-base opacity-70">
                            Aquest reconeixement de s'Institut d'Estudis Eivissencs avala sa qualitat i es compromís de ses nostres lletres i composicions amb sa cultura i sa llengua d'Eivissa.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
