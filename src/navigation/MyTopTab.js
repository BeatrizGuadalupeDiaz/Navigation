import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../constants/colors";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const HomeTab = createMaterialTopTabNavigator();
const MyTopTab = () => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        tabBarStyle: {},
        tabBarLabelStyle: { color: Colors.secondary },
        tabBarIndicatorStyle: {backgroundColor: Colors.primary}
      }}
    >
      <HomeTab.Screen name="Home" component={Home} />
      <HomeTab.Screen name="Profile" component={Profile} />
    </HomeTab.Navigator>
  );
};

export default MyTopTab;
