'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

const highlights = [
    { id: 1, src: '/vidoes/vfisrtv.mp4', title: 'Main Highlights' },
    { id: 2, src: '/New folder (5)/dtrddt.mp4', title: 'Moment 1' },
    { id: 3, src: '/New folder (5)/hferiuih.mp4', title: 'Moment 2' },
    { id: 4, src: '/New folder (5)/huruer.mp4', title: 'High Energy' },
    { id: 5, src: '/New folder (5)/jgheigh.mp4', title: 'Celebration' },
    { id: 6, src: '/New folder (5)/jhfrgeru.mp4', title: 'Tech Talk' },
    { id: 7, src: '/New folder (5)/jhgigheh.mp4', title: 'Performance' },
    { id: 8, src: '/New folder (5)/jhguierhgiue.mp4', title: 'Workshop' },
    { id: 9, src: '/New folder (5)/jhuher.mp4', title: 'Crowd' },
    { id: 10, src: '/New folder (5)/ruhfyuerhg.mp4', title: 'Grand Entry' },
    { id: 11, src: '/New folder (5)/sjfgfiugh.mp4', title: 'Live Music' },
    { id: 12, src: '/New folder (5)/ufeur.mp4', title: 'Interaction' },
    { id: 13, src: '/New folder (5)/uhgeuge.mp4', title: 'Finale' },
];

export function VideoSection() {
    const [activeVideo, setActiveVideo] = React.useState(highlights[0]);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let isMounted = true;

        if (videoRef.current) {
            videoRef.current.load();
            const playPromise = videoRef.current.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    if (isMounted) {
                        console.log("Auto-play was prevented or interrupted:", error);
                    }
                });
            }
        }

        return () => {
            isMounted = false;
        };
    }, [activeVideo]);

    return (
        <SectionWrapper id="highlight-video" title="Event Highlights">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Main Featured Video */}
                <motion.div
                    key={activeVideo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden glass shadow-2xl shadow-cyan-500/20 border border-white/10"
                >
                    <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                        <video
                            ref={videoRef}
                            src={activeVideo.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </motion.div>

                {/* Playlist Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                    {highlights.map((video) => (
                        <motion.button
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeVideo.id === video.id
                                ? 'border-cyan-500 shadow-lg shadow-cyan-500/40 opacity-100'
                                : 'border-white/10 opacity-60 hover:opacity-100'
                                }`}
                        >
                            <video
                                src={video.src}
                                className="w-full h-full object-cover pointer-events-none"
                                muted
                                playsInline
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeVideo.id === video.id ? 'bg-cyan-500 text-white' : 'bg-white/20 text-white/50 group-hover:bg-white/40'
                                    }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
