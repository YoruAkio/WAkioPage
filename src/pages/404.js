import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Custom404() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <section className="flex-grow flex flex-col justify-center items-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="flex justify-center mb-4">
                        <motion.div
                            className="text-6xl font-bold mx-2"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0.5, 1],
                                textShadow: [
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                    '0 0 20px rgba(255, 255, 255, 1)',
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: 0,
                            }}
                        >
                            4
                        </motion.div>
                        <motion.div
                            className="text-6xl font-bold mx-2"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0.5, 1],
                                textShadow: [
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                    '0 0 20px rgba(255, 255, 255, 1)',
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: 0.2,
                            }}
                        >
                            0
                        </motion.div>
                        <motion.div
                            className="text-6xl font-bold mx-2"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0.5, 1],
                                textShadow: [
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                    '0 0 20px rgba(255, 255, 255, 1)',
                                    '0 0 10px rgba(255, 255, 255, 0.5)',
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: 0.4,
                            }}
                        >
                            4
                        </motion.div>
                    </div>
                    <p className="text-lg mb-8">Page Not Found</p>
                    <Link href="/" passHref>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                        >
                            Go back to Home
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}
