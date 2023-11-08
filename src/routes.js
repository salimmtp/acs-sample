import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// SCREENS
import Login from './screens/login';
import dashboard from './screens/dashboard';
import splash from './screens/splash';

const Stack = createNativeStackNavigator();
export const Routes = ({userToken}) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Details" component={dashboard} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'grey',
  },
  p: {color: '#000'},
});
