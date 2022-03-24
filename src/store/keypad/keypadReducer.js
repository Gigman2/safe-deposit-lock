
const initialState = {
    savedCode: '',
    code: '',
}

const keypadReducer = (state = initialState, action) => {
    switch(action.type){
      case 'KEYPAD': return {
        ...state,
        code: state.value.length < 23 ? state.value.concat(action.payload) : state.value
      }
      default: return state
    }
  }
  
  export default keypadReducer