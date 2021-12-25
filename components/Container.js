import {Platform, StatusBar, SafeAreaView, View, StyleSheet} from "react-native"

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
    }
})

export default Container;