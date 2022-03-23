const messages = ['Ready',  'Locking...', 'Unlocking...', 'Service', 'Validating']

const initialState = {
    isLocked: false,
    value: '',
    savedCode: '',
    code: '',
    backlight: 'off'
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
    case 'KEYPAD': return {
      ...state,
      code: state.value.length < 23 ? state.value.concat(action.payload) : state.value
    }
    case 'SET_MESSAGE': return {
      ...state,
      value: action.payload === 5 ? state.code : messages[action.payload]
    }
    case 'SET_BACKLIGHT': return {
      ...state,
      backlight: action.payload
    }
    default: return state
  }
}

export default screenReducer