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
