import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
    {
        src: '/assets/images/collage-members.png',
        alt: 'Es Verros Members Collage',
        className: 'md:col-span-2 md:row-span-2'
    },
    { src: '/assets/images/verros/2AF6A4F3-B9F8-48AD-84A9-AFA7560925DE.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/89237DEB-F48A-418D-8367-69CA18168357.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/EB32E7C8-3DFD-4BC2-BCD8-D6F1748C32A7.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_2733.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3544.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3560.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3564.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3567.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3572.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3577.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3579.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3582.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_3589.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_4819.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_4836.jpg', alt: 'Es Verros' },
    { src: '/assets/images/verros/IMG_4839.jpg', alt: 'Es Verros' }
];

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <section className="py-20 bg-black/20" id="photos">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-starlight mb-4">
                        Instants Còsmics
                    </h2>
                    <div className="w-24 h-1 bg-rustic-earth mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-xl border border-white/10 group cursor-pointer ${photo.className || ''}`}
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-rustic-earth transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhotoGallery;
