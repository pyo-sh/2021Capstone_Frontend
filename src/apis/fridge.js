import axios from "axios";
import { baseURL } from "@src/Constant";

export const createRef = async body => {
	const response = await axios.post(`${baseURL}/api/ref`, body);
	return response.data;
};

export const readRefsByUser = async uid => {
	const response = await axios.get(`${baseURL}/api/user/${uid}/refs`);
	return response.data;
};

export const updateRef = async body => {
	const response = await axios.put(`${baseURL}/api/ref`, body);
	return response.data;
};

export const deleteRef = async refNum => {
	const response = await axios.delete(`${baseURL}/api/ref/${refNum}`);
	return response?.data;
};
