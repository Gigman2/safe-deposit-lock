import './App.css';
import Screen from './components/Screen';
import Keypad from './components/ButtonSection';
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='safe-panel'>
          <Screen />
          <Keypad />
        </div>
      </div>
    </Provider>
  );
}

export default App;
