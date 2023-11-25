import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import commonStyle from '../config/commonStyle';
import {borderRadius, colors} from '../config/theme';
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
          alignItems: 'center',
        }}>
        <Text style={[commonStyle.h2_Bold, styles.txtColor]}>{title}</Text>
        <FontAwesomeIcon icon={faChevronRight} color={'#FFF'} size={18} />
      </View>
    )}
  </TouchableOpacity>
);

export const BtnSmall = ({style = {}, text, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.smallBtnContainer, style]}
      onPress={onPress}>
      <Text style={[commonStyle.h2_Bold, {color: colors.white}]}>{text}</Text>
    </TouchableOpacity>
  );
};

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
  smallBtnContainer: {
    borderRadius,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.blue,
    alignSelf: 'center',
  },
});
