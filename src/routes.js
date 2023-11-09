import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
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
    <Text>{text}</Text>
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
    }}
    // screenOptions={({route}) => ({
    //   tabBarIcon: ({focused, color, size}) => {
    //     let iconName, activeColor, iconStyle, backGroundColor;
    //     backGroundColor = focused ? 'rgba(74,144,226,0.1)' : colors.white;
    //     activeColor = focused ? colors.blue : '#B2B2B2';
    //     switch (route.name) {
    //       case 'Home':
    //         iconName = require('../assets/img/icons/icons8-home.png');
    //         iconStyle = {marginTop: 3, width: 21, height: 21};
    //         break;
    //       case 'Subject':
    //         iconName = require('../assets/img/icons/icons8-books.png');
    //         iconStyle = {marginTop: 3, width: 25, height: 25};
    //         break;
    //       case 'Assignment':
    //         iconName = require('../assets/img/icons/icons8-documents.png');
    //         iconStyle = {marginTop: 4, width: 20, height: 20};
    //         break;
    //       case 'TestList':
    //         iconName = require('../assets/img/icons/icons8-exam.png');
    //         iconStyle = {marginTop: 5, width: 22, height: 22};
    //         break;
    //       case 'Notifications':
    //         iconName = require('../assets/img/icons/icons8-notification.png');
    //         iconStyle = {marginTop: 7, width: 23, height: 23};
    //       default:
    //         break;
    //     }
    //     return (
    //       <TabIcon
    //         style={iconStyle}
    //         img={iconName}
    //         activeColor={activeColor}
    //         backgroundColor={backGroundColor}
    //       />
    //     );
    //   },
    // })}
    // tabBarOptions={{
    //   showLabel: false,
    //   safeAreaInset: {bottom: 'never', top: 'never'},
    // }}
  >
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
          <FontAwesomeIcon icon={faGear} color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={Four}
      options={{
        tabBarLabel: 'Contact',
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
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={TabStack} />
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
