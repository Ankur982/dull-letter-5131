import {
  GET_ALL_ORDERS_ERROR,
  GET_ALL_ORDERS_LOADING,
  GET_ALL_ORDERS_SUCCESS,
} from "./allOrders.types";

const initalState = {
  loading: false,
  error: false,
  data: [],
};

export const allOrdersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ALL_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ALL_ORDERS_SUCCESS: {
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
