import { all, fork, takeLatest, call, put, select } from "redux-saga/effects";
import {
	SET_RECRECIPES_REQUEST,
	setRecRecipesSuccess,
	setRecRecipesFailure
} from "@src/reducers/recipe";
import { readIIRByUser } from "@src/apis/recipes";

async function recrReqeust(uid) {
	return await readIIRByUser({ userNum: uid });
}
function* getRecR() {
	try {
		const uid = yield select(state => state.user.uid);
		const result = yield call(recrReqeust, uid);

		yield put(setRecRecipesSuccess({ recRecipes: result }));
	} catch (e) {
		yield put(setRecRecipesFailure(e.response));
	}
}
function* watchGetRecR() {
	yield takeLatest(SET_RECRECIPES_REQUEST, getRecR);
}

export default function* recipeSaga() {
	yield all([fork(watchGetRecR)]);
}
