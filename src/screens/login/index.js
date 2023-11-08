import React, {Fragment, useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import {useTranslation} from 'react-i18next';

const formValidation = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
});

export default ({navigation}) => {
  const {signIn, signOut} = {signIn: true, signOut: () => {}};
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.componentsCont}>
          <Text style={[commonStyle.h1_Bold, styles.bottomMargin]}>
            {t('signin')}
          </Text>

          <Formik
            initialValues={{username: 'jon', email: 'jon@gmail.com'}}
            onSubmit={values => {
              setLoading(true);
              setTimeout(() => {
                navigation.navigate('Details');
                setLoading(false);
              }, 500);
            }}
            validationSchema={formValidation}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <Fragment>
                <Text style={[commonStyle.p_regular, styles.pMargin]}>
                  Username
                </Text>
                <InputText
                  value={values.username}
                  placeholder="Insert your username"
                  onChangeText={handleChange('username')}
                  errorFlag={errors.username && touched.username}
                  errorText={errors.username}
                  keyboardType="default"
                  style={styles.passwordExtra}
                />
                <Text style={[commonStyle.p_regular, styles.pMargin]}>
                  Email address
                </Text>
                <InputText
                  value={values.email}
                  placeholder="Insert your email"
                  onChangeText={handleChange('email')}
                  errorFlag={errors.email && touched.email}
                  errorText={errors.email}
                  keyboardType="email-address"
                  style={styles.passwordExtra}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Text style={[commonStyle.p_regular, styles.pMargin]}>
                    Forgotten your password?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Text
                    style={[commonStyle.p_regular_grey, styles.pMarginLast]}>
                    Register for an account
                  </Text>
                </TouchableOpacity>
                <BtnPrimary
                  onPress={() => {
                    handleSubmit();
                  }}
                  loading={loading}
                  style={styles.bottomMargin}
                  title="Login"
                />
              </Fragment>
            )}
          </Formik>
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
  },
  bottomMargin: {marginBottom: 16},
  pMargin: {marginBottom: 10},
  pMarginLast: {marginBottom: 20},
  passwordExtra: {marginBottom: 18},
  centerAlign: {alignItems: 'flex-end', marginBottom: 10},
});
