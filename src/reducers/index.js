import { combineReducers } from 'redux'
import movement from './movement'
import end from './end'
import resize from './resize'

export default combineReducers({
  movement,
  end,
  resize
})
