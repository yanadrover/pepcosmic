import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-cosmic-blue text-starlight overflow-hidden relative font-sans">
            {/* Background Stars Animation */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cosmic-blue via-transparent to-cosmic-blue"></div>
            </div>

            {/* Content Container */}
            <main className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 text-center pt-20 pb-12">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-all duration-700 mb-10 px-4">
                    <img src="/assets/images/logos/consell-nou.jpg" alt="Consell d'Eivissa" className="h-10 md:h-14 w-auto object-contain rounded-full" />
                    <img src="/assets/images/logos/ajuntament-eivissa.png" alt="Ajuntament d'Eivissa" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/assets/images/logos/sant-josep.png" alt="Sant Josep" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/assets/images/logos/sant-antoni.png" alt="Sant Antoni" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/assets/images/logos/santa-eularia.webp" alt="Santa Eulària" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/assets/images/logos/sant-joan.png" alt="Sant Joan" className="h-12 md:h-20 w-auto object-contain" />
                    <img src="/assets/images/logos/iee.png" alt="Institut d'Estudis Eivissencs" className="h-10 md:h-14 w-auto object-contain" />
                </div>
                <p className="text-sm opacity-60 font-light tracking-widest uppercase">&copy; {new Date().getFullYear()} Pep Còsmic y Es Verros de Balàfia</p>
            </footer>
        </div>
    );
};

export default Layout;
