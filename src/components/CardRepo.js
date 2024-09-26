import { FaGithub } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

export default function CardRepo({ name, description, html_url }) {
    return (
        <Fade triggerOnce>
            <div className="card bg-neutral shadow-lg transform hover:scale-105 transition duration-300 w-11/12 sm:w-85 h-72 mx-auto flex flex-col justify-between">
                <div className="card-body p-4 sm:p-6 flex-grow">
                    <h2 className="card-title text-lg sm:text-xl font-bold mb-2">
                        {name}
                    </h2>
                    <p
                        className="text-gray-400 text-sm sm:text-base mb-4 overflow-hidden"
                        style={{ height: '5.5rem' }}
                    >
                        {description}
                    </p>
                </div>
                <div className="card-actions p-4 sm:p-6 mt-auto mb-2">
                    <div className="flex justify-center">
                        <a
                            href={html_url}
                            className="btn btn-primary flex items-center"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
