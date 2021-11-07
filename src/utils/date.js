export const dateToString = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth().toString().padStart(2, "0");
	const dateString = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${dateString}`;
};

export const isBefore = (targetDate, comparisonDate) => {
	const a = new Date(targetDate);
	const b = new Date(comparisonDate);
	a.setHours(0, 0, 0, 0);
	b.setHours(0, 0, 0, 0);
	return a <= b;
};

export const getDateRemaining = string => {
	const targetDate = new Date(string);
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const gap = today.getTime() - targetDate.getTime();
	const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
	return result;
};
