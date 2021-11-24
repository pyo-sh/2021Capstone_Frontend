import { createAction } from "@src/config/reducer";

// State
const initialState = {
	refs: [],
	isRefsLoading: false,
	loadRefsErrorReason: "",
	isIngrLoading: false,
	loadIngrErrorReason: ""
};

// 냉장고 전체 정보를 가져오기
export const [SET_REFS_REQUEST, setRefsRequest] = createAction("SET_REFS_REQUEST");
export const [SET_REFS_SUCCESS, setRefsSuccess] = createAction("SET_REFS_SUCCESS");
export const [SET_REFS_FAILURE, setRefsFailure] = createAction("SET_REFS_FAILURE");

// 냉장고 추가하기
export const [CREATE_REF_REQUEST, createRefRequest] = createAction("CREATE_REF_REQUEST");
export const [CREATE_REF_SUCCESS, createRefSuccess] = createAction("CREATE_REF_SUCCESS");
export const [CREATE_REF_FAILURE, createRefFailure] = createAction("CREATE_REF_FAILURE");
// 냉장고 수정하기
export const [UPDATE_REF_REQUEST, updateRefRequest] = createAction("UPDATE_REF_REQUEST");
export const [UPDATE_REF_SUCCESS, updateRefSuccess] = createAction("UPDATE_REF_SUCCESS");
export const [UPDATE_REF_FAILURE, updateRefFailure] = createAction("UPDATE_REF_FAILURE");
// 냉장고 삭제하기
export const [DELETE_REF_REQUEST, deleteRefRequest] = createAction("DELETE_REF_REQUEST");
export const [DELETE_REF_SUCCESS, deleteRefSuccess] = createAction("DELETE_REF_SUCCESS");
export const [DELETE_REF_FAILURE, deleteRefFailure] = createAction("DELETE_REF_FAILURE");

// 식자재 추가하기
export const [ADD_INGR_REQUEST, addIngrRequest] = createAction("ADD_INGR_REQUEST");
export const [ADD_INGR_SUCCESS, addIngrSuccess] = createAction("ADD_INGR_SUCCESS");
export const [ADD_INGR_FAILURE, addIngrFailure] = createAction("ADD_INGR_FAILURE");

// 식자재 수정하기
export const [UPDATE_INGR_REQUEST, updateIngrRequest] = createAction("UPDATE_INGR_REQUEST");
export const [UPDATE_INGR_SUCCESS, updateIngrSuccess] = createAction("UPDATE_INGR_SUCCESS");
export const [UPDATE_INGR_FAILURE, updateIngrFailure] = createAction("UPDATE_INGR_FAILURE");

// 식자재 삭제하기
export const [DELETE_INGR_REQUEST, deleteIngrRequest] = createAction("DELETE_INGR_REQUEST");
export const [DELETE_INGR_SUCCESS, deleteIngrSuccess] = createAction("DELETE_INGR_SUCCESS");
export const [DELETE_INGR_FAILURE, deleteIngrFailure] = createAction("DELETE_INGR_FAILURE");

