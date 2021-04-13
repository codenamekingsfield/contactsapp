import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {createEmailAccount,registerError } from "../../src/redux/actions/authActions";



class SignupScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            confirmpassword: "",
        }
    }
    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = () => {
        if (this.state.password !== this.state.confirmpassword)
        {
            this.props.registerError("passwords do not match, try again")
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
}
    render() {
        const { navigation,auth} = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={true } >
                <View>
                    <Text style={styles.log}>Sign up</Text>
                </View>
                <View>
                     {auth.error.register && (
                        <Text style={{ color: "red" }}>{auth.error.register}</Text>
                      )}
                    <TextInput
                        style={styles.underline}
                        placeholderTextColor='#aaaaaa'
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText={(text) => { this.handleUpdateState('email', text) }
                        }
                    />
                
                    <TextInput
                        style={styles.underline}
                        placeholderTextColor='#aaaaaa'
                        secureTextEntry={true} placeholder='Password'
                        value={this.state.password}
                        onChangeText={(text) => { this.handleUpdateState('password', text) }}
                    />

                    <TextInput
                        style={styles.underline}
                        placeholderTextColor='#aaaaaa'
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        value={this.state.confirmpassword}
                        onChangeText={(text) => { this.handleUpdateState('confirmpassword', text) }}
                    />
                
                </View>

                <View style={styles.button}>

                    <TouchableOpacity onPress={this.handleOnSubmit}
                        style={styles.buttonIn}>
                        <Text style={styles.buttontext}>Sign up</Text>
                    </TouchableOpacity>

                </View>
            
                <View style={styles.DonthaveanAccountContainer}>

                    <Text style={styles.NoAccountText}>You already have an account?</Text>
                
          
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Log In')
                    }} >
                        <Text style={styles.SignUpText}>Log in</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        //  justifyContent:"space-around",
    marginHorizontal: 50,
        
    
      },
      log:{
          marginTop:80,
          color:"#A66FFE",
          fontSize: 60,
          fontWeight:'bold',
          marginBottom:80,
          



      },
      underline:{
    
        width:300,
        backgroundColor:'white',
        marginTop:10,
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

const mapStateToProp = (state)=> {
    return{ auth:state}
}

export default connect(mapStateToProp, { createEmailAccount ,registerError})(SignupScreen);
     