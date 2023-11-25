import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {colors, borderRadius} from '../config/theme';

export const PageLoader = () => (
  <>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
    <View style={styles.loaderContainer}>
      <View style={styles.loaderWrp}>
        <ActivityIndicator
          size={Platform.OS === 'ios' ? 'large' : 50}
          color={colors.blue}
        />
      </View>
    </View>
  </>
);

export const Loader = () => (
  <ActivityIndicator
    size={Platform.OS === 'ios' ? 'small' : 30}
    color={colors.blue}
  />
);

export const LoadMore = () => (
  <View style={styles.loaderV}>
    <ActivityIndicator
      size={Platform.OS === 'ios' ? 'small' : 30}
      color={colors.blue}
    />
  </View>
);

const styles = StyleSheet.create({
  flex: {flex: 1},
  cFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderWrp: {
    width: 70,
    height: 70,
    borderRadius,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderV: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
