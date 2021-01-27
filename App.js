import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from './src/screens/ContactsScreen';
import LoginScreen from './src/screens/LoginScreen';
import Contacts from './src/components/Contacts';
import ProfilepageScreen from './src/screens/ProfilepageScreen';
import SignupScreen from './src/screens/SignupScreen';


const Stack = createStackNavigator()

export default function App () { 
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Log In' component={LoginScreen}></Stack.Screen>
          {/* <Stack.Screen name='Profilepage' component={ProfilepageScreen}></Stack.Screen> */}
          <Stack.Screen name='Contacts' component={ContactsScreen}></Stack.Screen>
          <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
          

        </Stack.Navigator>
      </NavigationContainer>
    );

  }




const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginTop:50,
    
  }




}); 








