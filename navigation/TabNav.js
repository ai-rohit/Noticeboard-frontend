import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet} from "react-native";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/color";
import Groups from "../screens/Groups";
import JoinGroup from "../screens/JoinGroup";
import CreateGroup from "../screens/CreateGroup";

  const Tab = createBottomTabNavigator();

  const TabNav = ()=>{
      return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel:false,
          
          tabBarActiveTintColor: colors.dimWhite,
          tabBarStyle:styles.tab
        }} >
          <Tab.Screen name="Home" component={Groups} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-group"
              size={28}
              color={colors.dimWhite}
              style={{ paddingRight:10}}
            />
          ),
        }} />
          <Tab.Screen name="Settings" component={CreateGroup}  options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-profile"
              size={28}
              color={colors.dimWhite}
            />
          ),
        }}
        />
        </Tab.Navigator>
      )
  }
const styles = StyleSheet.create({
  //#0d0c10
  //#1c1b22
  tab:{
    backgroundColor: "#363642",
    position:"absolute",
    borderTopWidth: 0,
    bottom: 15,
    left: 15,
    right: 15,
    borderRadius: 10,
    height:60,
    width:"92%",
    paddingBottom:5,
  }
})
export default TabNav;