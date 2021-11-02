import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_USER_REQUEST, logInUserSuccess, logInUserFailure } from "../reducers/user";
import { loginAPI } from "~/apis/user";

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
		yield put(logInUserSuccess(result));
	} catch (e) {
		console.error(e);
		yield put(logInUserFailure(e.response));
	}
}

function* watchLogin() {
	yield takeLatest(LOGIN_USER_REQUEST, login);
}

export default function* userSaga() {
	yield all([fork(watchLogin)]);
}
