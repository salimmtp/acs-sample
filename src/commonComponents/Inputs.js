import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import CommonStyles from '../config/commonStyle';
import {colors} from '../config/theme';
export const InputText = ({
  style,
  value,
  onChangeText,
  errorFlag,
  errorText,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  secured,
  height = 50,
  multilineHeight = 200,
  multiline = false,
  editable = true,
}) => (
  <View style={[styles.containerMargin, style]}>
    <TextInput
      style={[
        styles.textInput,
        !editable && styles.greyBack,
        multiline ? {height: multilineHeight} : {height: height},
        errorFlag && styles.alertRed,
      ]}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      onChangeText={text => onChangeText(text)}
      keyboardType={keyboardType}
      value={value}
      multiline={multiline}
      secureTextEntry={secured}
      autoCapitalize={autoCapitalize}
      editable={editable}
    />
    {errorFlag && (
      <Text style={[CommonStyles.p_normal_grey, styles.alertTxtRed]}>
        {errorText}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    color: colors.white,
    borderColor: colors.lightBlue,
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor: colors.greyBlue,
  },
  containerMargin: {marginBottom: 15},
  alertRed: {borderColor: 'red'},
  alertTxtRed: {color: 'red'},
  greyBack: {backgroundColor: 'rgba(166,166,166,0.2)'},
  textViewMobile: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  center: {justifyContent: 'center'},
  nineOne: {color: '#B3B3B3', marginLeft: 10},
  flex: {flex: 1},
});
