import Container from "../components/Container";
import { Title, SubTitle, AppText } from "../components/AppText";
import { StyleSheet, TextInput, View } from "react-native";
import { useRef, useState } from "react";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import colors from "../config/color";

const RegisterCode = () => {
    // const [inputValues, setInputValues] = useState({
    //     input1:"",
    //     input2:"",
    //     input3:"",
    //     input4:"",
    // });
    // const input1 = useRef();
    // const input2 = useRef();
    // const input3 = useRef();
    // const input4 = useRef();

    // const focusInput = ()=>{
    //     console.log(inputValues);
    //     if(inputValues.input1 == ""){
    //         console.log(!inputValues.input1);
    //         input1.current.focus();
    //     }else{
    //         input2.current.focus();
    //     }
    // }
    return(
        <Container style={styles.container}>
            {/* <Title>Register Code</Title>
            <TextInput style={{backgroundColor:"white", width:"90%", height:50, margin:10}} ref={input1} onChange={(text)=>{
                setInputValues({...inputValues, input1:text}
                );
                focusInput();
            }}/>
            <TextInput style={{backgroundColor:"white", width:"90%", height:50, margin:10}} ref={input2}/>
            <TextInput style={{backgroundColor:"white", width:"90%", height:50, margin:10}} ref={input3}/>
            <TextInput style={{backgroundColor:"white", width:"90%", height:50, margin:10}} ref={input4}/> */}
            <View style={styles.textContainer}>
            <SubTitle customStyles={styles.sub}>We just sent you a code for email verification. Please enter the code below to verify...</SubTitle>
            </View>
            <View style={styles.form}>
                <TextBox placeholder={"Verification Code"}/>
                <Button text="Verify" customStyles={styles.btn}/>
                <AppText customStyles={styles.text}>Didn't receive the code?<AppText customStyles={styles.boldText}> Click to resend</AppText></AppText>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"flex-start",
    },
    textContainer:{
        width:"90%",
        alignItems:"center",
        marginTop:20,
        marginLeft:5
    },  
    sub:{
        fontSize: 20,
    },
    text:{
        marginTop:10,
        color: colors.mainWhite,
        fontSize: 15,
        width:"90%"
    },
    boldText:{
        fontWeight:"bold"
    },
    form:{
        marginTop:20,
        alignItems:"center",
    },
    btn:{
        marginTop:15
    }
})

export default RegisterCode;