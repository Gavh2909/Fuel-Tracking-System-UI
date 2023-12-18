// authReducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actionTypes";

const initialState = {
  userData: null,
  loginStatus:false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loginStatus:true,
        error: null,
      };

     
    case LOGIN_FAILURE:
      return {
        ...state,
        userData: null,
        loginStatus: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
