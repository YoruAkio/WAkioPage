import { Fade } from 'react-awesome-reveal';

export default function Hero() {
    return (
        <Fade triggerOnce>
            <section className="relative flex flex-col items-center justify-center text-center py-20 mt-16 sm:mt-24 text-white mt-30 mx-8">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-purple-800 rounded-full blur-3xl opacity-10"></div>
                </div>
                <h1 className="relative text-5xl sm:text-7xl font-extrabold mb-4">
                    Welcome to My Portfolio
                </h1>
                <p className="relative text-lg sm:text-2xl mb-8">
                    I'm from Indonesia, a self-taught student developer who
                    loves watching anime and adores cats.
                </p>
            </section>
        </Fade>
    );
}