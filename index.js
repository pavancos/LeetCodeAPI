const express = require('express');
const Bottleneck = require('bottleneck');
const app = express();
const port = 3001;

const limiter = new Bottleneck({
    minTime: 1000,
    maxConcurrent: 1
});

const fetchLeetCodeData = async (username) => {
    const fetch = (await import('node-fetch')).default;

    const url = 'https://leetcode.com/graphql';
    const query = `
        query getUserContestRanking ($username: String!) {
            userContestRanking(username: $username) {
                attendedContestsCount
                rating
                globalRanking
                totalParticipants
                topPercentage
                badge {
                    name
                }
            }
            userContestRankingHistory(username: $username) {
                attended
                rating
                ranking
                trendDirection
                problemsSolved
                totalProblems
                finishTimeInSeconds
                contest {
                    title
                    startTime
                }
            }
        }
    `;
    const variables = { username };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://leetcode.com/',
            'Origin': 'https://leetcode.com'
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const data = await response.json();
    if (data.data && data.data.userContestRankingHistory) {
        data.data.userContestRankingHistory = data.data.userContestRankingHistory.filter(contest => contest.attended);
    }

    return data;
};

const fetchLeetCodeDataWithLimit = limiter.wrap(fetchLeetCodeData);

app.get('/leetcode/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const data = await fetchLeetCodeDataWithLimit(username);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
