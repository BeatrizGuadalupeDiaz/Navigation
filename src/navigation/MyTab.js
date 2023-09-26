import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const HomeTab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'green'}
        }}
      />
    </HomeTab.Navigator>
  );
};

export default MyTab;
