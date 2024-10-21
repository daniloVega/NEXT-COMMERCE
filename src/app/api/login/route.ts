import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const apiUrl = process.env.API_URL; // Accessing API_URL from .env.local

	if (!apiUrl) {
		return res.status(500).json({ error: 'API_URL is not defined' });
	}

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: req.body.username,
			password: req.body.password,
		}),
	});

	if (!response.ok) {
		return res.status(401).json({ error: 'Authentication failed' });
	}

	const data = await response.json();
	return res.status(200).json(data);
}
