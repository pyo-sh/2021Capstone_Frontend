import React, { useState, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { verifyUserRequest, setUserRequest, logOutUserRequest } from "@src/reducers/user";
import { setRefsRequest } from "@src/reducers/refs";
import { setRecRecipesRequest } from "@src/reducers/recipe";
import Loading from "@src/components/Loading";

const Splash = () => {
	const dispatch = useDispatch();
	const [isFirst, setIsFirst] = useState(true);
	const [hasUID, setHasUID] = useState(false);
	const { accessToken, isLoadingUser, loadUserErrorReason } = useSelector(state => state.user);
	const { isRefsLoading, loadRefsErrorReason } = useSelector(state => state.refs);
	const { isRecipeLoading, loadRecipeErrorReason } = useSelector(state => state.recipe);

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
			dispatch(setRecRecipesRequest());
			setHasUID(true);
		}
	}, [isFirst, isLoadingUser, isRefsLoading, accessToken]);

	useEffect(() => {
		if (!hasUID || isLoadingUser || isRefsLoading || isRecipeLoading) return;
		if (loadRefsErrorReason || loadUserErrorReason || loadRecipeErrorReason) {
			dispatch(logOutUserRequest());
			Actions.login();
			return;
		}
		setIsFirst(true);
		setHasUID(false);
		Actions.main();
	}, [
		hasUID,
		isLoadingUser,
		isRefsLoading,
		isRecipeLoading,
		loadUserErrorReason,
		loadRefsErrorReason,
		loadRecipeErrorReason
	]);

	return <Loading />;
};

export default Splash;
