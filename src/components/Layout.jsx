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
            <footer className="relative z-10 text-center py-6 text-sm opacity-60">
                <p>&copy; {new Date().getFullYear()} Pep Cosmic y Es Verros de Balàfia</p>
            </footer>
        </div>
    );
};

export default Layout;
