import { createDrawerNavigator } from "@react-navigation/drawer"
import MyTopTab from "./MyTopTab";
import News from '../screens/News'

const HomeDrawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <HomeDrawer.Navigator>
        <HomeDrawer.Screen name="MyTopTab" component={MyTopTab} options={{headerTitle: 'Navigation App'}}/>
        <HomeDrawer.Screen name="News" component={News}/>
    </HomeDrawer.Navigator>
  )
}

export default MyDrawer