import {TextInput, StyleSheet, Dimensions} from "react-native";
import colors from "../config/color";

function TextBox({placeholder, onChange, value}){
    return (
        <TextInput style={styles.textbox} placeholder={placeholder} onChangeText={(text)=> onChange(text)} value={value}/>
    );
}

const styles = StyleSheet.create({
    textbox: {
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        width: "80%",
        height: Dimensions.get("window").height / 16,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.mainWhite

    }
})

export default TextBox;