import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

// Routes
const Home = {
  screen: HomeScreen
};

const Detail = {
  screen: DetailScreen
}

//Nnavigation config

const rootRoutesConfig = {
  initialRouteName: 'Home',
  //headerMode: 'none',
};

// Navigator
const Navigator = createStackNavigator({
  Home,
  Detail
}, rootRoutesConfig);

export default createAppContainer(Navigator);