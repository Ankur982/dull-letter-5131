import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.types";

const initalState = {
  loading: false,
  error: false,
  data: {},
};

export const singleProductReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case GET_SINGLEPRODUCT_SUCCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLEPRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLEPRODUCT_SUCCESS: {
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
