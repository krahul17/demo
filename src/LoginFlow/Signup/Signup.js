import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomButton from '../../Component/CustomButton/CustomButton'


export default function Signup() {

   const [password, setPassword]=useState('')

//    console.log(password,'76776767')


    return (
<SafeAreaView style={styles.main}>

            <Text style={styles.abc}> hello {"\n"}wellcome</Text>


            <View style={styles.textview}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                value={password}
                onChangeText={text => setPassword(text )}
                />
            </View>

            {/* <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:"center",marginTop:15, color:"white" ,fontSize:20}}>Sign in</Text>



                </TouchableOpacity>
            </View> */}

<CustomButton text='sign in'/>



</SafeAreaView>

        
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },

    abc: {
        fontSize: 20,
        color: '#000'

    },
    textview: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        height: 80,
        width: 300,
        color: "#000",
        // borderWidth: 1,
        borderBottomWidth:1,
        borderRadius:15
    },
    btn:{
height:50,
width:300,
backgroundColor:"green",
marginHorizontal:30,
marginTop:20,
    },


})