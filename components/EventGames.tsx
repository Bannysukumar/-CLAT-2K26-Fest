'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import Image from 'next/image';

const gameImages = [
    { id: 1, src: '/games/duyfuy.jpeg', alt: 'Event Game 1' },
    { id: 2, src: '/games/eyfuyerg.jpeg', alt: 'Event Game 2' },
    { id: 3, src: '/games/ghgfuyfguye.jpeg', alt: 'Event Game 3' },
    { id: 4, src: '/games/hfrgeuyg.jpeg', alt: 'Event Game 4' },
    { id: 5, src: '/games/hfriue.jpeg', alt: 'Event Game 5' },
    { id: 6, src: '/games/hfuhrfu.jpeg', alt: 'Event Game 6' },
    { id: 7, src: '/games/hfuyguf.jpeg', alt: 'Event Game 7' },
    { id: 8, src: '/games/jhefgeur.jpeg', alt: 'Event Game 8' },
    { id: 9, src: '/games/jhgfuegur.jpeg', alt: 'Event Game 9' },
    { id: 10, src: '/games/jknfjbhgiu.jpeg', alt: 'Event Game 10' },
    { id: 11, src: '/games/reguyerg.jpeg', alt: 'Event Game 11' },
    { id: 12, src: '/games/uerfueue.jpeg', alt: 'Event Game 12' },
    { id: 13, src: '/games/wefuyeur.jpeg', alt: 'Event Game 13' },
    { id: 14, src: '/games/ygfuyerfy.jpeg', alt: 'Event Game 14' },
    { id: 15, src: '/games/yguyeyr.jpeg', alt: 'Event Game 15' },
];

export function EventGames() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <SectionWrapper id="event-games" title="Event Games">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {gameImages.map((image) => (
                        <motion.div
                            key={image.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                <p className="text-purple-400 font-bold tracking-widest text-xs uppercase">ÉCLAT 2K26 Games</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
