import axios from "axios";
import { baseURL } from "@src/Constant";

export const createRefEnrollIngr = async body => {
	const response = await axios.post(`${baseURL}/api/ref-enroll-ingr`, body);
	return response.data;
};

export const updateRefEnrollIngr = async body => {
	const response = await axios.put(`${baseURL}/api/ref-enroll-ingr`, body);
	return response.data;
};

export const deleteRefEnrollIngr = async ({ refNum, ingrOrnu }) => {
	const response = await axios.delete(
		`${baseURL}/api/ref-enroll-ingr?refNum=${refNum}&ingrOrnu=${ingrOrnu}`
	);
	return response?.data;
};

export const searchPresetIngrs = async ({ keyword, type, page } = {}) => {
	const wordQuery = keyword ? `keyword=${keyword}` : "";
	const typeQuery = type ? `type=${type}` : "";
	const pageQuery = page ? `page=${page}` : "";
	const response = await axios.get(
		`${baseURL}/api/preset-ingr/search-list?${wordQuery ? wordQuery : typeQuery}&${pageQuery}`
	);
	return response?.data;
};
