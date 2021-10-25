const baseURL = "https://better-before.herokuapp.com";

export const request = async ({ url, method, body }) => {
	const res = await fetch(`${baseURL}${url}`, {
		method,
		credentials: "include",
		headers: {
			Accept: "application/json; charset=UTF-8",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body || {})
	});
	return await res.json();
};
