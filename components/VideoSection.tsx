'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt to auto-play when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Auto-play was prevented by the browser.", error);
            });
        }
    }, []);

    return (
        <SectionWrapper id="highlight-video" title="Event Highlight">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto rounded-3xl overflow-hidden glass shadow-2xl shadow-cyan-500/10 border border-white/10"
            >
                <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                    <video
                        ref={videoRef}
                        src="/vidoes/vfisrtv.mp4"
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
