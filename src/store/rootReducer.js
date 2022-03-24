import { combineReducers } from 'redux'
import screenReducer from './screen/screenReducer'
import keypadReducer from './keypad/keypadReducer'

const rootReducer = combineReducers({
  screen: screenReducer,
  keypad: keypadReducer
})

export default rootReducer