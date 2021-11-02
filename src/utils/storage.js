import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = ({ userNum, accessToken, refreshToken }) => {
	AsyncStorage.setItem("userToken", JSON.stringify({ userNum, accessToken, refreshToken }));
};

export const getToken = async () => {
	const string = await AsyncStorage.getItem("userToken");
	return JSON.parse(string);
};

export const removeToken = async () => {
	try {
		AsyncStorage.removeItem("userToken");
		return true;
	} catch (e) {
		return false;
	}
};
