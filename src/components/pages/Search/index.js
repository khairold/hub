import { connect } from 'react-redux'
import Search from './Search'

const mapStateToProps = state => {
  return {
    apps: state.apps
  }
}

export default connect(mapStateToProps)(Search)
