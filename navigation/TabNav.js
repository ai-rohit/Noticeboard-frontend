import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View, Text, StyleSheet} from "react-native";
import { MaterialCommunityIcons, Fontisto, Feather } from "@expo/vector-icons";
import colors from "../config/color";
import GroupList from "../components/GroupList";
import Groups from "../screens/Groups";
import Login from "../screens/Login";
import JoinGroup from "../screens/JoinGroup";

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  const TabNav = ()=>{
      return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarActiveTintColor: colors.dimWhite,
          tabBarStyle:{
            backgroundColor: "#000",
            position:"absolute",
            borderTopWidth: 0,
            bottom: 15,
            left: 15,
            right: 15,
            borderRadius: 10,
            height:60,
            width:"90%"
          }
        }} >
          <Tab.Screen name="Home" component={Groups} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              size={35}
              color={colors.mainWhite}
              style={{ paddingRight:10}}
            />
          ),
        }} />
          <Tab.Screen name="Settings" component={JoinGroup}  options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="hand-heart"
              size={35}
              color={colors.mainWhite}
              style={{ paddingRight:10}}
            />
          ),
        }}/>
        </Tab.Navigator>
      )
  }

export default TabNav;