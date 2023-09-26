import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";
import { Colors } from "../constants/colors";
import { View, Text } from "react-native";
import MyTab from "./MyTab";
import MyDrawer from "./MyDrawer";

const HomeStack = createStackNavigator();

function CustomHeader({ title }) {
  return (
    <View
      style={{
        height: 80,
        width: "100%",
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: Colors.ligth,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
const myConfig = {
  headerShown: false,
  headerTitleAlign: "center",
  headerTintColor: Colors.secondary,
  presentation: "modal",
  gestureEnabled: true,
  keyboardHandlingEnabled: true,
  /* header: ({ navigate, route, options, back }) => (
    <CustomHeader title={route.name} />
  ), */
};

const MyStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <HomeStack.Screen name="MyDrawer" component={MyDrawer} />
      {/* <HomeStack.Screen name="Tab" component={MyTab} /> */}
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen
          name="Settings"
          component={Settings}
          options={{ headerBackTitle: "Home" }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default MyStack;
