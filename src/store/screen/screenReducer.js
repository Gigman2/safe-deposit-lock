const messages = ['Ready',  'Locking...', 'Unlocking...', 'Service', 'Validating', 'Error']

const initialState = {
    savedCode: '',
    code: '',
    code_timestamp: null,

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
    case 'SET_MESSAGE': {
      console.log('Setting message here' , action.payload, state)
      return {
      ...state,
      value: action.payload === 6 ? state.code : messages[action.payload]
    }}
    case 'BACKLIGHT_TRIGGERED': return {
      ...state,
      backlight_state: action.payload.state,
      backlight_timestamp: action.payload.timestamp 
    }

    case 'KEYPAD':{
      return {
      ...state,
      code: state.code.length < 23 ? state.code.concat(action.payload.state) : state.value,
      code_timestamp: action.payload.timestamp 
    }}

    case 'PROCESS_VALUE':{
      const newState = {...state}
      if(state.savedCode === ''){
        newState.savedCode = state.code
        newState.value = messages[1]
        newState.isLocked = true
      } else {
        newState.value = messages[4]
        if(state.savedCode == state.code){
          newState.value = messages[2]
          newState.isLocked = false
        } else {
          newState.value = messages[2]
        }
      }
      newState.code = ''
      return newState
    }
    default: return state
  }
}

export default screenReducer