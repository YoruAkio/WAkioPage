import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Project() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Projects
                    </h2>
                    <p className="text-lg text-center mb-4">
                        Here are some of the projects I've worked on.
                    </p>
                    {/* Add your project details here */}
                </div>
            </section>
            <Footer />
        </div>
    );
}
