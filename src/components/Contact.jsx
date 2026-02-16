import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-starlight mb-4">
                        Contacta amb naltros
                    </h2>
                    <p className="text-lg opacity-80">
                        Vols portar la festa còsmica al teu ajuntament o esdeveniment?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-rustic-earth/20 rounded-full flex items-center justify-center text-rustic-earth">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl">Telèfon</h3>
                                <p className="opacity-80 hover:text-white transition-colors">
                                    <a href="tel:+34649875590">649 875 590</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-rustic-earth/20 rounded-full flex items-center justify-center text-rustic-earth">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl">Email</h3>
                                <p className="opacity-80">
                                    <a href="mailto:cancosmic@yahoo.es" className="hover:text-white transition-colors">
                                        cancosmic@yahoo.es
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-6 justify-center md:justify-start">
                            <a
                                href="https://www.instagram.com/pep_cosmic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rustic-earth hover:scale-110 transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@PepCosmic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rustic-earth hover:scale-110 transition-all duration-300"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-80">Nom</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-rustic-earth transition-colors text-white placeholder-white/30"
                                placeholder="El teu nom"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-80">Missatge</label>
                            <textarea
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-rustic-earth transition-colors text-white placeholder-white/30"
                                placeholder="Com podem ajudar-te?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-rustic-earth hover:bg-rustic-earth/80 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Enviar Missatge
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
