import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput,} from 'react-native';
function Welcome(props){
    function NextPage (){
        props.navigation.navigate('page4')
    }
        return(
        <View>
            <View>
              <Text style = {styles.Ini}>ChromeXtension</Text>
              <Image style = {styles.Img1}source ={require('./google_logo.png')}/>
              <TextInput placeholder = 'Explore the App features...'  
              style = {{ padding: 15, marginTop: 20, borderColor: 'black',
              borderWidth: 2 , borderRadius: 20}}/>
              <View style = {styles.Searchbotton}>
                  <Button title = 'SEARCH' color ='#8FBC8F' onPress ={NextPage}/>
                  </View>
              <View style = {styles.Ini1}>
              <Image style = {styles.Img2}source = {require('./cat.jpg')}/>
              <Image style = {styles.Img3}source = {require('./TV.png')}/>
              </View>
              <View style = {styles.Ini2}>
              <Image style = {styles.Img4}source = {require('./favicon.png')}/>
              <Image style = {styles.Img5}source = {require('./fan.jpg')}/>
              </View>
            
            </View> 
        </View>
    )
}



const styles = StyleSheet.create({
    Ini1: {
        flexDirection: 'row',
  },
  Ini2: {
      flexDirection: 'row',
  },
  Img: {
      marginTop:400,
      width: 100,
      height: 100,
  },
  Searchbotton:{
      marginTop:10,  
      width:200,  
      marginLeft:120,
      borderRadius:111,
  },
  Ini: {
      fontSize:  40,
      fontWeight: 'bold',
      paddingLeft: 30,
      flex : 0,
      backgroundColor: 'yellow',
      color: '#BC8F8F',
      justifyContent:'center',
      textAlign:'center',

  },
  Img2: {
      width: 200,
      height: 200,
      marginTop: 40,
      marginLeft:20,
      shadowOpacity:100,
      shadowColor:'black',
      shadowRadius:50,
      shadowOffset:50,
      borderRadius:15,
  },
  Img1:{
      width: 400,
      height:160,
      marginLeft: 20,
      borderRadius:15,
  },
  Img3:{
      alignContent:'flex-start',
      width: 200,
      height: 200,
      marginTop: 40,
      marginLeft:20,
      marginBottom: 50,
      borderRadius:15,

  },
  Img4:{
      width:200,
      height:200,
      marginLeft:20,
      borderRadius:10,
      
  },
  Img5: {
      width:200,
      height:200,
      marginLeft:10,
      borderRadius:10,

  },
})

export default Welcome;