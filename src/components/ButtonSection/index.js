import { useDispatch, useSelector } from 'react-redux'
import { genericAction, processData } from 'store'
import {triggerTimer} from 'helpers'

const SafeButton = ({value}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const handleKeyPress = (number) => {
    triggerTimer(
      number, 
      state, 
      dispatch, 
      null, 
      'code_timestamp', 
      1200, 
      {action: processData, key: 'KEYPAD'}, 
      {action: genericAction, key: 'PROCESS_VALUE'}
    )
    dispatch(genericAction('SET_MESSAGE',6))
  }

  return (<div className='button-section__row__button' onClick={() => handleKeyPress(value)}>{value}</div>)
}


function ButtonSection() {
    const len = 3
    return (
      <div className='button-section'>
        {Array(len).fill(0).map((_, i) => (<div className='button-section__row'>
          { Array(len).fill(0).map((_, j) => <SafeButton key={(len * (len -( i+1))) + (j + 1)} value={(len * (len -( i+1))) + (j + 1)} />)}
        </div>))}
        <div className='button-section__row'>
          <SafeButton value={'*'} />
          <SafeButton value={0} />
          <SafeButton value={'L'} />
        </div>
      </div>
    );
  }
  
  export default ButtonSection;
  