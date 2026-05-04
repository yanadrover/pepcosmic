import React from 'react';
import { motion } from 'framer-motion';

const videos = [
    {
        id: '_WJJ9VuaIrg',
        title: 'Aixi no es pot viure',
        desc: "L'himne més autèntic i irreverent"
    },
    {
        id: 'd9JbCEzdurI',
        title: 'Es Colors de Sant Joan',
        desc: 'Guanyadora des concurs de sa cançó de Sant Joan'
    },
    {
        id: 'NP2OrJX6_ok',
        title: 'Que Farem (Live)',
        desc: 'Ses sessions des Taller'
    },
    {
        id: 'Ddj6bx3mQLQ',
        title: 'Ses Germanes',
        desc: 'Música de rel i sentiments còsmics'
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 relative">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-starlight mb-4">
                    Galeria Audiovisual
                </h2>
                <div className="w-24 h-1 bg-rustic-earth mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-rustic-earth/50 transition-all duration-300">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-serif text-starlight">{video.title}</h3>
                            <p className="text-sm opacity-60">{video.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
