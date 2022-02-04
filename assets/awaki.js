import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions ,Button} from 'react-native'
let dimension =Dimensions.get('screen')
function Awaki(props) {
    function NextPage (){
        props.navigation.navigate('page2')

    }
    return (
        <View style ={styles.MainDiv}>
            <View>
         <Image style = {styles.backgrnImg}source = {require('./cat.jpg')}/> 
         <View>
             <Text style={styles.text1}>Welcome to Groceryus</Text>
         <View>
             <Text style={styles.text2}>1500+Groceryus item available{'\n'} only for you</Text>
             <View>
             <Button title = 'Available' color ='#fa5d2a'  onPress = {NextPage}/>
             </View>
         </View>
         </View>
            
        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    MainDiv:{
        backgroundColor:'gray',
        flex:1,
        width:'100%',
        height:'100%',
        padding:20,
    },
    backgrnImg:{
        width:'100%',
        height:dimension.width*0.9,
        borderRadius:10,
    },
    text1:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:60,
        textAlign:"center",
    },
    text2:{
        fontSize:15,
        marginTop:50,
        textAlign:'center',
        paddingHorizontal:10,
        margin:30,
        fontWeight:'bold',
    },
    
})

export default Awaki;