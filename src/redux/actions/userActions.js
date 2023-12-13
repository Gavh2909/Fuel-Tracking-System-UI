

import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

// export const loginSuccess = (userData) => ({
//   type: LOGIN_SUCCESS,
//   payload: userData,
// });

export function loginSuccess(data){
  return{
      type:LOGIN_SUCCESS,
      payload:data
  }
}

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
