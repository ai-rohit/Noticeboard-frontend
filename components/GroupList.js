import {View, StyleSheet, FlatList} from "react-native";
import GroupCard from "./GroupCard";

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
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                renderItem = {({item})=>{
                    return <GroupCard item={item} customStyle={styles.card}/>
                }}
                keyExtractor={(item)=>item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flex: 1
    },
    card:{
        marginBottom: 10
    }
})
export default GroupList;