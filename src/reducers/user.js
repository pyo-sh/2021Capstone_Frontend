// State
const initialState = {
	uid: "",
	name: "my_id",
	email: "my_email@email.com",
	nick_name: "my_nickname",
	imageURL: "",
	accessToken: "",
	refreshToken: "",
	isLoadingUser: false,
	loadUserErrorReason: ""
};

// Actions with createActions
export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const Set_User_Success = data => ({
	type: SET_USER_REQUEST,
	payload: data
});

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LogIn_User_Request = data => ({
	type: LOGIN_USER_REQUEST,
	payload: data
});
export const LogIn_User_Success = data => ({
	type: LOGIN_USER_SUCCESS,
	payload: data
});
export const LogIn_User_Failure = error => ({
	type: LOGIN_USER_FAILURE,
	error: error
});

export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LogOut_User_Request = () => ({ type: LOGOUT_USER_REQUEST });

// Reducer
function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER_REQUEST:
			return {
				...state,
				...action.payload
			};
		// 로그인
		case LOGIN_USER_REQUEST:
			return {
				...state,
				isLoadingUser: true
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoadingUser: false
			};
		case LOGIN_USER_FAILURE:
			return {
				...state,
				isLoadingUser: false,
				loadUserErrorReason: action.error
			};
		// 로그아웃
		case LOGOUT_USER_REQUEST:
			return {
				uid: "",
				name: "",
				email: "",
				imageURL: "",
				isLoadingUser: false,
				loadUserErrorReason: ""
			};
		default:
			return state;
	}
}

export default userReducer;
