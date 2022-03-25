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
    service_mode: false,
    sn: 4815162342
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
      if(!state.inputDisabled && !state.service_mode){
        if(action.payload === 6){
          newState.value = state.code
        }
      }else if(state.service_mode && action.payload === 6){
        newState.value = messages[3]
      }
      else{
        newState.value = messages[action.payload]
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
    case 'SERVICE_MODE': {
      let newState = {...state}
      if(state.service_mode){
        newState.service_mode = false
        newState.code = ''
        newState.value = messages[0]
      }else{
        newState.service_mode = true
        newState.code = ''
        newState.value = messages[3]
      }

      return newState
    }

    default: return state
  }
}

export default screenReducer