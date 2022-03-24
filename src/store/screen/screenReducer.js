export const messages = ['Ready',  'Locking...', 'Unlocking...', 'Service', 'Validating', 'Error']

const initialState = {
    savedCode: '',
    code: '',
    code_timestamp: null,
    inputDisabled: false,
    value: '',
    isLocked: false,
    backlight_state: 'off',
    backlight_timestamp: null,
    service_mode: false
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
    case 'SET_MESSAGE': {
      let newState = {...state}
      if(!state.inputDisabled){
        newState.value = action.payload === 6 ? state.code : messages[action.payload]
      }
      return newState}
    case 'BACKLIGHT_TRIGGERED': return {
      ...state,
      backlight_state: action.payload.state,
      backlight_timestamp: action.payload.timestamp 
    }

    case 'KEYPAD':{
      let newState = {...state}
      if(!state.inputDisabled){
        newState.code = state.code.length < 23 ? state.code.concat(action.payload.state) : state.value
        newState.code_timestamp = action.payload.timestamp 
      }
      return newState
    }
    case 'START_LOCK': {
      return {
        ...state,
        savedCode: state.code,
        value: messages[1],
        inputDisabled: true
      }
    }
    case 'LOCK_SUCCESSFUL': {
      return {
        ...state,
        isLocked: true,
        value: messages[0],
        code: '',
        inputDisabled: false
      }
    }
    case 'VALIDATION': {
      return {
        ...state,
        value: messages[4],
        inputDisabled: true
      }
    }
    case 'START_UNLOCK': {
      return {
        ...state,
        value: messages[2],
      }
    }
    case 'UNLOCK_SUCCESSFUL': {
      return {
        ...state,
        isLocked: false,
        savedCode: '',
        code: '',
        value: messages[0],
        inputDisabled: false
      }
    }
    case 'UNLOCK_FAILED': {
      return {
        ...state,
        code: '',
        value: messages[5],
        inputDisabled: false
      }
    }

    default: return state
  }
}

export default screenReducer