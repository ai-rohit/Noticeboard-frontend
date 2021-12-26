import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import colors from "../config/color";
import {Ionicons} from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function GroupCard({item, customStyle}){
    return (
        <View style={[styles.card, customStyle]}>
            <View style={styles.nameContainer}>
                <View style={styles.bar}></View>
                <Text style={styles.text} numberOfLines={3}>{item.name}</Text>
            </View>
            <View style={styles.imgTextContainer}>
                <Image source={require("../assets/favicon.png")} style={styles.image}/>
                <Text style={styles.representText} numberOfLines={5}>{item.description}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="person" color={colors.dimWhite} style={styles.profileIcon} size={14}/>
                <Text style={styles.num}>10 / 100</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: width * 0.9,
        height: height * 0.2,
        backgroundColor: colors.mainDark,
        borderRadius: 15,
        flex:0
    },
    nameContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 5,
        flex: 2
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
        fontSize: 16,
        flex: 1,
        flexWrap: "wrap"
    },
    image:{
        width:80,
        height: 80,
        borderRadius:40,
        alignSelf:"center",
        backgroundColor:colors.primaryColor,
        marginLeft: 10,
        // resizeMode: "contain",
    },
    imgTextContainer:{
        flexDirection: "row",
        height: "50%",
        width:"95%",
        marginTop:10,
        flex:3
    },
    representText:{
        color: colors.mainWhite,
        fontSize: 14,
        fontWeight:"bold",
        flexWrap: "wrap",
        flex:1,
        marginLeft: 5,
        // marginTop: 10,
        alignSelf:"center"
    },
    iconContainer:{
        flexDirection: "row",
        justifyContent:"flex-end",
        marginTop: 10,
        marginLeft: 10,
        // backgroundColor:'red',
        width:"90%",
        flex: 1
    },
    num:{
        marginLeft: 5,
        color: colors.mainWhite,
        fontSize: 12,
    },
    profileIcon:{
    
    }
})

export default GroupCard;