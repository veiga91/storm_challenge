import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import SearchScreen from '../screens/Search';

// Routes
const Home = {
  screen: HomeScreen
};

const Detail = {
  screen: DetailScreen
};

const Search = {
  screen: SearchScreen
};

//Nnavigation config

const rootRoutesConfig = {
  initialRouteName: 'Home'
};

// Navigator
const Navigator = createStackNavigator({
  Home,
  Detail,
  Search
}, rootRoutesConfig);

export default createAppContainer(Navigator);