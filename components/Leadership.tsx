'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import Image from 'next/image';
import { leadershipData } from '@/lib/data/leadership';

export function Leadership() {
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

    // Exclude HOD and group others for the management section
    const categories = [
        { id: 'Management', title: null },
        { id: 'Executive Directors', title: 'Executive Directors' },
        { id: 'Deans', title: null },
        { id: 'Principal', title: null }
    ];

    return (
        <SectionWrapper id="leadership" title="College Management">
            <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col gap-16">
                {categories.map((cat) => {
                    const groupLeaders = leadershipData.filter(leader => leader.category === cat.id);
                    if (groupLeaders.length === 0) return null;

                    return (
                        <div key={cat.id} className="flex flex-col items-center">
                            {cat.title && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12 relative"
                                >
                                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500 tracking-tight uppercase">
                                        {cat.title}
                                    </h2>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
                                </motion.div>
                            )}

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                            >
                                {groupLeaders.map((leader, index) => (
                                    <motion.div
                                        key={leader.name}
                                        variants={itemVariants}
                                        className="group relative w-full"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                                        <div className="relative glass p-8 rounded-3xl h-full flex flex-col items-center text-center">
                                            {/* Image Container with Golden accents */}
                                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-yellow-500/30 group-hover:border-yellow-400 transition-colors shadow-2xl">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                                <Image
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 300px"
                                                />
                                            </div>

                                            {/* Info Container */}
                                            <div className="z-20">
                                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500 mb-2 group-hover:text-yellow-400 transition-colors">
                                                    {leader.name}
                                                </h3>
                                                <p className="text-yellow-400/80 font-medium tracking-wide uppercase text-xs mb-4">
                                                    {leader.role}
                                                </p>
                                                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4 opacity-50" />
                                                {leader.message && (
                                                    <p className="text-gray-300 italic leading-relaxed text-sm">
                                                        "{leader.message}"
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
