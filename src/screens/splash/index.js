import React, {Fragment, useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {BtnPrimary} from '../../commonComponents/Button.js';
import {InputText, InputTextMobile} from '../../commonComponents/Inputs';
import commonStyle from '../../config/commonStyle';
import {colors, horizontalPadding} from '../../config/theme';
import {API_BASE_URL} from '../../config';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../../context';
import axios from 'axios';

const formValidation = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
});

export default ({navigation}) => {
  const {signIn, signOut} = {signIn: true, signOut: () => {}};
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.componentsCont}>
          <View
            style={{
              marginTop: 95,
              height: 110,
              width: 250,
            }}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}
              source={require('./lg.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: 140,
            paddingTop: 30,
            backgroundColor: colors.primary,
            display: 'flex',
            alignItems: 'center',
          }}>
          <View style={{height: 40, width: 180}}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}
              source={require('./lg1.png')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},

  componentsCont: {
    paddingHorizontal: horizontalPadding,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMargin: {marginBottom: 16},
  pMargin: {marginBottom: 10},
  pMarginLast: {marginBottom: 20},
  passwordExtra: {marginBottom: 18},
  centerAlign: {alignItems: 'flex-end', marginBottom: 10},
});
