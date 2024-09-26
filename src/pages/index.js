import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CardRepo from '@/components/CardRepo';
import { Fade } from 'react-awesome-reveal';
import { fetchUrl, fetchGithubData } from '@/utils/utils';

export default function Home({
    repos,
    reviewedPrs,
    pushedCommits,
    mergedPrsCount,
}) {
    return (
        <div className="flex flex-col min-h-screen bg-base-300 text-base-content">
            <Navbar />
            <Hero
                reviewedPrs={reviewedPrs}
                pushedCommits={pushedCommits}
                mergedPrsCount={mergedPrsCount}
            />
            <section className="py-20">
                <div className="container mx-auto">
                    <Fade triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-8 du-badge-info">
                            Projects
                        </h2>
                    </Fade>
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
    const now = new Date();
    const ninetyDaysAgo = new Date(
        now.setDate(now.getDate() - 90),
    ).toISOString();

    const [repoData, prs, commits, mergedPrs] = await Promise.all([
        fetchUrl(
            `https://yoruakio.tech/api/getUserData?username=yoruakio&perPage=6`,
        ),
        fetchGithubData(
            `https://api.github.com/search/issues?q=type:pr+author:yoruakio+created:>${ninetyDaysAgo}`,
        ),
        fetchGithubData(
            `https://api.github.com/search/commits?q=author:yoruakio+committer-date:>${ninetyDaysAgo}`,
        ),
        fetchGithubData(
            `https://api.github.com/search/issues?q=type:pr+state:closed+author:yoruakio+merged:>${ninetyDaysAgo}`,
        ),
    ]);

    return {
        props: {
            repos: repoData,
            reviewedPrs: prs.total_count,
            pushedCommits: commits.total_count,
            mergedPrsCount: mergedPrs.total_count,
        },
    };
}