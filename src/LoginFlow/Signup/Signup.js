import React, { useState } from 'react'
import { View,  Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomButton from '../../Component/CustomButton/CustomButton'


export default function Signup() {

   const [email, setemail]=useState('')
   const [password, setPassword]=useState('')
//    console.log(password,'76776767')



    return (
<SafeAreaView style={styles.main}>

            <Text style={styles.abc}> welcome{"\n"} back</Text>
            


<View style={styles.textview}>
                <TextInput
                    style={styles.inputText}
                    placeholder="email"
                    placeholderTextColor="#003f5c"
                value={email}
                onChangeText={text => setemail(text )}
                />
            </View>

            
  

<View style={styles.textview}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                value={password}
                onChangeText={text => setPassword(text )}
                />
            </View>

            <CustomButton text='sign in'/>
            <Text style={styles.to}>or</Text>
             <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.too}>sign in with google</Text>
                    


                </TouchableOpacity>
            </View>
             <View style={{flexDirection:'row'}}>
            <Text>create account?</Text>
            <Text>Sign up</Text>
            </View>  
</SafeAreaView>

        
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },

    abc: {
        fontSize: 40,
        color: 'green',
        marginLeft:35,

    },
    
    textview: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    inputText: {
        height: 80,
        width: 300,
        color: "#000",
        // borderWidth: 1,
        borderBottomWidth:1,
        borderRadius:15,
        
    },
    btn:{
height:50,
width:300,
backgroundColor:"green",
marginHorizontal:30,
marginTop:20,
marginLeft:50,
    },
    button:{
        height:50,
        width:300,
        backgroundColor:"gray",
        marginHorizontal:30,
        marginTop:20,
        marginLeft:40,
        borderRadius:20,
            },
to:{
textAlign:'center',
fontSize: 20,
marginTop:10,
},
too:{
    textAlign:'center',
    color:'white',
    fontSize: 20,
marginTop:10,
    },
    
    

})