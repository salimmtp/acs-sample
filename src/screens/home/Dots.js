// @desc : Custom bottom pagination Dot component for Swiper

import React from 'react';
import {StyleSheet, View} from 'react-native';

const dotsArr = [0, 1, 2];

export default ({active}) => (
  <View style={styles.bSectionSpace}>
    {dotsArr.map(e => (
      <View
        key={`dot-${e}`}
        style={[
          styles.swiperDiv,
          e === 1 && styles.extraMargin,
          e === active && styles.swiperActive,
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  bSectionSpace: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 48,
    alignItems: 'center',
  },
  swiperDiv: {
    backgroundColor: '#256087',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  swiperActive: {
    backgroundColor: '#7FA0B7',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
