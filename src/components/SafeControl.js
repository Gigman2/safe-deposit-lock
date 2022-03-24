import Screen from 'components/Screen';
import Keypad from 'components/ButtonSection';
import {triggerBacklight} from 'helpers'
import { useDispatch, useSelector } from 'react-redux';

function SafeControl() {
  const screenState = useSelector(state => state.screen)
 const dispatch = useDispatch() 

  const activateBacklight = () => {
    triggerBacklight('on', screenState, dispatch)
  }
  
  return (
    <div className='safe-panel' onClick={() => activateBacklight()}>
        <Screen />
        <Keypad />
    </div>
  );
}

export default SafeControl;
