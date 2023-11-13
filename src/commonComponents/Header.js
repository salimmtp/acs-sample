import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import commonStyle from '../config/commonStyle';

export default function Header({title}) {
  return (
    <View style={styles.iconCont}>
      <View style={styles.icon}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={commonStyle.imgC}
        />
      </View>
      <Text style={commonStyle.h1_Bold}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconCont: {marginVertical: 30},
  icon: {
    marginBottom: 20,
    height: 35,
    width: 35,
  },
});
