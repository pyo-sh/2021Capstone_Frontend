import axios from "axios";
import { baseURL } from "@src/Constant";

export const searchRecipes = async ({ keyword, page } = {}) => {
	const wordQuery = keyword ? `keyword=${keyword}` : "";
	const pageQuery = page ? `page=${page}` : "";
	const response = await axios.get(`${baseURL}/api/recipe/search-list?${wordQuery}&${pageQuery}`);
	return response?.data;
};

export const readIIRByUser = async ({ userNum } = {}) => {
	const response = await axios.get(`${baseURL}/api/user/${userNum}/imn-ingr-recipes`);
	return response?.data;
};

export const readRecipe = async ({ recipeNum } = {}) => {
	const response = await axios.get(`${baseURL}/api/recipe/${recipeNum}`);
	return response?.data;
};

export const createBookmark = async body => {
	const response = await axios.post(`${baseURL}/api/bookmark-recipe`, body);
	return response.data;
};

export const readBookmarks = async userNum => {
	const response = await axios.get(`${baseURL}/api/user/${userNum}/bookmarks`);
	return response?.data;
};

export const deleteBookmark = async ({ userNum, bookmarkOrnu } = {}) => {
	const response = await axios.delete(
		`${baseURL}/api/bookmark-recipe?userNum=${userNum}&bookmarkOrnu=${bookmarkOrnu}`
	);
	return response?.data;
};

export const readIsBookmark = async ({ userNum, recipeNum } = {}) => {
	const response = await axios.get(
		`${baseURL}/api/bookmark-recipe/is?userNum=${userNum}&recipeNum=${recipeNum}`
	);
	return response.data;
};
