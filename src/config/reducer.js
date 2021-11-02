export const createAction = type => {
	const action = data => ({ type, payload: data });
	return [type, action];
};
