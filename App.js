import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { useScreens } from 'react-native-screens';
import AppRoutes from './src/navigation/Router';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/appTheme';

useScreens();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
