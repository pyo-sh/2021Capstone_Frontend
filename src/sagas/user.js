import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
	LOGIN_USER_REQUEST,
	logInUserSuccess,
	logInUserFailure,
	VERIFY_USER_REQUEST,
	verifyUserSuccess,
	verifyUserFailure,
	SET_USER_REQUEST,
	setUserSuccess,
	setUserFailure
} from "@src/reducers/user";
import { loginAPI, readUser } from "@src/apis/user";
import { saveToken, getToken } from "@src/utils/storage";

async function loginRequest(data) {
	const bodyData = {
		id: data.id,
		pwd: data.pw
	};
	const { userNum, accessToken, refreshToken } = await loginAPI(bodyData);
	return { uid: userNum, accessToken, refreshToken };
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
function* verify() {
	try {
		const storageData = yield call(getToken);
		if (!storageData) throw "No Storage";

		const result = yield call(verifyRequest, storageData);
		// yield put(verifyUserSuccess(result));

		const { userNum, accessToken, refreshToken } = result;
		yield put(verifyUserSuccess({ uid: userNum, accessToken, refreshToken }));
	} catch (e) {
		console.log(e);
		yield put(verifyUserFailure(e));
	}
}
function* watchVerify() {
	yield takeLatest(VERIFY_USER_REQUEST, verify);
}
// ---------------------
async function getUserRequest(id) {
	const request = await readUser(id);
	return request;
}
function* getUser(action) {
	try {
		const result = yield call(getUserRequest, action.payload.id);
		const { userNum, id, nickname, email, linkId } = result;

		yield put(setUserSuccess({ uid: userNum, name: id, nickname, email, linkId }));
	} catch (e) {
		console.log(e);
		yield put(setUserFailure(e));
	}
}
function* watchGetUser() {
	yield takeLatest(SET_USER_REQUEST, getUser);
}

export default function* userSaga() {
	yield all([fork(watchLogin), fork(watchVerify), fork(watchGetUser)]);
}
