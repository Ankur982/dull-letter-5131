import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { singleProductReducer } from "./SingleProduct/singleProduct.reducer";

const rootReducer = combineReducers({
  singleProduct: singleProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
