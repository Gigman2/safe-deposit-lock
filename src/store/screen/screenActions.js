/*
  FOR ACTION THAT REQUIRES A PAYLOAD
*/ 
export const genericAction = (type, payload) => {
  return {
    type,
    payload
  }
}



export function processData(payload) {
  return async function processInput(dispatch, getState) {
    const stateBefore = getState()
    await setTimeout(() => console.log('Timer is now called ... ', stateBefore), 10000)
  }
}