import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
	LOGIN_USER_REQUEST,
	LogIn_User_Success,
	LogIn_User_Failure
} from "../reducers/user";
import { request } from "~/apis/request";

function loginAPI(data) {
	const bodyData = {
		id: data.id,
		pwd: data.pw
	};
	return request({ url: "/api/user/login", method: "POST", body: bodyData });
}

function* login(action) {
	try {
		const result = yield call(loginAPI, action.payload);
		console.dir(result);

		yield put(LogIn_User_Success({}));
		yield put(loadUserRequestAction({ userNum, isMe: true }));
	} catch (e) {
		console.error(e);
		yield put(LogIn_User_Failure(e.response));
	}
}

function* watchLogin() {
	yield takeLatest(LOGIN_USER_REQUEST, login);
}

export default function* userSaga() {
	yield all([fork(watchLogin)]);
}
