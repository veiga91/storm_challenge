import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from '../screens/Home';

// Routes
const Home = {
  screen: HomeScreen
};

//Nnavigation config

const rootRoutesConfig = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

// Navigator
const Navigator = createStackNavigator({
  Home
}, rootRoutesConfig);

export default createAppContainer(Navigator);