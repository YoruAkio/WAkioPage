import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        About Me
                    </h2>
                    <p className="text-lg text-center mb-4">
                        I'm from Indonesia, a self-taught student developer who
                        loves watching anime and adores cats. I have a passion
                        for coding and enjoy learning new technologies.
                    </p>
                    <p className="text-lg text-center mb-4">
                        This is the about page where you can learn more about me
                        and my journey as a developer.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
