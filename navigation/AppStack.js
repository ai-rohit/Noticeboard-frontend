import { createStackNavigator } from "@react-navigation/stack";
import React, {useContext} from "react";
import {ModalContext} from "../context/context";
import Groups from "../screens/Groups";
import NoticeScreen from "../screens/NoticeScreen";
import {TouchableOpacity, Image, StyleSheet, Modal} from "react-native"

const Stack = createStackNavigator();

function AppStack(){
  const modalContext = useContext(ModalContext);

  const handleProfilePress = ()=>{
    const isModalVisible = modalContext.isProfileModalOpen;
    console.log(isModalVisible);
    modalContext.setIsProfileModalOpen(!isModalVisible);
  }

  return(
    <Stack.Navigator screenOptions={{
      // headerTransparent: true,
      headerTintColor: "white",
      headerMode:"float",
      headerTitleStyle:{
        fontSize:20,
      },
      headerRight: ()=>(
        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require("../assets/images/eleven.png")} style={styles.image}/>
        </TouchableOpacity>
      ),
      headerStyle:{
        backgroundColor:"#363642",
        borderBottomColor:"#363642",
        shadowColor: "transparent"
      }
    
    }}>
      <Stack.Screen name="GroupList" component={Groups} options={{title:"Groups"}}/>
      <Stack.Screen name="Notices" component={NoticeScreen} options={{title:"Notices"}}/>

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  image:{
    height:30,
    width:30,
    borderRadius:15,
    marginRight:10,
    alignSelf: "center"
  }
})
export default AppStack;