import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function test() {
    return (
        <View style = {styles.continer}>
            <View style = {styles.secondView}>
            <Text style ={styles.text1}>Services</Text>
        <View style = {styles.thirdcontainer}>
            <Text style = {styles.text2}>Choose any Services</Text>
            <Text style = {styles.text2}> You need</Text>
            </View>
          </View>
          </View>  
    )
}

const styles = StyleSheet.create({
    continer:{
        backgroundColor: '#D1DOCE',
        alignItems: 'center',
        padding: 30,
        flex: 1,
        
    },
    secondView:{
        alignItems: 'center',
    },
    thirdcontainer:{
        alignItems: 'center',
        marginTop: 20'
    },
})
