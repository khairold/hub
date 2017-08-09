import { connect } from 'react-redux'
import Customer from './Customer'

const mapStateToProps = state => {
  return {
    apps: state.apps.filter(app => app.customer)
  }
}

export default connect(mapStateToProps)(Customer)
