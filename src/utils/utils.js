export async function fetchUrl(url) {
    const response = await fetch(url);
    return response.json();
}

export async function fetchLatestRepos(username, perPage = 3) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`,
    );
    const data = await response.json();
    return data;
}

export async function fetchGithubData(url) {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) {
            throw new Error(
                `Error fetching data from ${url}: ${response.statusText}`,
            );
        }

        return response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
