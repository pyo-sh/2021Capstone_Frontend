import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { verifyUserRequest } from "@src/reducers/user";

const Splash = () => {
	const dispatch = useDispatch();
	const [isFirst, setIsFirst] = useState(true);
	const { accessToken, isLoadingUser } = useSelector(state => state.user);

	useEffect(() => {
		dispatch(verifyUserRequest({}));
		setIsFirst(false);
	}, []);

	useEffect(() => {
		if (isFirst || isLoadingUser) return;
		if (!accessToken) Actions.login();
		else Actions.main();
		setIsFirst(true);
	}, [isFirst, isLoadingUser, accessToken]);

	return (
		<View>
			<Image
				source={require("../components/icons/splash.png")}
				resizeMode="stretch"
				style={[{ width: "100%", height: "100%" }]}
			/>
		</View>
	);
};

export default Splash;
