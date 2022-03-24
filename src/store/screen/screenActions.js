import axios from "axios"
export const genericAction = (type, payload) => {
  return {
    type,
    payload
  }
}


export function processData(key, payload) {
  return async function processInput(dispatch, getState) {
    const _state = getState()
    if(_state.savedCode === ''){
      dispatch(genericAction('START_LOCK'))
      await setTimeout(() =>  dispatch(genericAction('LOCK_SUCCESSFUL')), 3000)
    } else {
      if(_state.code === '000000'){
        dispatch(genericAction('SERVICE_MODE'))
      }else{
        dispatch(genericAction('VALIDATION'))
        await setTimeout(() =>  null, 1500)
        if(_state.savedCode === _state.code){
          dispatch(genericAction('START_UNLOCK'))
          await setTimeout(() =>  dispatch(genericAction('UNLOCK_SUCCESSFUL')), 1500)
        } else {
          await setTimeout(() =>  dispatch(genericAction('UNLOCK_FAILED')), 1500)
        }
      }
    }
  }
}

export function masterUnlock() {
  return async function fetchMasterCode(dispatch, getState) {
    axios.get('https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=456R987L0123')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
}