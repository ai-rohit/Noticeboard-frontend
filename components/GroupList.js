import {View, StyleSheet, FlatList} from "react-native";
import colors from "../config/color";
import GroupCard from "./GroupCard";
import Container from "./Container";

const GroupList = ()=>{
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
    return (
        <Container style={styles.listContainer}>
            <FlatList
                contentContainerStyle={{paddingBottom:40}}
                data={data}
                renderItem = {({item})=>{
                    return <GroupCard item={item} customStyle={styles.card}/>
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
    }
})
export default GroupList;