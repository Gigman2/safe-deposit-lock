const initTimer = (payload, state, dispatch, resetPayload, timeoutDispatch, timestamp_key, time) => {
    let timeoutHandle = null
    if( state[timestamp_key] !== null) {
        timeoutHandle = state[timestamp_key]
        window.clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(() => dispatch(timeoutDispatch.action(timeoutDispatch.key, resetPayload)), time);
    payload.timestamp = timeoutHandle
    return payload
}

export const triggerTimer = (key, state, dispatch, resetPayload, timestamp_key, time,callbackDispatch, timeoutDispatch) => {
    let payload = {}
    payload = initTimer(payload, state, dispatch, resetPayload, timeoutDispatch, timestamp_key, time)
    payload.state = key
    dispatch(callbackDispatch.action(callbackDispatch.key, payload))
}