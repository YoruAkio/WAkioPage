export async function fetchLatestRepos(username, perPage = 3) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`
    );
    const data = await response.json();
    return data;
}