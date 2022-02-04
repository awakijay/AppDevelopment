import React from 'react'
import { StyleSheet, Text, View,TextInput,ImageBackground,Button } from 'react-native'

export default function SimpleUI(props) {
    function NextPage (){
        props.navigation.navigate('page3')

    }
    return (
        
        <ImageBackground source = {require('./div.png')} style = {styles.Maincontainer}>
            <View>
            <Text style = {styles.Container1}> Waki</Text>
            <TextInput placeholder = 'Username' 
            style = {{ padding: 10, marginTop: 90, borderColor: 'orange',
            borderWidth: 2 , borderRadius: 20 ,textDecorationColor:'white'}}/>
            <TextInput placeholder = 'password' 
            style = {{ padding: 10, marginTop: 25, borderColor: 'orange',
            borderWidth: 2 , borderRadius: 20}}/>
           <View>
            <View style = {styles.Loginbotton}>
            <Button title = 'login' color ='#8FBC8F' onPress={NextPage}/>
            <Text style ={styles.Container2}>Signup</Text>
            </View>
             </View>
             </View>
    
        </ImageBackground>
        
        
    );
}

const styles = StyleSheet.create({
    Maincontainer:{
        flex:1,
       // width:200,
       // height:200,
    },
    Container1:{
        fontSize:  100,
      fontWeight: 'bold',
      paddingLeft: 16,
      color: '#ff0000',
      marginTop: 300,
      justifyContent:'center',
      textAlign:'center',
      marginRight:30,
      fontStyle:'italic',
      
    },
    Loginbotton:{
        marginTop:10,  
        width:70,  
        marginLeft:25,
        borderRadius:111,
        flexDirection:'row',
        
    },
    Container2:{
        color:'orange',
        marginLeft:250,
        fontWeight:'bold',
        marginTop:11,
    },


})

