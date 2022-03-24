import { useSelector } from 'react-redux'

function Screen() {
    const state = useSelector(state => state)
    return (
        <div className={`screen ${state.backlight_state === 'on' ? 'screen__on' : ''}`}>
            <p className="screen__status">{state.isLocked ? 'Locked' : 'Unlocked'}</p>
            <div className='screen__inner-box'>
            <p className="screen__inner-box__message">{state.value}</p>
            </div>
        </div>
    );
}

export default Screen;
