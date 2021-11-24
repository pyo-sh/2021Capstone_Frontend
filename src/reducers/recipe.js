import { createAction } from "@src/config/reducer";

// State
const initialState = {
	recRecipes: [],
	isRecipeLoading: false,
	loadRecipeErrorReason: ""
};

export const [SET_RECRECIPES_REQUEST, setRecRecipesRequest] =
	createAction("SET_RECRECIPES_REQUEST");
export const [SET_RECRECIPES_SUCCESS, setRecRecipesSuccess] =
	createAction("SET_RECRECIPES_SUCCESS");
export const [SET_RECRECIPES_FAILURE, setRecRecipesFailure] =
	createAction("SET_RECRECIPES_FAILURE");

function recipeReducer(state = initialState, action) {
	switch (action.type) {
		case SET_RECRECIPES_REQUEST: {
			return {
				...state,
				isRecipeLoading: true,
				loadRecipeErrorReason: ""
			};
		}
		case SET_RECRECIPES_SUCCESS: {
			return {
				...state,
				...action.payload,
				isRecipeLoading: false
			};
		}
		case SET_RECRECIPES_FAILURE: {
			return {
				...state,
				loadRecipeErrorReason: action.payload
			};
		}
		default:
			return { ...state };
	}
}

export default recipeReducer;
