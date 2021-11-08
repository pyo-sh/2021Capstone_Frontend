import axios from "axios";
import { baseURL } from "@src/Constant";

export const createRefEnrollIngr = async body => {
	const response = await axios.post(`${baseURL}/api/ref-enroll-ingr`, body);
	return response.data;
};

export const deleteRefEnrollIngr = async ({ refNum, ingrOrnu }) => {
	const response = await axios.delete(
		`${baseURL}/api/ref-enroll-ingr?refNum=${refNum}&ingrOrnu=${ingrOrnu}`
	);
	return response?.data;
};
