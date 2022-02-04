import { StyleSheet, Text, View ,Image, TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
//import React, { useState } from "react";
let dimension =Dimensions.get('screen')
function Project(props) {
  function NextPage (){
    props.navigation.navigate('page2')
  };
  return (
    <View styles={styles.Maincont}>
       <View>
         <View>
         <TouchableOpacity>
         <Image style = {styles.backgrnImg1}source = {require('./stackicon.png')}/> 
         </TouchableOpacity>
         </View>
     <View>
<View style={styles.maintitleCont}>
       <Text style={styles.titleCont}>Oats porridge recipe</Text>
       <Image style = {styles.backgrnImg2}source = {require('./loveicon.png')}/> 
       </View>
       <View style={styles.slideCont}>
         <View style={styles.slideCont2}>

         </View>
         <View style={styles.pecDiv}>
               
               
               <Text style={styles.text7}>hdhdhh</Text>
  
               <Text style={styles.text8}>hdhdhht</Text>
               <Text style={styles.text9}>hdhd</Text>
               <Text style={styles.text10}>hdhht</Text>
             </View>
       </View>
     </View>            
         <Image style = {styles.backgrnImg}source = {require('./pineapple.jpg')}/> 
         </View>
         <View style={styles.StyleDiv}>
             <Text style={styles.text1}>Welcome to GroceryusWelcome to  grjggjgjgjghhhhhggj{'\n'}Welcome to GrojjjghgceryusWelcome to Ghhhfhfbhh
             {'\n'}Welcome to GroceryWelcome tohhfbbfhhhhh
             </Text>
             </View>
             <View style={styles.Textview}>
               
               <Text style={styles.text4}>hdhdhhhd{'\n'}fffff</Text>
             
             
               <Text style={styles.textview2}>hdhdhhhd{'\n'}fffff</Text>
             
             
               <Text style={styles.textview3}>hdhdhhhd{'\n'}fffff</Text>
             </View>
             <View style={styles.secDiv}>
               
               
               <Text style={styles.text3}>hdhdhhhd{'\n'}fffff</Text>
  
               <Text style={styles.text}>hdhdhhhdggg{'\n'}fffff</Text>
             </View>
             <View style={styles.tecDiv}>
               
               
               <Text style={styles.text5}>hdhdhhhd{'\n'}fffff</Text>
  
               <Text style={styles.text6}>hdhdhhhd{'\n'}fffff</Text>
             </View>
            </View>
             

  );
}

const styles = StyleSheet.create({
  backgrnImg1:{
    width:35,
    height:20,
    marginTop:25,
    marginLeft:25,
  },
  backgrnImg2:{
    width:75,
    height:49,
    marginTop:25,
    marginLeft:185,

  },
backgrnImg:{
  width:'90%',
  height:dimension.width*0.7,
  borderRadius:10,
  padding:10,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:23,
  marginTop:70,
  shadowRadius:30,
  shadowColor:'black',
},
maintitleCont:{
  flexDirection:'row',
},
StyleDiv:{
      fontSize:15,
      marginTop:50,
      fontWeight:'bolder',
      marginLeft:30,
      
},
Maincont:{
  padding:30,
},
Textview:{
  marginTop:50,
  flexDirection:'row',
  marginLeft:30,
  fontWeight:'bold',
  
},
textview2:{
  marginLeft:90,
  fontWeight:'bold',
  fontSize:15,
},
textview3:{
  marginLeft:90,
  fontWeight:'bold',
  fontSize:15,
},
secDiv:{
  marginTop:40,
   flexDirection:'row',
   marginLeft:30,
   
},
pecDiv:{
  marginTop:10,
   flexDirection:'row',
   
},
text:{
  marginLeft:228,
  fontWeight:'bold',
  fontSize:15,
},
text1:{
  fontWeight:'bold',
  fontSize:15,
},
text3:{
  fontWeight:'bold',
  fontSize:15,
},
text4:{
  fontWeight:'bold',
fontSize:15,
},
tecDiv:{
  marginTop:40,
   flexDirection:'row',
   marginLeft:30,
   marginBottom:30,
},
text6:{
  marginLeft:228,
  fontWeight:'bold',
  fontSize:15,
},
text5:{
  fontWeight:'bold',
  fontSize:15,
},
text7:{
  fontWeight:'bold',
  fontSize:15,
  alignItems:'flex-start',
},
text8:{
  fontWeight:'bold',
fontSize:15,
marginLeft:48,
},
text9:{
  fontWeight:'bold',
fontSize:15,
marginLeft:70,
},
text10:{
  fontWeight:'bold',
fontSize:15,
marginLeft:120,
},

titleCont:{
  fontWeight:'bold',
  fontSize:20,
  marginTop:37,
  marginLeft:30,
},

slideCont:{
  width:437,
  height:20,
  borderBottomColor:'gray',
  borderBottomWidth:14,
  marginLeft:28,
  marginTop:20,
},
slideCont2:{
  width:90,
  height:20,
  borderBottomColor:'orange',
  borderBottomWidth:13,
  borderRadius: 3,
  marginBottom:17,
},
})
export default Project;