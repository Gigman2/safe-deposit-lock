import Screen from 'components/Screen';
import Keypad from 'components/ButtonSection';
import {triggerTimer} from 'helpers'
import { useDispatch, useSelector } from 'react-redux';
import { genericAction } from 'store'

function SafeControl() {
  const state = useSelector(state => state)
  const dispatch = useDispatch() 

  const activateBacklight = () => {
    triggerTimer(
      'on', 
      state, 
      dispatch, 
      {state: 'off', timestamp: null}, 
      'backlight_timestamp', 
      5000, 
      {action: genericAction, key: 'BACKLIGHT_TRIGGERED'}, 
      {action : genericAction, key: 'BACKLIGHT_TRIGGERED'}
    )
  }
  
  return (
    <div className='safe-panel' onClick={() => activateBacklight()}>
        <Screen />
        <Keypad />
    </div>
  );
}

export default SafeControl;
