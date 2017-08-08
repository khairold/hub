import { connect } from 'react-redux'
import Updates from './Updates'

const mapStateToProps = state => {
  return {
    apps: state.apps
  }
}

export default connect(mapStateToProps)(Updates)
