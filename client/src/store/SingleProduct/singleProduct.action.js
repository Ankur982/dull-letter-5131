import axios from "axios";
import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.types";

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLEPRODUCT_LOADING });
  try {
    let response = await axios.get(`http://localhost:8080/${id}`);
    dispatch({
      type: GET_SINGLEPRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SINGLEPRODUCT_ERROR,
      payload: e.message,
    });
  }
};
