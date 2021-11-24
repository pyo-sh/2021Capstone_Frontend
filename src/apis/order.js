import axios from "axios";
import { baseURL } from "@src/Constant";

export const readOrders = async userNum => {
	const response = await axios.get(`${baseURL}/api/user/${userNum}/orders`);
	return response?.data;
};
