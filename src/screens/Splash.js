import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { verifyUserRequest } from "@src/reducers/user";
import { setRefsRequest } from "@src/reducers/refs";
import { setUserRequest, logOutUserRequest } from "@src/reducers/user";

const Splash = () => {
	const dispatch = useDispatch();
	const [isFirst, setIsFirst] = useState(true);
	const [hasUID, setHasUID] = useState(false);
	const { accessToken, isLoadingUser, loadUserErrorReason } = useSelector(state => state.user);
	const { isRefsLoading, loadRefsErrorReason } = useSelector(state => state.refs);

	// 로그인 로직
	useEffect(() => {
		dispatch(verifyUserRequest({}));
		setIsFirst(false);
	}, []);
	useEffect(() => {
		if (isFirst || isLoadingUser) return;
		if (!accessToken) {
			dispatch(logOutUserRequest());
			Actions.login();
			return;
		}
		if (!hasUID) {
			dispatch(setRefsRequest());
			dispatch(setUserRequest());
			setHasUID(true);
		}
	}, [isFirst, isLoadingUser, isRefsLoading, accessToken]);

	// 데이터 불러오기
	useEffect(() => {
		if (!hasUID || isLoadingUser || isRefsLoading) return;
		if (loadRefsErrorReason || loadUserErrorReason) {
			dispatch(logOutUserRequest());
			Actions.login();
			return;
		}
		setIsFirst(true);
		setHasUID(false);
		Actions.main();
	}, [hasUID, isLoadingUser, isRefsLoading, loadUserErrorReason, loadRefsErrorReason]);

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
