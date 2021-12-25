import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import colors from "../config/color";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Button({text, customStyles, onPress}){
    return (
        <TouchableOpacity style={[styles.button, customStyles]} onPress={()=>onPress(data)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.mainWhite,
        width: windowWidth * 0.8,
        height: windowHeight / 14,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: colors.primaryColor,
        fontSize: 16,
        fontWeight: "bold",
    }
})

export default Button;