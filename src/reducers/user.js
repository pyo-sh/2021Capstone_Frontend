import { createAction } from "~/config/reducer";
import { removeToken } from "~/utils/storage";

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

// 유저의 정보를 가져오는 요청
export const [SET_USER_REQUEST, setUserSuccess] = createAction("SET_USER_REQUEST");
// 유저의 로그인을 요청
export const [LOGIN_USER_REQUEST, logInUserRequest] = createAction("LOGIN_USER_REQUEST");
export const [LOGIN_USER_SUCCESS, logInUserSuccess] = createAction("LOGIN_USER_SUCCESS");
export const [LOGIN_USER_FAILURE, logInUserFailure] = createAction("LOGIN_USER_FAILURE");
// 유저의 로그아웃을 요청 (storage, redux)
export const [LOGOUT_USER_REQUEST, logOutUserRequest] = createAction("LOGOUT_USER_REQUEST");
// 유저의 토큰이 유효한지 검사
export const [VERIFY_USER_REQUEST, verifyUserRequest] = createAction("VERIFY_USER_REQUEST");
export const [VERIFY_USER_SUCCESS, verifyUserSuccess] = createAction("VERIFY_USER_SUCCESS");
export const [VERIFY_USER_FAILURE, verifyUserFailure] = createAction("VERIFY_USER_FAILURE");

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
		case LOGIN_USER_SUCCESS: {
			return {
				...state,
				...action.payload,
				isLoadingUser: false
			};
		}
		case LOGIN_USER_FAILURE:
			return {
				...state,
				isLoadingUser: false,
				loadUserErrorReason: action?.error ?? ""
			};
		// 로그아웃
		case LOGOUT_USER_REQUEST: {
			removeToken();
			return {
				uid: "",
				name: "",
				email: "",
				imageURL: "",
				isLoadingUser: false,
				loadUserErrorReason: ""
			};
		}
		case VERIFY_USER_REQUEST:
			return {
				...state,
				isLoadingUser: true
			};
		case VERIFY_USER_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoadingUser: false
			};
		case VERIFY_USER_FAILURE:
			return {
				...state,
				...action.payload,
				isLoadingUser: false,
				loadUserErrorReason: action?.error ?? ""
			};
		default:
			return state;
	}
}

export default userReducer;
