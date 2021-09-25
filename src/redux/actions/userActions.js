import {searchUser} from '../service/userServices'
import { USER } from "../constants/userConstants";

const beginApiCall = (params) => {
  return { type: USER.LIST_USER_START, params }
}

const apiCallError = error => {
  return { type: USER.LIST_USER_FAILED, error }
}

const apiCallSuccess = (data) => {
  return { type: USER.LIST_USER_SUCCEEDED, data }
}

export const searchUserAction = (searchString) => {
  return function(dispatch) {
    dispatch(beginApiCall(searchString));
    return searchUser(searchString)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch(apiCallSuccess(res.data))
        }else{
          const error = new Error(res.statusText);
          return dispatch(apiCallError(error))
        }
      })
      .catch((err) => {
        return dispatch(apiCallError(err))
      })
  }
}