export const unlockSafe = () => {
  return {
    type: 'UNLOCKED'  }
}

export const lockSafe = () => {
    return {
      type: 'UNLOCKED'  }
}

export const addChar = (number) => {
    return {
      type: 'KEYPAD',
      payload: number
    }
}

export const setScreenMessage = (key = 0) => {
    return {
        type: 'SET_MESSAGE',
        payload:key
      }
}

export const setBacklight = (payload) => {
    return {
        type: 'BACKLIGHT_TRIGGERED',
        payload 
      }
}
