import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import commonStyle from '../config/commonStyle';
import {colors} from '../config/theme';
import {horizontalPadding, regular} from '../config/theme';

export const BtnPrimary = ({onPress, title, style = {}, loading = false}) => (
  <TouchableOpacity onPress={() => onPress()} style={[styles.blueBtn, style]}>
    {loading ? (
      <ActivityIndicator color={colors.white} />
    ) : (
      <Text style={[commonStyle.h2_Bold, styles.txtColor]}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  blueBtn: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: colors.blue,
  },
  txtColor: {
    color: '#fff',
  },
});
