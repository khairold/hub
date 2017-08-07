import { connect } from 'react-redux'
import Today from './Today'

const mapStateToProps = state => {
  return {
    apps: state.apps
  }
}

export default connect(mapStateToProps)(Today)
