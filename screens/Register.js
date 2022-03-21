import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Container from "../components/Container";
import { Title, SubTitle, AppText } from "../components/AppText";
import { KeyboardAvoidingView, StyleSheet, View, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../config/color";

const Register = ({navigation})=>{

    const navigateToLogin = ()=>{
        navigation.navigate("Login")
    }
    return (
        <Container style={styles.container}>
            <KeyboardAvoidingView behavior="position" style={{ width:"100%"}}>
                <TouchableOpacity onPress={navigateToLogin}><AppText customStyles={styles.login}>&lt; Login</AppText></TouchableOpacity>
                <SubTitle customStyles={styles.text}>Create Your Account</SubTitle>
                <View style={styles.form}>
                    <TextBox placeholder={"Name"}/>
                    <TextBox placeholder={"Email"}/>
                    <TextBox placeholder={"Password"} isSecured={true}/>
                    <TextBox placeholder={"Confirm Password"} isSecured={true}/>
                    <Button text="Create Account" customStyles={styles.btn}/>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        marginBottom:20,
        alignSelf:"center"
    },
    form:{
        alignItems:"center",
    },
    btn:{
        marginTop:15
    },
    login:{
        alignSelf:"flex-start",
        marginLeft: 30,
        fontSize: 16,
        marginBottom:20,
        color: colors.mainWhite
    }
})  

export default Register;