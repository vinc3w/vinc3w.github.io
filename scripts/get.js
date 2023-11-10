async function get(path) {
	const response = await fetch(path);
	return await response.json();
}

export default get;
