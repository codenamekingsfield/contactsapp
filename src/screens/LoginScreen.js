import React from 'react';
import {View, ScrollView, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '/Users/mac/Desktop/reactnative/loginPage/loginpage/src/components/Button.js'



export default function LoginScreen( {navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View>
             <Text style={styles.log}>Log In</Text>
            </View>
            <View>
                <TextInput  style={styles.underline} placeholderTextColor='#aaaaaa'  placeholder='Username'/>
                <TextInput style={styles.underline} placeholderTextColor='#aaaaaa' secureTextEntry={true} placeholder='Password'/>
                <Text style={styles.forgotpassword}>Forgot password?</Text>
            </View>
            <View style={styles.button}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Contacts')
        }} style={styles.buttonIn}>
         <Text style={styles.buttontext}>Log In</Text>
         </TouchableOpacity>
      </View>
            
            <View style={styles.DonthaveanAccountContainer}>

                <Text style={styles.NoAccountText}>Don't have an account?</Text>
                
                
                <TouchableOpacity onPress={() => {
          navigation.navigate('Signup')
        }} >
         <Text style={styles.SignUpText}>Sign up</Text>
         </TouchableOpacity>

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
          marginTop:100,
          color:"#A66FFE",
          fontSize:60,
          marginBottom:50,
          



      },
      underline:{
    
        width:300,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#A66FFE',
        marginBottom:7, 
        fontSize: 20,
        borderRadius:5,
        height:50,
        marginTop: 20,
        paddingHorizontal: 25,
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
