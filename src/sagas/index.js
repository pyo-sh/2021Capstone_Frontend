import { all, call } from "redux-saga/effects";
import user from "@src/sagas/user";
import refs from "@src/sagas/refs";

export default function* rootSaga() {
	yield all([call(user), call(refs)]);
}
