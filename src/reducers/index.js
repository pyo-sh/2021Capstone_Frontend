import { combineReducers } from "redux";
import user from "@src/reducers/user";
import refs from "@src/reducers/refs";

const rootReducer = combineReducers({
	user,
	refs
});

export default rootReducer;
