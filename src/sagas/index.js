import { all, call } from "redux-saga/effects";
import user from "@src/sagas/user";
import refs from "@src/sagas/refs";
import recipe from "@src/sagas/recipe";

export default function* rootSaga() {
	yield all([call(user), call(refs), call(recipe)]);
}
