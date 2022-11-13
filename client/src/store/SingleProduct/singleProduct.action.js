import axios from "axios";

import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.types";

const config = {
  headers: {
    token: JSON.parse(localStorage.getItem("token")),
  },
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLEPRODUCT_LOADING });

  try {
    let response = await axios.get(
      `https://sephorabackend-production.up.railway.app/products/find/${id}`
    );
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

export const addProductCart = (data) => async (dispatch) => {
  try {
    let response = await axios.post(
      "https://sephorabackend-production.up.railway.app/carts",
      data,
      config
    );
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};
