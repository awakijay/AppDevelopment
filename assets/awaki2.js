import React from 'react'
import { StyleSheet, Text, View,Dimensions, ImageBackground,Button } from 'react-native'
let dimension =Dimensions.get('screen')
function awaki2 (props) {
    function NextPage (){
        props.navigation.navigate('page1')
    }
    return (
        <View  style={styles.container1}>
            <Text style={styles.mastercontainer}>Skip</Text>
            <ImageBackground source = {require('./google_logo.png')} style = {styles.Maincontainer}>
            </ImageBackground>
            <View>
                <Text style={styles.textDIV}>Fresh Fruits</Text>
            </View>
            <View>
                <Text style={styles.textDIV2}>Fresh fruits from the fields{'\n'}
                      are picked only to serve you fresh.
                </Text>
                <View style={styles.buttoncontainer2}>
             <Button title = 'Next' color ='#fa5d2a' onPress = {NextPage}/>
             </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1:{
        padding:20,
        backgroundColor:'gray',
        flex:1,
    },
    mastercontainer:{
        marginLeft:390,
        fontSize:15,
        fontWeight:'bold',
        marginTop:0,
        
    },
    Maincontainer:{
        width:'100%',
        height:dimension.width*0.7,
        marginTop:20,
    },
    textDIV:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:80,
        textAlign:"center",
    },
    textDIV2:{
        fontSize:15,
        marginTop:50,
        textAlign:'center',
        paddingHorizontal:10,
        margin:30,
        fontWeight:'bold',
    },
    buttoncontainer2:{
            marginTop:18,  
            width:300,
            marginLeft:80,
    }
})
export default awaki2;