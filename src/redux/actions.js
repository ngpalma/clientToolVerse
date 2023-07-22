import axios from "axios";

import {
  GET_TOOLS,
  GET_TOOLS_BY_NAME,
  GET_TOOLS_BY_ID,
  CREATE_USER,
  GET_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  SET_CURRRENT_PAGE,
  CLEAN_BDD,
  CHANGE_FILTER_CATEGORY,
  CHANGE_FILTER_BRAND,
  REGISTER_STOCK_ENTRY_SUCCESS,
  REGISTER_STOCK_ENTRY_FAILURE,
  REGISTER_STOCK_EXIT_SUCCESS,
} from "./type";

export const getToolsByName = (tool) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`/products?name=${tool}`);
      if (response) {
        dispatch({
          type: GET_TOOLS_BY_NAME,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTools = () => {
  return async function (dispatch) {
    try {
      const tools = await axios.get(`/products`);
      if (tools) {
        dispatch({ type: GET_TOOLS, payload: tools.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getToolById = (id) => {
  return async function (dispatch) {
    try {
      const tools = await axios.get(`/products/${id}`);
      if (tools) {
        dispatch({ type: GET_TOOLS_BY_ID, payload: tools.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (character) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`/register`, character, { withCredentials: true });
      if (data) {
        dispatch({ type: CREATE_USER, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = (name) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`/user/${name}`);
      console.log("esta es la response en actions.getUser", response);
      if (response) {
        dispatch({ type: GET_USER, payload: response });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  try {
    return {
      type: REMOVE_FROM_CART,
      payload: itemId,
    };
  } catch (error) {
    console.log(error);
  }
};

export const orderByName = (name) => {
  try {
    return {
      type: ORDER_BY_NAME,
      payload: name,
    };
  } catch (error) {
    console.log(error);
  }
};

export const orderByPrice = (price) => {
  try {
    return {
      type: ORDER_BY_PRICE,
      payload: price,
    };
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentPage = (page) => {
  try {
    return {
      type: SET_CURRRENT_PAGE,
      payload: page,
    };
  } catch (error) {
    console.log(error);
  }
};

export const cleanBdd = () => {
  try {
    return {
      type: CLEAN_BDD,
    };
  } catch (error) {
    console.log(error);
  }
};

export const changeFilterCategory = (category) => {
  return {
    type: CHANGE_FILTER_CATEGORY,
    payload: category
  }
};

export const changeFilterBrand = (brand) => {
  return {
    type: CHANGE_FILTER_BRAND,
    payload: brand
  }
};
// Acción para registrar una entrada de stock
export const registerStockEntry = (toolId, quantity) => async (dispatch) => {
  try {
    const response = await axios.post(`/stock/entrada/${toolId}/${quantity}`);
    dispatch({
      type: REGISTER_STOCK_ENTRY_SUCCESS,
      payload: { id: toolId, stock: response.data.stock },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_STOCK_ENTRY_FAILURE,
      payload: error.response.data.error,
    });
  }
};

// Acción para registrar una salida de stock
export const registerStockExit = (toolId, quantity) => async (dispatch) => {
  try {
    const response = await axios.post(`/stock/salida/${toolId}/${quantity}`);
    dispatch({
      type: REGISTER_STOCK_EXIT_SUCCESS,
      payload: { id: toolId, stock: response.data.stock },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_STOCK_EXIT_SUCCESS,
      payload: error.response.data.error,
    });
  }
};