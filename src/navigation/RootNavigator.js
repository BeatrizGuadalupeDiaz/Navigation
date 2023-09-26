import { NavigationContainer } from "@react-navigation/native"
import MyStack from "./MyStack";
import MyDrawer from "./MyDrawer";
import MyAuthStack from "./MyAuthStack";
import MyTopTab from "./MyTopTab";

export default function RootNavigator () {
  const user = true;
  return (
    <NavigationContainer>
        {user ? <MyStack/> : <MyAuthStack/>}
    </NavigationContainer>
  );
}
