export default async function getUserData(req, res) {
    const { username, perPage = 6 } = req.query;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`,
        );
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
