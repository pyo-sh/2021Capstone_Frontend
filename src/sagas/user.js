import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
	LOGIN_USER_REQUEST,
	logInUserSuccess,
	logInUserFailure,
	VERIFY_USER_REQUEST,
	verifyUserSuccess,
	verifyUserFailure
} from "@src/reducers/user";
import { loginAPI } from "@src/apis/user";
import { saveToken, getToken } from "@src/utils/storage";

function loginRequest(data) {
	const bodyData = {
		id: data.id,
		pwd: data.pw
	};
	return loginAPI(bodyData);
}
function* login(action) {
	try {
		const result = yield call(loginRequest, action.payload);
		yield call(saveToken, result);
		yield put(logInUserSuccess(result));
	} catch (e) {
		console.error(e);
		yield put(logInUserFailure(e.response));
	}
}
function* watchLogin() {
	yield takeLatest(LOGIN_USER_REQUEST, login);
}
// --------------------
function verifyRequest(data) {
	// return verifyAPI(data);
	return data;
}

function* verify(action) {
	try {
		const storageData = yield call(getToken);
		if (!storageData) throw "No Storage";

		const result = yield call(verifyRequest, storageData);
		const { userNum, accessToken, refreshToken } = result;
		yield put(verifyUserSuccess({ uid: userNum, accessToken, refreshToken }));
	} catch (e) {
		yield put(verifyUserFailure(e));
	}
}

function* watchVerify() {
	yield takeLatest(VERIFY_USER_REQUEST, verify);
}

export default function* userSaga() {
	yield all([fork(watchLogin), fork(watchVerify)]);
}
