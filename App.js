import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { useScreens } from 'react-native-screens';
import AppRoutes from './src/navigation/Router';

useScreens();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
