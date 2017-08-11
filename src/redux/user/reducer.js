initialState = {
  authenticated: 'false',
  failedLoginMessage: ' '
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_TRUE':
      return { ...state, authenticated: 'true', failedLoginMessage: ' ' }
    case 'AUTHENTICATION_FALSE':
      return {
        ...state,
        authenticated: 'false',
        failedLoginMessage: 'Wrong Staff ID or Password'
      }
    case 'CLEAR_MESSAGE':
      return { ...state, failedLoginMessage: ' ' }
    case 'UPDATE':
      return { ...state }
    default:
      return state
  }
}
