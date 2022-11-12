import axios from "axios";
import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.types";

const config = {
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjOTI3OTdiYTVlOGIyNDhmNzM3OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgyNzA0MTAsImV4cCI6MTY2ODUyOTYxMH0.b18kw0RyMGVasfzhdr-2iT3QgXn6fZQtNgM1vmmj6NQ",
  },
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLEPRODUCT_LOADING });
  try {
    let response = await axios.get(`http://localhost:8080/products/find/${id}`);
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
      "http://localhost:8080/carts",
      data,
      config
    );
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};
