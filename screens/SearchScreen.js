import { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Container from "../components/Container";
import TextBox from "../components/TextBox";

const SearchScreen = ()=>{
  const [keyword, setKeyword] = useState("");

  const onTextChange = (text)=>{
    setKeyword(text)
  }
  
  const onFocusInput = ()=>{
    console.log("focused")
  }
  // const inputRef = useRef();
  return(
    <Container>
      <TextBox
        onFocus={onFocusInput}
        customStyles={styles.textbox}
        placeholder={"Board name"}
        onChange={onTextChange} 
        value={keyword}
        icon={{name:"md-search-circle"}}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  textbox:{
    width: "90%",
    height: Dimensions.get("window").height / 20
  }
})

export default SearchScreen;