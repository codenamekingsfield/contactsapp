import React, { Component } from 'react';
import {View, ScrollView, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { loginEmailAccount } from "../redux/actions/authActions";



class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            
        }
    }
    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = () => {
       
        this.props.loginEmailAccount(this.state.email, this.state.password)
}
  render() {

    const { navigation,auth } = this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.log}>Log In</Text>
        </View>
        <View>
          {auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
            )}
          <TextInput
            style={styles.underline}
            placeholderTextColor='#aaaaaa'
            placeholder='Email'
            value={this.state.email}
            onChangeText={(text) => { this.handleUpdateState('email', text) }}
            
          />
          <TextInput
            style={styles.underline}
            placeholderTextColor='#aaaaaa'
            secureTextEntry={true} placeholder='Password'
            value={this.state.password}
            onChangeText={(text) => { this.handleUpdateState('password', text) }}
          />
          <Text style={styles.forgotpassword}>Forgot password?</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={this.handleOnSubmit}
            style={styles.buttonIn}>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"space-around",
        marginHorizontal:50
    
      },
      log:{
          marginTop:140,
          color:"#A66FFE",
        fontSize: 60,
          fontWeight:'bold',
          marginBottom:100,
          



      },
      underline:{
    
        width:300,
        backgroundColor:'white',
        borderBottomWidth:2,
        borderBottomColor:'#A66FFE',
        marginBottom:7, 
        fontSize: 20,
        borderRadius:7,
        height:50,
        marginTop: 7,
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

const mapStateToProp = (state)=> {
  return{ auth:state}
}


export default connect(mapStateToProp,{loginEmailAccount})(LoginScreen);