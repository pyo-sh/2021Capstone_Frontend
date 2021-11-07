import axios from "axios";
import { baseURL } from "@src/Constant";

export const createRefEnrollIngr = async body => {
	const response = await axios.post(`${baseURL}/api/ref-enroll-ingr`, body);
	return response.data;
};