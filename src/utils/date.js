export const dateToString = (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0');
    const dateString = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${dateString}`;
};
