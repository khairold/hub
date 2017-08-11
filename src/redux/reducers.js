import { combineReducers } from 'redux'

import user from './user/reducer'
import apps from './apps/reducer'

export default combineReducers({
  user,
  apps
})
