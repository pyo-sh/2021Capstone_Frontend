import { all, fork, takeLatest, call, put, select } from "redux-saga/effects";
import {
	SET_REFS_REQUEST,
	setRefsSuccess,
	setRefsFailure,
	CREATE_REF_REQUEST,
	createRefSuccess,
	createRefFailure,
	UPDATE_REF_REQUEST,
	updateRefSuccess,
	updateRefFailure,
	DELETE_REF_REQUEST,
	deleteRefSuccess,
	deleteRefFailure,
	ADD_INGR_REQUEST,
	addIngrSuccess,
	addIngrFailure,
	UPDATE_INGR_REQUEST,
	updateIngrSuccess,
	updateIngrFailure,
	DELETE_INGR_REQUEST,
	deleteIngrSuccess,
	deleteIngrFailure
} from "@src/reducers/refs";
import { createRef, updateRef, deleteRef, readRefsByUser } from "@src/apis/fridge";
import { createRefEnrollIngr, updateRefEnrollIngr, deleteRefEnrollIngr } from "@src/apis/ingrs";

// 전체 냉장고 불러오기
async function getAllRefsRequest(uid) {
	const datas = await readRefsByUser(uid);
	return datas;
}
function* getAllRefs() {
	try {
		const uid = yield select(state => state.user.uid);
		const result = yield call(getAllRefsRequest, uid);
		yield put(setRefsSuccess({ refs: result }));
	} catch (e) {
		yield put(setRefsFailure({ message: e.response }));
	}
}
function* watchGetAll() {
	yield takeLatest(SET_REFS_REQUEST, getAllRefs);
}

// 냉장고 추가하기
async function createRefRequest(requestBody) {
	const datas = await createRef(requestBody);
	return datas;
}
function* createRefAction(action) {
	try {
		const result = yield call(createRefRequest, action.payload.ref);
		yield put(createRefSuccess({ ref: result }));
	} catch (e) {
		yield put(createRefFailure({ message: e.response }));
	}
}
function* watchCreateRef() {
	yield takeLatest(CREATE_REF_REQUEST, createRefAction);
}

// 냉장고 수정하기
async function updateRefRequest(requestBody) {
	const datas = await updateRef(requestBody);
	return datas;
}
function* updateRefAction(action) {
	try {
		const result = yield call(updateRefRequest, action.payload.ref);
		yield put(updateRefSuccess({ ref: result }));
	} catch (e) {
		yield put(updateRefFailure({ message: e.response }));
	}
}
function* watchUpdateRef() {
	yield takeLatest(UPDATE_REF_REQUEST, updateRefAction);
}

// 냉장고 삭제하기
async function deleteRefRequest(refNum) {
	const datas = await deleteRef(refNum);
	return datas;
}
function* deleteRefAction(action) {
	try {
		const refNum = action.payload.refNum;
		yield call(deleteRefRequest, refNum);
		yield put(deleteRefSuccess({ refNum }));
	} catch (e) {
		yield put(deleteRefFailure({ message: e.response }));
	}
}
function* watchDeleteRef() {
	yield takeLatest(DELETE_REF_REQUEST, deleteRefAction);
}

// 식자재 추가하기
async function addIngrRequest(ingr) {
	const datas = await createRefEnrollIngr(ingr);
	return datas;
}
function* addIngr(action) {
	try {
		const result = yield call(addIngrRequest, action.payload.ingr);
		yield put(addIngrSuccess({ ingr: result }));
	} catch (e) {
		yield put(addIngrFailure({ message: e.response }));
	}
}
function* watchAddIngr() {
	yield takeLatest(ADD_INGR_REQUEST, addIngr);
}

// 식자재 수정하기
async function updateIngrRequest(ingr) {
	const datas = await updateRefEnrollIngr(ingr);
	return datas;
}
function* updateIngr(action) {
	try {
		const result = yield call(updateIngrRequest, action.payload.ingr);
		yield put(updateIngrSuccess({ ingr: result }));
	} catch (e) {
		yield put(updateIngrFailure({ message: e.response }));
	}
}
function* watchUpdateIngr() {
	yield takeLatest(UPDATE_INGR_REQUEST, updateIngr);
}

// 식자재 삭제하기
async function deleteIngrRequest(body) {
	const datas = await deleteRefEnrollIngr(body);
	return datas;
}
function* deleteIngr(action) {
	try {
		console.log(action.payload);
		yield call(deleteIngrRequest, action.payload);
		yield put(deleteIngrSuccess(action.payload));
	} catch (e) {
		console.log(e);
		yield put(deleteIngrFailure({ message: e.response }));
	}
}
function* watchDeleteIngr() {
	yield takeLatest(DELETE_INGR_REQUEST, deleteIngr);
}

export default function* refsSaga() {
	yield all([
		fork(watchGetAll),
		fork(watchCreateRef),
		fork(watchUpdateRef),
		fork(watchDeleteRef),
		fork(watchAddIngr),
		fork(watchUpdateIngr),
		fork(watchDeleteIngr)
	]);
}
