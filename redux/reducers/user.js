export const initialState = {
  isLoggedIn: false,
  userInfo: null,
  loginLoading: false
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT = 'LOG_OUT'

const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN_REQUEST : {
      return {
        ...state,
        loginLoading: true
      }
    }
    case LOG_IN_SUCCESS : {
      return {
        ...state,
        isLoggedIn: true,
        loginLoading: false,
        userInfo: action.data
      }
    }
    case LOG_IN_FAILURE : {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
        loginLoading: false
      }
    }
    case LOG_OUT : {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null
      }
    }
    default : {
      return {...state}
    }
  }
}

export default reducer