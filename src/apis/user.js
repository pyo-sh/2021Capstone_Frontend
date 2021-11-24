import axios from "axios";
import { baseURL } from "@src/Constant";

export const loginAPI = async body => {
	const response = await axios.post(`${baseURL}/api/user/login`, body);
	return response.data;
};

export const readUser = async num => {
	const response = await axios.get(`${baseURL}/api/user/${num}`);
	return response.data;
};

export const createUser = async body => {
	const response = await axios.post(`${baseURL}/api/user`, body);
	return response.data;
};

export const linkUser = async userNum => {
	const response = await axios.get(`${baseURL}/api/user/link/${userNum}`);
	return response?.data;
};
