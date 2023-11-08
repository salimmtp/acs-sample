import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import commonStyle from '../config/commonStyle';
import {colors} from '../config/theme';
import {horizontalPadding, regular} from '../config/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export const BtnPrimary = ({onPress, title, style = {}, loading = false}) => (
  <TouchableOpacity onPress={() => onPress()} style={[styles.blueBtn, style]}>
    {loading ? (
      <ActivityIndicator color={colors.white} />
    ) : (
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Text style={[commonStyle.h2_Bold, styles.txtColor]}>{title}</Text>
        <FontAwesomeIcon icon={faChevronRight} color={'#FFF'} size={18} />
      </View>
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
