import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/AuthScreen/Login";

const HomeAuth = createStackNavigator();
const MyAuthStack = () => {
  return (
    <HomeAuth.Navigator>
      <HomeAuth.Screen name="Login" component={Login}/>
    </HomeAuth.Navigator>
  )
}

export default MyAuthStack