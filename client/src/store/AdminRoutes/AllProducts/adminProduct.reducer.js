import {
  GET_ADMIN_PRODUCT_ERROR,
  GET_ADMIN_PRODUCT_LOADING,
  GET_ADMIN_PRODUCT_SUCCESS,
} from "./adminProduct.types";

const initalState = {
  loading: false,
  error: false,
  data: [],
};

export const adminProductReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ADMIN_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ADMIN_PRODUCT_SUCCESS: {
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
