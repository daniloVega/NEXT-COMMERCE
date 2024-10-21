const loginUser = async (username: string, password: string) => {
	const apiUrl = process.env.API_URL;
	if (!apiUrl) {
		throw new Error('API URL is not defined');
	}
	const response = await fetch(`${apiUrl}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	});
	if (!response.ok) {
		throw new Error('Authentication failed');
	}
	return response.json;
};
