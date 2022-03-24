const messages = ['Ready',  'Locking...', 'Unlocking...', 'Service', 'Validating']

const initialState = {
    value: '',
    isLocked: false,
    backlight_state: 'off',
    backlight_timestamp: null
}

const screenReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UNLOCKED': return {
      ...state, 
      isLocked: false
    }
    case 'LOCKED': return {
      ...state, 
      isLocked: true
    }
    case 'SET_MESSAGE': return {
      ...state,
      value: action.payload === 5 ? state.code : messages[action.payload]
    }
    case 'BACKLIGHT_TRIGGERED': return {
      ...state,
      backlight_state: action.payload.state,
      backlight_timestamp: action.payload.timestamp 
    }
    default: return state
  }
}

export default screenReducer