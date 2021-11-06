// Redux 기본 Setting
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// Redux / Saga 나의 Setting
import rootReducer from "@src/reducers";
import rootSaga from "@src/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
