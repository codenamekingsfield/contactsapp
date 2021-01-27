import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {MaterialIcons, Entypo} from '@expo/vector-icons'

export default function Contactslist({name, phone}) {
    return (
            <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Image source={require('../../assets/profilepicture1.jpg')} style={ styles.image}/>
            <View style={styles.InfoContainer}>
                <Text style={styles.names} numberOfLines={1} >{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View style={styles.icon}>
                <MaterialIcons name='local-phone' size={30} color='#009cf5' />
               
            </View>
            <View style={styles.icon}>
            <MaterialIcons name='message' size={30} color='#009cf5' />
            </View>
            <View style={styles.icon}>
            <Entypo name="dots-three-vertical" size={30} color='#a8a8a8' />
            </View>
        </View>
        </View>
    )
}


 const styles = StyleSheet.create({


     container:{
        
         flexDirection:'row',
         marginHorizontal:20,
         alignItems:"center",
         marginVertical:10
     },

     image:{
        width:50,
        height:50,
        borderRadius:50 ,
        

     },
     InfoContainer:{
          justifyContent:'center',
          marginHorizontal:15,
          flex: 4,

     },
     name:{
         fontWeight:'bold',
         fontSize:15

     },
     icon:{

        flex:1

     }
 })
 