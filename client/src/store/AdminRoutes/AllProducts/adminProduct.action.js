import axios from "axios";
import {
  GET_ADMIN_PRODUCT_ERROR,
  GET_ADMIN_PRODUCT_LOADING,
  GET_ADMIN_PRODUCT_SUCCESS,
} from "./adminProduct.types";

export const getAdminProducts = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_PRODUCT_LOADING });
  try {
    let response = await axios.get(
      "https://sephora-backend.onrender.com/products/"
    );
    dispatch({
      type: GET_ADMIN_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ADMIN_PRODUCT_ERROR,
      payload: e.message,
    });
  }
};
