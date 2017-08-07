import { connect } from 'react-redux'
import Work from './Work'

const mapStateToProps = state => {
  return {
    apps: state.apps.filter(app => app.work)
  }
}

export default connect(mapStateToProps)(Work)
