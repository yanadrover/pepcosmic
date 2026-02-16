import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center relative mb-20">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: 'url(/assets/images/collage-members.png)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/60 via-cosmic-blue/40 to-cosmic-blue"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-8 relative z-10"
            >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-starlight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    PEP COSMIC
                </h1>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-rustic-earth mb-8">
                    y Es Verros de Balàfia
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto italic opacity-90 mb-12 font-light">
                    "Sa expressió més poc pureta d’una cançó popular eivissenca"
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex gap-6 flex-wrap justify-center relative z-10"
            >
                <a
                    href="#gallery"
                    className="px-8 py-3 bg-rustic-earth/80 hover:bg-rustic-earth text-white rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 shadow-[0_0_20px_rgba(139,69,19,0.4)] flex items-center gap-2 group"
                >
                    Ascolta sa Música
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
                <ArrowDown className="w-8 h-8 text-starlight" />
            </div>
        </section>
    );
};

export default Hero;
