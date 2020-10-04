import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import ProductInfo from "../screens/ProductInfo";
import Profile from "../screens/Profile";
import Checkout from "../screens/Checkout";
import Search from "../screens/search";
const Screens = {
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Checkout: {
    screen: Checkout,
  },
  Profile: {
    screen: Profile,
  },
  ProductView: {
    screen: ProductInfo,
  },
};

const HomeStack = createStackNavigator(Screens);

export default createAppContainer(HomeStack);
