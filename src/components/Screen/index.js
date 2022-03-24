import { useSelector } from 'react-redux'

function Screen() {
    const screen = useSelector(state => state.screen)
    return (
        <div className={`screen ${screen.backlight_state === 'on' ? 'screen__on' : ''}`}>
            <p className="screen__status">{'Unlocked'}</p>
            <div className='screen__inner-box'>
            <p className="screen__inner-box__message">{screen.message}</p>
            </div>
        </div>
    );
}

export default Screen;
