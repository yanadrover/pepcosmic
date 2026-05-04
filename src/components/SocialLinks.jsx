import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

const SocialLinks = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-black/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-starlight mb-6">
                        Segueix-nos
                    </h2>
                    <p className="text-lg opacity-80 mb-10">
                        Descobreix més contingut i mantén-te al dia amb les nostres actuacions
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            href="https://www.instagram.com/pep_cosmic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 min-w-[240px]"
                        >
                            <Instagram className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-sm opacity-90">Instagram</div>
                                <div className="font-bold">@pep_cosmic</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.youtube.com/@pepcosmic"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 min-w-[240px]"
                        >
                            <Youtube className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-sm opacity-90">YouTube</div>
                                <div className="font-bold">@pepcosmic</div>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialLinks;
