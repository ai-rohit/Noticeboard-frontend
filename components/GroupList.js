import {View, StyleSheet, FlatList, Text, TouchableOpacity} from "react-native";
import colors from "../config/color";
import GroupCard from "./GroupCard";
import Container from "./Container";
import {AntDesign} from "@expo/vector-icons";

const GroupList = ({navigation})=>{
    const data = [
        {
            _id:"1",
            name:"NCIS high School",
            description:"What this group represents in short"
        },
        {
            _id:"2",
            name:"NCIS high School",
            description:"What this group represents in short"
        },
        {
            _id:"3",
            name:"NCIS high School",
            description:"What this group represents in short"
        },
        {
            _id:"4",
            name:"NCIS high School",
            description:"What this group represents in short"
        },
        {
            _id:"5",
            name:"NCIS high School",
            description:"What this group represents in short"
        }

    ]
    const navigateToNotice = ()=>{
        navigation.navigate("Notices");
    }

    const navigateToJoinBoard = ()=>{
        navigation.navigate("JoinGroup")
    }

    const navigateToSearchBoard = ()=>{
        navigation.navigate("SearchGroup")
    }

    return (
        <Container style={styles.listContainer}>
            <View style={styles.chipContain}>
                <TouchableOpacity style={styles.chip} onPress={()=> navigateToJoinBoard()}><AntDesign name="pluscircle"/><Text style={styles.text}>Join Board</Text></TouchableOpacity>
                <TouchableOpacity style={styles.chip} onPress={()=> navigateToSearchBoard()}><AntDesign name="search1"/><Text style={styles.text}>Search Board</Text></TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{paddingBottom:40, marginTop: 5}}
                data={data}
                renderItem = {({item})=>{
                    return <GroupCard item={item} customStyle={styles.card} onPress={navigateToNotice}/>
                }}
                keyExtractor={(item)=>item._id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.mainDark,
    },
    card:{
        marginBottom: 15,
        backgroundColor: colors.primaryColor,
    },
    chipContain:{
        width:"100%",
        padding: 10,
        flexDirection: "row",
        justifyContent:"flex-end",
        backgroundColor: colors.mainDark
    },
    chip:{
        backgroundColor: colors.mainWhite,
        marginRight: 10,
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    text:{
        marginLeft: 2
    }
})
export default GroupList;