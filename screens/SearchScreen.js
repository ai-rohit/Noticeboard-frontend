import { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import TextBox from "../components/TextBox";

const SearchScreen = ()=>{
  const [keyword, setKeyword] = useState("");
  const [boards, setBoards] = useState([]);

  const data = [
    {
        _id:"1",
        name:"NCIS high School aosidjaoisd asoidjaisjdoad asdojasoidjaosd asidjaosdj",
        description:"What this group represents in short",
        testName: 'a'
    },
    {
        _id:"2",
        name:"NCIS high School",
        description:"What this group represents in short",
        testName: 'a'
    },
    {
        _id:"3",
        name:"NCIS high School",
        description:"What this group represents in short",
        testName: 'b'
    },
    {
        _id:"4",
        name:"NCIS high School",
        description:"What this group represents in short",
        testName: 'b'
    },
    {
        _id:"5",
        name:"NCIS high School",
        description:"What this group represents in short",
        testName: 'c'
    }
  ]
  const onTextChange = (text)=>{
    setKeyword(text);
    console.log("keyword", keyword)
    const filterData = data.filter(item=> item.testName === text);
    setBoards(filterData);
    console.log("filterData", filterData)
    console.log(boards)
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
      <FlatList
        data={boards}
        contentContainerStyle={{ width:"90%", alignSelf: "center"}}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
          return (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={require("../assets/favicon.png")} style={styles.image}/>
              <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  textbox:{
    width: "90%",
    height: Dimensions.get("window").height / 20,
    alignSelf:"center"
  },
  itemContainer:{
   flexDirection:"row",
   padding: 5,
   alignItems: "center"
  },
  text:{
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    flexWrap: "wrap",
    width: "80%"
  },
  image:{
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor:"#fff"
  }
})

export default SearchScreen;