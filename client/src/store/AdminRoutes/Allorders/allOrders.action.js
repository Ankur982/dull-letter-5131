import axios from "axios";
import {
  GET_ALL_ORDERS_ERROR,
  GET_ALL_ORDERS_LOADING,
  GET_ALL_ORDERS_SUCCESS,
} from "./allOrders.types";

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDERS_LOADING });
  try {
    let response = await axios.get("http://localhost:8080/orders");
    dispatch({
      type: GET_ALL_ORDERS_SUCCESS,
      payload: response.data,
    });
    consle.log(response.data);
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDERS_ERROR,
      payload: e.message,
    });
  }
};
