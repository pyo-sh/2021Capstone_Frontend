import { combineReducers } from "redux";
import user from "@src/reducers/user";
import refs from "@src/reducers/refs";
import recipe from "@src/reducers/recipe";

const rootReducer = combineReducers({
	user,
	refs,
	recipe
});

export default rootReducer;
