import './App.scss';
import { Provider } from 'react-redux'
import reduxStore from './store/store'
import SafeControl from 'components/SafeControl';
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <Provider store={reduxStore.store}> 
    <PersistGate loading={null} persistor={reduxStore.persistor}>
      <div className="App">
        <SafeControl />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