function refsReducer(state = initialState, action) {
	switch (action.type) {
		// 냉장고 전체 정보를 가져오기
		case SET_REFS_REQUEST: {
			return {
				...state,
				refs: [],
				isRefsLoading: true,
				loadRefsErrorReason: ""
			};
		}
		case SET_REFS_SUCCESS: {
			return {
				...state,
				...action.payload,
				isRefsLoading: false
			};
		}
		case SET_REFS_FAILURE: {
			return {
				...state,
				isRefsLoading: false,
				loadRefsErrorReason: action.payload.message
			};
		}
		// 냉장고 추가하기
		case CREATE_REF_REQUEST: {
			return {
				...state,
				isRefsLoading: true,
				loadRefsErrorReason: ""
			};
		}
		case CREATE_REF_SUCCESS: {
			const newRef = action.payload.ref;
			const newRefs = [...state.refs, newRef];
			return {
				...state,
				refs: newRefs,
				isRefsLoading: false
			};
		}
		case CREATE_REF_FAILURE: {
			return {
				...state,
				isRefsLoading: false,
				loadRefsErrorReason: action.payload.message
			};
		}
		// 냉장고 수정하기
		case UPDATE_REF_REQUEST: {
			return {
				...state,
				isRefsLoading: true,
				loadRefsErrorReason: ""
			};
		}
		case UPDATE_REF_SUCCESS: {
			const newRef = action.payload.ref;
			const nowIndex = state.refs.findIndex(obj => obj.refNum === newRef?.refNum);
			if (nowIndex === -1) return { ...state };
			const newRefs = [...state.refs];
			newRefs[nowIndex] = newRef;
			return {
				...state,
				refs: newRefs,
				isRefsLoading: false
			};
		}
		case UPDATE_REF_FAILURE: {
			return {
				...state,
				isRefsLoading: false,
				loadRefsErrorReason: action.payload.message
			};
		}
		// 냉장고 삭제하기
		case DELETE_REF_REQUEST: {
			return {
				...state,
				isRefsLoading: true,
				loadRefsErrorReason: ""
			};
		}
		case DELETE_REF_SUCCESS: {
			const refNum = action.payload.refNum;
			const newRefs = [...state.refs].filter(obj => obj.refNum !== refNum);
			return {
				...state,
				refs: newRefs,
				isRefsLoading: false
			};
		}
		case DELETE_REF_FAILURE: {
			return {
				...state,
				isRefsLoading: false,
				loadRefsErrorReason: action.payload.message
			};
		}
		// 식자재 추가하기
		case ADD_INGR_REQUEST: {
			return {
				...state,
				isIngrLoading: true,
				loadIngrErrorReason: ""
			};
		}
		case ADD_INGR_SUCCESS: {
			// 해당 냉장고 찾기
			const newIngr = action.payload.ingr;
			const newRefs = [...state.refs];
			const targetIndex = newRefs.findIndex(obj => obj.refNum === newIngr.refNum);
			if (targetIndex === -1) return { ...state };
			// 냉장고에 재료 추가하기
			const newRef = {
				...newRefs[targetIndex],
				enrollIngrs: [...newRefs[targetIndex].enrollIngrs, newIngr]
			};
			newRefs[targetIndex] = newRef;
			return {
				...state,
				refs: newRefs,
				isIngrLoading: false
			};
		}
		case ADD_INGR_FAILURE: {
			return {
				...state,
				isIngrLoading: false,
				loadIngrErrorReason: action.payload.message
			};
		}
		// 식자재 추가하기
		case UPDATE_INGR_REQUEST: {
			return {
				...state,
				isIngrLoading: true,
				loadIngrErrorReason: ""
			};
		}
		case UPDATE_INGR_SUCCESS: {
			// 해당 냉장고 찾기
			const newIngr = action.payload.ingr;
			const newRefs = [...state.refs];
			const targetIndex = newRefs.findIndex(obj => obj.refNum === newIngr.refNum);
			if (targetIndex === -1) return { ...state };
			// 냉장고에서 재료 찾기
			const nowIndex = newRefs[targetIndex].enrollIngrs.findIndex(
				obj => obj.ingrOrnu === newIngr.ingrOrnu
			);
			if (nowIndex === -1) return { ...state };
			const newEnrollIngrs = [...newRefs[targetIndex].enrollIngrs];
			newEnrollIngrs[nowIndex] = newIngr;
			// 냉장고에 재료 추가하기
			const newRef = {
				...newRefs[targetIndex],
				enrollIngrs: newEnrollIngrs
			};
			newRefs[targetIndex] = newRef;
			return {
				...state,
				refs: newRefs,
				isIngrLoading: false
			};
		}
		case UPDATE_INGR_FAILURE: {
			return {
				...state,
				isIngrLoading: false,
				loadIngrErrorReason: action.payload.message
			};
		}
		// 식자재 삭제하기
		case DELETE_INGR_REQUEST: {
			return {
				...state,
				isRefsLoading: true,
				loadRefsErrorReason: ""
			};
		}
		case DELETE_INGR_SUCCESS: {
			const refNum = action.payload.refNum;
			const ingrOrnu = action.payload.ingrOrnu;
			// 해당 냉장고 찾기
			const newRefs = [...state.refs];
			const targetIndex = newRefs.findIndex(obj => obj.refNum === refNum);
			if (targetIndex === -1) return { ...state };
			// 냉장고에서 재료 찾아 삭제
			const newEnrollIngrs = newRefs[targetIndex].enrollIngrs.filter(
				obj => obj.ingrOrnu !== ingrOrnu
			);
			// 냉장고에 재료 업데이트
			const newRef = {
				...newRefs[targetIndex],
				enrollIngrs: newEnrollIngrs
			};
			newRefs[targetIndex] = newRef;
			return {
				...state,
				refs: newRefs,
				isRefsLoading: false
			};
		}
		case DELETE_INGR_FAILURE: {
			return {
				...state,
				isRefsLoading: false,
				loadRefsErrorReason: action.payload.message
			};
		}
		default:
			return { ...state };
	}
}

export default refsReducer;
