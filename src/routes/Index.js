import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from '../components/pages/Login'
import Stack from './Stack'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Index extends Component {
  render() {
    const { user } = this.props
    return user.authenticated === 'true' ? <Stack /> : <Login />
  }
}

export default connect(mapStateToProps)(Index)
