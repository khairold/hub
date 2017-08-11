import { connect } from 'react-redux'
import Login from './Login'

import { tryLogin, clearMessage } from '../../../redux/user/action'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (staffId, password) => {
      dispatch(tryLogin(staffId, password))
    },
    onClearMessage: () => {
      dispatch(clearMessage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
