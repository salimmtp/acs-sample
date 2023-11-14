import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle from '../../config/commonStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmarkCircle} from '@fortawesome/free-solid-svg-icons/faXmarkCircle';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import {colors} from '../../config/theme';

const Icon = ({icon, color}) => (
  <View style={styles.fontAwsmContainer}>
    <FontAwesomeIcon icon={icon} color={color} size={18} />
  </View>
);
export default function Item({date, time, door, keyColor, success}) {
  const colorObj = {
    blue: '#3259EA',
    red: '#F33600',
    green: '#33C201',
  };

  return (
    <View style={[styles.container, {borderLeftColor: colorObj[keyColor]}]}>
      <View style={styles.dateCont}>
        <View style={styles.row}>
          <Text style={styles.dateTxt}>{date}</Text>
          <Text style={styles.timeTxt}>{time}</Text>
        </View>
        {success ? (
          <Icon icon={faCircleCheck} color={`#53AA7A`} />
        ) : (
          <Icon icon={faXmarkCircle} color={`#DD422F`} />
        )}
      </View>
      <Text style={styles.doorTxt}>{door}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F3E51',
    padding: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#33C201',
    marginBottom: 1,
  },
  fontAwsmContainer: {
    marginTop: 4,
    backgroundColor: colors.white,
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
  },
  dateCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  row: {display: 'flex', flexDirection: 'row'},
  dateTxt: [commonStyle.p_regular, {fontSize: 18}],
  timeTxt: [
    commonStyle.p_regular,
    {fontSize: 18, fontWeight: 'normal', marginLeft: 5},
  ],
  doorTxt: [commonStyle.p_regular_grey, {fontWeight: 'normal'}],
});
