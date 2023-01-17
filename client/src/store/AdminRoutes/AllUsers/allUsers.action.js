import axios from "axios";
import {
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_LOADING,
  GET_ALL_USERS_SUCCESS,
} from "./allUsers.types";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOADING });
  try {
    let response = await axios.get(
      "https://sephora-backend.onrender.com/users"
    );
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USERS_ERROR,
      payload: e.message,
    });
  }
};
