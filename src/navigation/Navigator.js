import { StackNavigator } from "react-navigation";

import Home from "../components/App";
import Map from "../components/Map";

const Navigator = new StackNavigator(
  {
    Home: { screen: Home },
    Map: { screen: Map }
  },
  {
    initialRouteName: "Home"
  }
);

export default Navigator;
