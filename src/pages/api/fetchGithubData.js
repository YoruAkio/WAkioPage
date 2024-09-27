import fs from 'fs';
import path from 'path';
const { fetchGithubData } = require('../../utils/utils');

const USERNAME = 'yoruakio';
const REPOS_PER_PAGE = 6;
const DATA_DIR = path.join(process.cwd(), 'public/data');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

const fetchData = async () => {
    const now = new Date();
    const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90)).toISOString();

    try {
        const [repoData, prs, commits, mergedPrs] = await Promise.all([
            fetchGithubData(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
            fetchGithubData(`https://api.github.com/search/issues?q=type:pr+author:${USERNAME}+created:>${ninetyDaysAgo}`),
            fetchGithubData(`https://api.github.com/search/commits?q=author:${USERNAME}+committer-date:>${ninetyDaysAgo}`),
            fetchGithubData(`https://api.github.com/search/issues?q=type:pr+state:closed+author:${USERNAME}+merged:>${ninetyDaysAgo}`)
        ]);

        // Sort repositories by the last commit date (pushed_at)
        const sortedRepos = repoData.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, REPOS_PER_PAGE);

        fs.writeFileSync(path.join(DATA_DIR, 'reposData.json'), JSON.stringify(sortedRepos, null, 2));
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
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized, No authorization provided' });
    }

    const token = authHeader.split(' ')[1];

    if (token !== process.env.API_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized, Invalid token provided' });
    }

    await fetchData();
    res.status(200).json({ message: 'Data fetched and saved successfully.' });
}