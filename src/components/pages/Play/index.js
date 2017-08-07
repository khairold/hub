import { connect } from 'react-redux'
import Play from './Play'

const mapStateToProps = state => {
  return {
    apps: state.apps.filter(app => app.play)
  }
}

export default connect(mapStateToProps)(Play)
