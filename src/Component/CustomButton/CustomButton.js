import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function CustomButton({text}) {
  return (

    <View>
    <TouchableOpacity style={styles.btn}>
        <Text style={{textAlign:"center",marginTop:15, color:"white" ,fontSize:20}}>{text}</Text>



    </TouchableOpacity>
</View>

  )
}

const styles = StyleSheet.create({

    btn:{
height:50,
width:300,
backgroundColor:"green",
marginHorizontal:30,
marginTop:20,
    },


})
