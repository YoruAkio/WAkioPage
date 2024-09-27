import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CardRepo from '@/components/CardRepo';
import { Fade } from 'react-awesome-reveal';
import path from 'path';
import fs from "fs";

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
                        <h2 className="text-4xl font-bold text-center mb-2 du-badge-info">
                            Projects
                        </h2>
                        <p className="relative text-lg sm:text-0.8xl mb-8 font-bold underline text-center">The latest repositories I've worked on</p>
                    </Fade>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
                        {Array.isArray(repos) && repos.length > 0 ? (
                            repos.map(repo => (
                                <CardRepo
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    pushed_at={repo.formatted_pushed_at}
                                />
                            ))
                        ) : (
                            <p>No repositories found.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export async function getServerSideProps() {
    const dataDir = path.join(process.cwd(), 'public/data');

    const readJsonFile = (fileName) => {
        const filePath = path.join(dataDir, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    };

    const repoData = readJsonFile('reposData.json');
    const githubData = readJsonFile('githubData.json');

    const formattedRepoData = repoData.map(repo => ({
        ...repo,
        formatted_pushed_at: new Date(repo.pushed_at).toLocaleDateString()
    }));

    return {
        props: {
            repos: Array.isArray(formattedRepoData) ? formattedRepoData : [],
            reviewedPrs: githubData.prs || 0,
            pushedCommits: githubData.commits || 0,
            mergedPrsCount: githubData.mergedPrs || 0,
        },
    };
}