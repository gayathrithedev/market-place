// globals
import React from 'react';

// redux
import {Provider} from 'react-redux';

// navigator
import RootNavigator from './src/navigation';

// store
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
