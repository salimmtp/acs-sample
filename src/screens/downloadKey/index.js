import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../../commonComponents/Container';

export default function DownloadKey({navigation}) {
  useEffect(() => {
    Alert.alert(
      'Smart Credential',
      'You haven’t downloaded your smart credential.\n\n Would you like to do this now?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => navigation.navigate('Downloading')},
      ],
    );
  }, []);
  return <Container />;
}

const styles = StyleSheet.create({});
