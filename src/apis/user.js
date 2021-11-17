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
