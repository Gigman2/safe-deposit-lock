
import { setBacklight } from 'store'

export const triggerBacklight = (key='on', state, dispatch) => {
    let payload = {}
    if(key === 'on') {
        console.log('_KEY IS ')
        const timeoutHandle = window.setTimeout(() => dispatch(setBacklight({state: 'off', timestamp: null})), 5000);
        payload.timestamp = timeoutHandle
    }else {
        if( state.backlight_timestamp !== null) {
            const timeoutHandle = state.backlight_timestamp
            window.clearTimeout(timeoutHandle);
        }
        payload.timestamp =  window.setTimeout(dispatch(setBacklight({state: 'off', timestamp: null})), 5000);
    }
    payload.state = 'on'
    dispatch(setBacklight(payload))
}