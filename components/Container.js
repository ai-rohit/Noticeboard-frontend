import {Platform, StatusBar, SafeAreaView, View, StyleSheet} from "react-native"
import colors from "../config/color";

function Container({children, style}){
    if(  Platform.OS === "android" ){
        return(
            <View style={[styles.container, style]}>{children}</View>
        )
    }
    return (
        <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.primaryColor,
        paddingBottom: 50
        // marginBottom: 100
    }
})

export default Container;