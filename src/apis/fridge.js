import axios from "axios";
import { baseURL } from "~/Constant";

export const createRef = async body => {
	const response = await axios.post(`${baseURL}/api/ref`, body);
	return response.data;
};
