import {View, StyleSheet, Text} from "react-native"
import colors from "../config/color";

function Header(props) {
    return (
        <View style={styles.header}>
            <View>
                <Text>Header</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        alignItems:"flex-start",
        backgroundColor: colors.mainDark,
    }
})
export default Header;