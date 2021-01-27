import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import profile from '../../assets/profilepicture1.jpg';
import profile1 from '../../assets/cam2.png';

export default function ProfilepageScreen() {
  return (
    <View styles={styles.container}>
      <Image source={profile} style={styles.image} />
      <Image source={profile1} style={styles.image1} />

      <View >
        <Text style={styles.school}> school:</Text>
        <TextInput style={styles.underline} placeholder="Codetrain" />
      </View>

      <View>
        <Text style={styles.school}>
          name:
      </Text>
        <TextInput style={styles.underline} placeholder="Ave Maria" />
      </View>

      <View>
        <Text style={styles.name}>
          nickname:
      </Text>
        <TextInput style={styles.underline} placeholder="Ave" />
      </View>

      <View>
        <Text style={styles.name}>
          email:
      </Text>
        <TextInput style={styles.underline} placeholder="ave.m@codetrain.com" />
      </View>

      <View>
        <Text style={styles.name}>
          emergency contact:
      </Text>
        <TextInput style={styles.underline} placeholder="..." keyboardType={'numeric'} />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonIn}>
          <Text style={styles.buttontext}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>

    

    
    </View>
  );
}

const  styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 40,
    backgroundColor:'#fff'
    

  },
  image:{
    marginTop:10,
    width:180,
    height:180,
    alignSelf:'center',
    marginBottom:40,
    borderRadius:200,  
  },

  image1:{
    width:60,
    height:60,
    borderRadius:70,
    position:'absolute',
    marginTop:60,
    left:220,
    bottom:500
    
    

  },
 
  school:{
    fontSize:17,
    margin:3,
    paddingHorizontal:35,
    color:'gray'
    
    
    
  

  },
  sch_name:{
    fontSize:17,
    marginBottom:25,
    
    paddingHorizontal:35
    
    

  },
  button:{
    marginTop:2,
    width:'60%',
    height:40,
    justifyContent:'center',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:30
    

  },
  buttonIn:{
    
    borderWidth:0,
    height:42,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    backgroundColor:'#A66FFE'
  },
  buttontext:{
    color:'white'
  },
  name:{
    color:'#A66FFE',
    paddingHorizontal:35,
    margin:3,
    fontSize:17
    
  },
  underline:{
    
   width:300,
   backgroundColor:'white',
   marginHorizontal:25,
   padding:16,
   borderRadius:8,
   borderBottomWidth:1,
   borderBottomColor:'#f0f8ff',
   marginBottom:7
  

  }

});

