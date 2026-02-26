'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import Image from 'next/image';

const eventImages = [
  { id: 1, src: '/New folder (4)/euwyf87wyeyf.jpeg', alt: 'ÉCLAT 2K26 Moment 1' },
  { id: 2, src: '/New folder (4)/eyeryuwe.jpeg', alt: 'ÉCLAT 2K26 Moment 2' },
  { id: 3, src: '/New folder (4)/fgeryf.jpeg', alt: 'ÉCLAT 2K26 Moment 3' },
  { id: 4, src: '/New folder (4)/gfuygeuf.jpeg', alt: 'ÉCLAT 2K26 Moment 4' },
  { id: 5, src: '/New folder (4)/gfyuuy.jpeg', alt: 'ÉCLAT 2K26 Moment 5' },
  { id: 6, src: '/New folder (4)/gufgeuy.jpeg', alt: 'ÉCLAT 2K26 Moment 6' },
  { id: 7, src: '/New folder (4)/hdgff.jpeg', alt: 'ÉCLAT 2K26 Moment 7' },
  { id: 8, src: '/New folder (4)/hfguyege.jpeg', alt: 'ÉCLAT 2K26 Moment 8' },
  { id: 9, src: '/New folder (4)/hgvuhgfygu.jpeg', alt: 'ÉCLAT 2K26 Moment 9' },
  { id: 10, src: '/New folder (4)/hrgyuer.jpeg', alt: 'ÉCLAT 2K26 Moment 10' },
  { id: 11, src: '/New folder (4)/jdfhvuh.jpeg', alt: 'ÉCLAT 2K26 Moment 11' },
  { id: 12, src: '/New folder (4)/jffnvnj.jpeg', alt: 'ÉCLAT 2K26 Moment 12' },
  { id: 13, src: '/New folder (4)/jfijdfhiuf.jpeg', alt: 'ÉCLAT 2K26 Moment 13' },
  { id: 14, src: '/New folder (4)/jfiufre.jpeg', alt: 'ÉCLAT 2K26 Moment 14' },
  { id: 15, src: '/New folder (4)/jghierjh.jpeg', alt: 'ÉCLAT 2K26 Moment 15' },
  { id: 16, src: '/New folder (4)/jhfugu.jpeg', alt: 'ÉCLAT 2K26 Moment 16' },
  { id: 17, src: '/New folder (4)/jhggryeerf.jpeg', alt: 'ÉCLAT 2K26 Moment 17' },
  { id: 18, src: '/New folder (4)/jofijdif.jpeg', alt: 'ÉCLAT 2K26 Moment 18' },
  { id: 19, src: '/New folder (4)/uefyerfuy7e.jpeg', alt: 'ÉCLAT 2K26 Moment 19' },
  { id: 20, src: '/New folder (4)/uhgutrgjfhiugb.jpeg', alt: 'ÉCLAT 2K26 Moment 20' },
  { id: 21, src: '/New folder (4)/uregyuey.jpeg', alt: 'ÉCLAT 2K26 Moment 21' },
];

export function EventGallery() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <SectionWrapper id="event-gallery" title="Event Gallery">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {eventImages.map((image) => (
                        <motion.div
                            key={image.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">ÉCLAT 2K26 Highlights</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
