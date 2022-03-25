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
        if(_state.savedCode === _state.code){
          dispatch(genericAction('START_UNLOCK'))
          await setTimeout(() =>  dispatch(genericAction('UNLOCK_SUCCESSFUL')), 1500)
        } else {
          dispatch(genericAction('SERVICE_MODE'))
        }
      }else if(_state.service_mode){
        dispatch(genericAction('SET_MESSAGE', 3))
        dispatch(masterUnlock())
      }
      else{
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
    const _state = getState()
    axios.get(`https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=${_state.code}`)
    .then(async res => {
      const sn = res?.data?.sn
      if(sn === _state.sn){
        dispatch(genericAction('START_UNLOCK'))
        await setTimeout(() =>  dispatch(genericAction('UNLOCK_SUCCESSFUL')), 1500)
        dispatch(genericAction('SERVICE_MODE'))
      }else {
        dispatch(genericAction('SET_MESSAGE', 3))
        dispatch(genericAction('UNLOCK_FAILED'))
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}