export const tryLogin = (staffId, password) => {
  return dispatch => {
    logInToHub(staffId, password)
      ? dispatch(authenticateTrue())
      : dispatch(authenticateFalse())
  }
}

export const clearMessage = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

const authenticateTrue = () => {
  return {
    type: 'AUTHENTICATION_TRUE'
  }
}

const authenticateFalse = () => {
  return {
    type: 'AUTHENTICATION_FALSE'
  }
}

const logInToHub = (staffId, password) => {
  // if (staffId === 's51811' && password === '1') {
  if (staffId === 'ss' && password === 'a') {
    return true
  } else {
    return false
  }
}
