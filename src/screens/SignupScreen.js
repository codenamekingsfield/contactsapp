import React from 'react';
import {View, ScrollView, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '/Users/mac/Desktop/reactnative/loginPage/loginpage/src/components/Button.js'



export default function LoginScreen( {navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View>
             <Text style={styles.log}>Sign up</Text>
            </View>
            <View>
                <TextInput style={styles.underline} placeholderTextColor='#aaaaaa' placeholder='Username' />
                <TextInput style={styles.underline} placeholderTextColor='#aaaaaa' placeholder='Email' />
                
                <TextInput style={styles.underline} placeholderTextColor='#aaaaaa' secureTextEntry={true} placeholder='Password' />
                <TextInput style={styles.underline} placeholderTextColor='#aaaaaa' secureTextEntry={true} placeholder='Password again'/>
                
            </View>
            <View style={styles.button}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Login')
        }} style={styles.buttonIn}>
         <Text style={styles.buttontext}>Sign up</Text>
         </TouchableOpacity>
      </View>
            
            <View style={styles.DonthaveanAccountContainer}>

                <Text style={styles.NoAccountText}>You already have an account?</Text>
                
                <Text style={styles.SignUpText} >Log in</Text>

            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"space-around",
        marginHorizontal:50
    
      },
      log:{
          marginTop:70,
          color:"#A66FFE",
          fontSize:60,
          marginBottom:80,
          



      },
      underline:{
    
        width:'100%',
        backgroundColor:'white',
        marginHorizontal:25,
        padding:16,
          borderRadius: 5,
          fontSize: 16,
          height:50,
        borderBottomWidth:1,
        borderBottomColor:'#A66FFE',
          marginBottom: 7,
        alignSelf:'center'
       
     
       },
       forgotpassword:{
           color:'#A66FFE',
           alignSelf:'flex-end',
           fontSize:17,
           marginVertical:3
       },
       DonthaveanAccountContainer:{
           flexDirection:'row',
           justifyContent:'center',
           

    },
    button:{
    
        width:'100%',
        height:50,
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',
        marginVertical:50,
        
      },
      buttonIn:{
        
        borderWidth:0,
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'mediumpurple'
      },
      buttontext:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
        
      },
      
       
       NoAccountText:{
            marginRight:10,
            fontSize:17
       },
       SignUpText:{
           fontSize:17,
           color:'#A66FFE'
       }
    
});
