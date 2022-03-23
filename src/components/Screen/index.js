import { useSelector } from 'react-redux'

function Screen() {
    const message = useSelector(state => state.screen.value)
    return (
        <div className='screen'>
            <p className="screen__status">{'Unlocked'}</p>
            <div className='screen__inner-box'>
            <p className="screen__inner-box__message">{message}</p>
            </div>
        </div>
    );
}

export default Screen;
