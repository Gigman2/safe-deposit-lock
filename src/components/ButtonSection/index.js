import { useDispatch } from 'react-redux'
import { addChar, setScreenMessage } from 'store'

const SafeButton = ({value}) => {
  const dispatch = useDispatch()
  const handleKeyPress = (number) => {
    dispatch(addChar(number))
    dispatch(setScreenMessage(5))
  }

  return (<div className='button-section__row__button' onClick={() => handleKeyPress(value)}>{value}</div>)
}


function ButtonSection() {
    const len = 3
    return (
      <div className='button-section'>
        {Array(len).fill(0).map((_, i) => (<div className='button-section__row'>
          { Array(len).fill(0).map((_, j) => <SafeButton value={(len * (len -( i+1))) + (j + 1)} />)}
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
  