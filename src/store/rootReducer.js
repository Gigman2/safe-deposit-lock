import { combineReducers } from 'redux'
import screenReducer from './screen/screenReducer'

const rootReducer = combineReducers({
  screen: screenReducer,
})

export default rootReducer