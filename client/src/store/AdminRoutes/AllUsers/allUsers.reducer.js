import {
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_LOADING,
  GET_ALL_USERS_SUCCESS,
} from "./allUsers.types";

const initalState = {
  loading: false,
  error: false,
  data: [],
};

export const allUsersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ALL_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
