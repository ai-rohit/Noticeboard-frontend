import Container from "../components/Container";
import GroupList from "../components/GroupList";
import {View} from "react-native"

const Groups = ({navigation})=>{
    return (
        // <Container>
        // <View>

            <GroupList navigation={navigation}/>
        // </View>
        //</Container>
    )
}

export default Groups;