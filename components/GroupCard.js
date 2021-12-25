import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import colors from "../config/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function GroupCard(){
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <View style={styles.bar}></View>
                <Text style={styles.text}>Group Name</Text>
            </View>
            <Image source={require("../assets/favicon.png")} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: width * 0.9,
        height: height * 0.2,
        backgroundColor: colors.mainDark,
        borderRadius: 15,
    },
    nameContainer:{
        flexDirection: "row",
        height: "30%",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 5,
        // backgroundColor:"red"
    },
    bar:{
        width: "3%",
        borderRadius: 5,
        backgroundColor: colors.bar,
        height: "80%",
    },
    text:{
        color: colors.mainWhite,
        marginLeft: 10,
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap"
    },
    image:{
        width:80,
        height: 80,
        borderRadius:40,
        alignSelf:"flex-start",
        backgroundColor:colors.primaryColor,
        marginLeft: 10,
        // resizeMode: "contain",

    }
})

export default GroupCard;