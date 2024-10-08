import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('coffee');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'coffee' ? 'retro' : 'coffee');
    };

    return (
        <>
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 bg-opacity-95 backdrop-blur-md rounded-3xl px-4 sm:px-8 py-2 sm:py-4 shadow-lg z-10">
                <div className="flex justify-between items-center relative">
                    <div className="flex items-center">
                        <div className="sm:hidden mr-4">
                            <button
                                onClick={toggleTheme}
                                className="text-white focus:outline-none"
                            >
                                {theme === 'coffee' ? (
                                    <FiSun className="w-6 h-6" />
                                ) : (
                                    <FiMoon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none font-bold text-2xl font-sans text-center sm:text-left">
                        YoruAkio
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-current focus:outline-none"
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    <ul className="hidden sm:flex space-x-2 sm:space-x-4 font-bold">
                        <li>
                            <a href="/" className="underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/project" className="underline">
                                Project
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="text-white focus:outline-none"
                            >
                                {theme === 'coffee' ? (
                                    <FiSun className="w-6 h-6" />
                                ) : (
                                    <FiMoon className="w-6 h-6" />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 right-4 w-1/2 sm:w-1/3 bg-base-800 bg-opacity-70 backdrop-blur-md rounded-lg p-8 shadow-lg z-20 mt-2"
                    >
                        <ul className="flex flex-col space-y-4 text-center font-bold">
                            <li>
                                <a
                                    href="/"
                                    className="text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/project"
                                    className="text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Project
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}