import React, {Fragment, useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
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
  email: Yup.string().email().required(),
  password: Yup.string().required(),
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
          <View style={{marginBottom: 30}}>
            <View
              style={{
                marginBottom: 10,
                height: 35,
                width: 35,
              }}>
              <Image
                source={require('../../../assets/img/logo.png')}
                style={commonStyle.imgC}
              />
            </View>

            <Text style={[commonStyle.h1_Bold, styles.bottomMargin]}>
              {t('signin')}
            </Text>
          </View>

          <Formik
            initialValues={{email: '', password: ''}}
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
                <InputText
                  value={values.email}
                  placeholder={t('emailAddress')}
                  onChangeText={handleChange('email')}
                  errorFlag={errors.email && touched.email}
                  errorText={errors.email}
                  keyboardType="email-address"
                />
                <InputText
                  value={values.password}
                  placeholder={t('password')}
                  onChangeText={handleChange('password')}
                  errorFlag={errors.password && touched.password}
                  errorText={errors.password}
                  secured
                />
                <TouchableOpacity style={{marginTop: 30}} onPress={() => {}}>
                  <Text style={[commonStyle.p_regular, styles.pMargin]}>
                    {t('forgot')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Text
                    style={[commonStyle.p_regular_grey, styles.pMarginLast]}>
                    {t('register')}
                  </Text>
                </TouchableOpacity>
                <BtnPrimary
                  onPress={() => {
                    handleSubmit();
                  }}
                  loading={loading}
                  style={styles.bottomMargin}
                  title={t('login')}
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
});
