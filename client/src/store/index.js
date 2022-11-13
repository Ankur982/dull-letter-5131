import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allOrdersReducer } from "./AdminRoutes/Allorders/allOrders.reducer";
import { adminProductReducer } from "./AdminRoutes/AllProducts/adminProduct.reducer";
import { allUsersReducer } from "./AdminRoutes/AllUsers/allUsers.reducer";
import { singleProductReducer } from "./SingleProduct/singleProduct.reducer";

const rootReducer = combineReducers({
  singleProduct: singleProductReducer,
  adminProducts: adminProductReducer,
  allUsers: allUsersReducer,
  allOrders: allOrdersReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
