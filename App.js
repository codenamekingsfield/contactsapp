import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from './src/screens/ContactsScreen';
import LoginScreen from './src/screens/LoginScreen';
import Contacts from './src/components/Contacts';
import ProfilepageScreen from './src/screens/ProfilepageScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppContainer from './src/navigation/navigation'


const Stack = createStackNavigator()

export default function App () { 
  return (
      <Provider store={store} >
      <AppContainer/>
      </Provider>
    );

  }




const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginTop:50,
    
  }




}); 








