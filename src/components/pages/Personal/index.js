import { connect } from 'react-redux'
import Personal from './Personal'

const mapStateToProps = state => {
  return {
    apps: state.apps.filter(app => app.personal)
  }
}

export default connect(mapStateToProps)(Personal)
