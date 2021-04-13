import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from '../screens/ContactsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { connect } from "react-redux";



const Stack = createStackNavigator()

 function AppContainer ({auth}) { 
  return (
      
      <NavigationContainer>
          {
              auth.login ? 
             <Stack.Navigator>

                      <Stack.Screen
                          name='Contacts'
                          component={ContactsScreen}>
                      </Stack.Screen>
    
            </Stack.Navigator>    
                  :
            <Stack.Navigator>
                      <Stack.Screen
                          name='Log In' options={{ header: () => null }}
                          component={LoginScreen}>
                          
                          </Stack.Screen>
                      <Stack.Screen name='Signup'
                          options={{ header: () => null }}
                          component={SignupScreen}>
                          
                          </Stack.Screen>

            </Stack.Navigator>
                   
             
          }
      </NavigationContainer>
      
    );

  }




const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginTop:50,
    
  }




}); 

const mapStateToProp = (state)=> {
    return{ auth:state}
  }






export default connect(mapStateToProp) (AppContainer)