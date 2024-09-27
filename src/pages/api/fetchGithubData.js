import fs from 'fs';
import path from 'path';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = 'yoruakio';
const REPOS_PER_PAGE = 6;
const DATA_DIR = path.join(process.cwd(), 'public/data');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

const fetchGithubData = async (url) => {
    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    if (!res.ok) {
        throw new Error(`Error fetching data from ${url}: ${res.statusText}`);
    }
    return res.json();
};

const fetchData = async () => {
    const now = new Date();
    const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90)).toISOString();

    try {
        const [repoData, prs, commits, mergedPrs] = await Promise.all([
            fetchGithubData(`https://api.github.com/users/${USERNAME}/repos?per_page=${REPOS_PER_PAGE}`),
            fetchGithubData(`https://api.github.com/search/issues?q=type:pr+author:${USERNAME}+created:>${ninetyDaysAgo}`),
            fetchGithubData(`https://api.github.com/search/commits?q=author:${USERNAME}+committer-date:>${ninetyDaysAgo}`),
            fetchGithubData(`https://api.github.com/search/issues?q=type:pr+state:closed+author:${USERNAME}+merged:>${ninetyDaysAgo}`)
        ]);

        fs.writeFileSync(path.join(DATA_DIR, 'reposData.json'), JSON.stringify(repoData, null, 2));
        fs.writeFileSync(path.join(DATA_DIR, 'githubData.json'), JSON.stringify({ 
            prs: prs.total_count,
            commits: commits.total_count,
            mergedPrs: mergedPrs.total_count
        }, null, 2));

        console.log('Data fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default async function handler(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    if (token !== GITHUB_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    await fetchData();
    res.status(200).json({ message: 'Data fetched and saved successfully.' });
}