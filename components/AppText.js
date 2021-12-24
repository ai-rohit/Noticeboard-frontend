import {Text, Platform, StyleSheet} from "react-native";
import colors from "../config/color";

function AppText({children, customStyles}){
    return (
        <Text style={[styles.text, customStyles]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.mainWhite
    }
});

export default AppText;