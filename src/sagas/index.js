import { all, call } from "redux-saga/effects";
import user from "@src/sagas/user";

export default function* rootSaga() {
	yield all([call(user)]);
}
