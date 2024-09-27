import { Fade } from 'react-awesome-reveal';

export default function Hero({ reviewedPrs, pushedCommits, mergedPrsCount }) {
    return (
        <Fade triggerOnce>
            <section className="relative flex flex-col items-center justify-center text-center py-20 mt-16 sm:mt-24 text-base-content">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-yellow-100 rounded-full blur-3xl opacity-5" />
                </div>
                <h1 className="relative text-3xl sm:text-5xl sm:my-5 font-extrabold mb-4">
                    Welcome to My Portfolio
                </h1>
                <p className="relative text-1xl sm:text-2xl sm:my-5">
                    I'm from Indonesia, a self-taught student developer who loves watching
                    anime and adores cats.
                </p>
                <p className="relative text-sm sm:text-1xl mt-1 font-bold underline">
                    In the last 90 days on GitHub I reviewed {reviewedPrs} PRs, pushed{" "}
                    {pushedCommits} commits, and merged {mergedPrsCount} PRs in public
                    repositories.
                </p>
            </section>
        </Fade>
    );
}