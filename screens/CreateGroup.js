import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import Button from "../components/Button";
import Container from "../components/Container";
import TextBox from "../components/TextBox";
import { Title, SubTitle } from "../components/AppText";


const CreateGroup = ()=>{
    return (
        <Container style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={[styles.container]}>
            <View style={styles.textContainer}>
                <Title>Create Group.</Title>
                <SubTitle>Invite People...</SubTitle>
                <SubTitle>Post and Manage Notice!</SubTitle>
            </View>
            <View style={styles.form}>
                <TextBox placeholder={"Group Name"}/>
                <TextBox placeholder={"Group Description"} lines={5}/>
                <Button text="Create" customStyles={styles.btn}/>
            </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-around",
        alignItems:"center",
    },
    textContainer:{
        width:"90%",
        // backgroundColor:"red",
        justifyContent:"center",
        paddingLeft:15,
        marginLeft:10,
        alignSelf:"flex-start",
        flex:1.5
    },
    form:{
        flex:2,
        alignItems:"center"    
    },
    btn:{
        marginTop:10
    }
})

export default CreateGroup;