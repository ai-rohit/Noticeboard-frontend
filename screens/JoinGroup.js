import Container from "../components/Container";
import { View, StyleSheet } from "react-native";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import {Title, SubTitle} from "../components/AppText";

const JoinGroup = () => {
    return (
        <Container style={styles.container}>
            <View style={styles.textContainer}>
            <SubTitle style={styles.text}>Join A Group and Be Upto Date with Every Notice</SubTitle>
            </View>
            <TextBox placeholder={"Group Link"} />
            <Button text="Join" customStyles={styles.btn}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    btn:{
        marginTop:10
    },
    textContainer:{
        // backgroundColor:"red",
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },  
    text:{
        backgroundColor:"red"
    }
})

export default JoinGroup;