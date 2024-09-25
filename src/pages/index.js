import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CardRepo from '@/components/CardRepo';

export default function Home({ repos }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="flex space-x-2">
                    <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0.2,
                        }}
                    />
                    <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0.4,
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <Hero />
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
                        {repos.map(repo => (
                            <CardRepo
                                key={repo.id}
                                name={repo.name}
                                description={repo.description}
                                html_url={repo.html_url}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://yoruakio.tech/api/getUserData?username=yoruakio&perPage=6');
    const data = await res.json();

    return {
        props: {
            repos: data,
        },
    };
}
