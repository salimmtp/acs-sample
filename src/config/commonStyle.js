import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, regular, medium, bold} from './theme';

export default StyleSheet.create({
  /*------------------------Typography----------------------------*/
  h1_Bold: {
    fontFamily: bold,
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 20,
  },
  h2_Medium: {fontFamily: medium, color: colors.white, fontSize: 14},
  h3_Medium: {fontFamily: medium, color: colors.white, fontSize: 12},
  h3_Bold: {fontFamily: bold, color: colors.white, fontSize: 12},
  h1_Medium: {fontFamily: medium, color: colors.white, fontSize: 16},
  h2_Bold_grey: {
    fontFamily: bold,
    color: colors.greyBright,
    fontWeight: 'bold',
    fontSize: 18,
  },
  h1_Bold_White: {fontFamily: bold, color: colors.white, fontSize: 17},
  p_normal_grey: {
    fontFamily: regular,
    color: '#6D7278',
    fontSize: 13,
    lineHeight: 17,
  },
  p_medium: {
    fontFamily: medium,
    color: '#6D7278',
    fontSize: 12,
  },
  p_regular: {
    fontFamily: regular,
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  p_regular_grey: {
    fontFamily: regular,
    color: colors.grey,
    fontSize: 12,
    fontWeight: 'bold',
  },
  p_small: {
    fontFamily: regular,
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  p_bold_s: {
    fontFamily: bold,
    color: '#6D7278',
    fontSize: 8,
  },

  /*-----------------------------Image-----------------------------*/
  imgC: {flex: 1, width: null, height: null, resizeMode: 'contain'},
  imgR: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  imgS: {flex: 1, width: null, height: null, resizeMode: 'stretch'},
});
