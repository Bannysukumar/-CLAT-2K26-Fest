'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import Image from 'next/image';

export function EventCoordinators() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <SectionWrapper id="coordinators" title="Event Coordinators">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center max-w-4xl mx-auto mt-8"
            >
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group relative w-full max-w-sm"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                    <div className="relative glass p-6 rounded-3xl h-full flex flex-col items-center">
                        {/* Image Container */}
                        <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                            <Image
                                src="/New folder (2)/coadinator.jpeg"
                                alt="B. Shiva Shankar"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>

                        {/* Info Container */}
                        <div className="text-center z-20">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2 group-hover:text-cyan-400 transition-colors">
                                B. Shiva Shankar
                            </h3>
                            <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4">
                                Lead Event Coordinator
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
