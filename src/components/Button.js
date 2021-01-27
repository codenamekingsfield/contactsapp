import React from 'react';
import {StyleSheet,View, TouchableOpacity, Text} from 'react-native';



export default function Button({navigation}) {
    return (
        <View style={styles.button}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ProfilepageScreen')
        }} style={styles.buttonIn}>
         <Text style={styles.buttontext}>Log In</Text>
         </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-around'
      
    
      
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
    
  });
  