// PRODUCTS
const GET_TOOLS_BY_NAME = "GET_TOOLS_BY_NAME";
const GET_TOOLS = "GET_TOOLS";
const GET_TOOLS_BY_ID = "GET_TOOLS_BY_ID";
const ORDER_BY_NAME = "ORDER_BY_NAME";
const ORDER_BY_PRICE = "ORDER_BY_PRICE";
const CHANGE_FILTER_CATEGORY = "CHANGE_FILTER_CATEGORY";
const CHANGE_FILTER_BRAND = "CHANGE_FILTER_BRAND";
const GET_CATEGORY = "GET_CATEGORY";

// STOCK
const UPDATE_TOOL_STOCK = "UPDATE_TOOL_STOCK";
const REGISTER_STOCK_ENTRY_SUCCESS = "REGISTER_STOCK_ENTRY_SUCCESS";
const REGISTER_STOCK_ENTRY_FAILURE = "REGISTER_STOCK_ENTRY_FAILURE";
const REGISTER_STOCK_EXIT_SUCCESS = "REGISTER_STOCK_EXIT_SUCCESS";
const REGISTER_STOCK_EXIT_FAILURE = "REGISTER_STOCK_EXIT_FAILURE";

// USER
const CREATE_USER = "CREATE_USER";
const GET_USER = "GET_USER";
const GET_USER_ID = "GET_USER_ID";
const GET_USER_ID_ERROR = 'GET_USER_ID_ERROR'
const LOGIN = "LOGIN";
const VERIFY_LOGIN_SUCCESS = "VERIFY_LOGIN_SUCCESS";
const ERROR_LOGIN = "ERROR_LOGIN";
const CERRAR_SESION = "CERRAR_SESION";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
const ACTUAL_USER = "ACTUAL_USER";
const ISAUTHENTICATED = "ISAUTHENTICATED";
const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
const SET_LAST_VISITED_ROUTE = 'SET_LAST_VISITED_ROUTE';

// SHIPPING ADDRESS
const CREATE_SHIPPING_ADDRESS_SUCCESS = "CREATE_SHIPPING_ADDRESS_SUCCESS";
const CREATE_SHIPPING_ADDRESS_ERROR = "CREATE_SHIPPING_ADDRESS_ERROR";
const GET_SHIPPING_ADDRESS_SUCCESS = "GET_SHIPPING_ADDRESS_SUCCESS";
const GET_SHIPPING_ADDRESS_ERROR = "GET_SHIPPING_ADDRESS_ERROR";
const DELETE_SHIPPING_ADDRESS_SUCCESS = "DELETE_SHIPPING_ADDRESS_SUCCESS";
const DELETE_SHIPPING_ADDRESS_ERROR = "DELETE_SHIPPING_ADDRESS_ERROR";
const UPDATE_SHIPPING_ADDRESS_SUCCESS = "UPDATE_SHIPPING_ADDRESS_SUCCESS";
const UPDATE_SHIPPING_ADDRESS_ERROR = "UPDATE_SHIPPING_ADDRESS_ERROR";
const SELECT_ADDRESS = "SELECT_ADDRESS";
const ORDERS = 'ORDERS'
const DELETE_ORDER = 'DELETE_ORDER'

// REVIEWS
const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_REVIEW_COMMENTS = "UPDATE_REVIEW_COMMENTS";
const DELETE_REVIEW = "DELETE_REVIEW";


// CARRITO
const CREATE_CART_BDD = "CREATE_CART_BDD"
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LESS_FROM_CART = "LESS_FROM_CART";
const DELETE_TROLLEY = "DELETE_TROLLEY";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";
const PURCHASE_ORDER_SUCCESS = "PURCHASE_ORDER_SUCCESS";
const PURCHASE_ORDER_ERROR = "PURCHASE_ORDER_ERROR";

// PAGINADO
const SET_CURRRENT_PAGE = "SET_CURRENT_PAGE";

// BASE DE DATOS
const CLEAN_BDD = "CLEAN_BDD";
export {
  GET_TOOLS_BY_NAME,
  GET_TOOLS,
  GET_TOOLS_BY_ID,
  CREATE_USER,
  GET_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LESS_FROM_CART,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  SET_CURRRENT_PAGE,
  CLEAN_BDD,
  CHANGE_FILTER_CATEGORY,
  CHANGE_FILTER_BRAND,
  CERRAR_SESION,
  LOGIN,
  VERIFY_LOGIN_SUCCESS,
  ERROR_LOGIN,
  ISAUTHENTICATED,
  UPDATE_TOOL_STOCK,
  REGISTER_STOCK_ENTRY_SUCCESS,
  REGISTER_STOCK_EXIT_FAILURE,
  REGISTER_STOCK_EXIT_SUCCESS,
  REGISTER_STOCK_ENTRY_FAILURE,
  ACTUAL_USER,
  DELETE_TROLLEY,
  GET_CATEGORY,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  PURCHASE_ORDER_SUCCESS,
  PURCHASE_ORDER_ERROR,
  CREATE_SHIPPING_ADDRESS_SUCCESS,
  CREATE_SHIPPING_ADDRESS_ERROR,
  ADD_REVIEW,
  UPDATE_REVIEW_COMMENTS,
  DELETE_REVIEW,
  GET_USER_ID,
  GET_SHIPPING_ADDRESS_SUCCESS,
  GET_SHIPPING_ADDRESS_ERROR,
  DELETE_SHIPPING_ADDRESS_SUCCESS,
  DELETE_SHIPPING_ADDRESS_ERROR,
  UPDATE_SHIPPING_ADDRESS_SUCCESS,
  UPDATE_SHIPPING_ADDRESS_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SET_IS_AUTHENTICATED,
  SET_LAST_VISITED_ROUTE,
  GET_USER_ID_ERROR,
  CREATE_CART_BDD,
  ORDERS,
  DELETE_ORDER
};
