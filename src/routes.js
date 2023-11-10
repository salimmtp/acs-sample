import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faSliders} from '@fortawesome/free-solid-svg-icons/faSliders';
import {faMessage} from '@fortawesome/free-regular-svg-icons/faMessage';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';

// SCREENS
import Login from './screens/login';
import dashboard from './screens/dashboard';
import commonStyle from './config/commonStyle';
import {colors} from './config/theme';

const Base = ({text}) => (
  <View
    style={[
      {display: 'flex', flex: 1, backgroundColor: colors.primary},
      commonStyle.center,
    ]}>
    <Text style={commonStyle.h1_Bold}>{text}</Text>
  </View>
);

const One = () => <Base text="home" />;
const Two = () => <Base text="Profile" />;
const Three = () => <Base text="Settings" />;
const Four = () => <Base text="Contact" />;

const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.blue,
      tabBarStyle: {
        backgroundColor: colors.primary,
        borderTopWidth: 0,
        paddingBottom: 10,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={One}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Two}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faUser} color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Three}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faSliders} color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={Four}
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon icon={faMessage} color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();
export const Routes = ({userToken}) => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userToken ? (
        <Stack.Screen name="TabHome" component={TabStack} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Details" component={dashboard} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
