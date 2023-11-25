import React, {Fragment, useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {BtnPrimary} from '../../commonComponents/Button.js';
import {InputText} from '../../commonComponents/Inputs';
import commonStyle from '../../config/commonStyle';
import {colors, horizontalPadding, borderRadius} from '../../config/theme';
import {API_BASE_URL} from '../../config';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../../context';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

const formValidation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default ({navigation}) => {
  const {signIn, signOut} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.componentsCont}>
          <View style={styles.iconCont}>
            <View style={styles.icon}>
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
            initialValues={{email: 'jon@gmail.com', password: 'password@1234'}}
            onSubmit={values => {
              setLoading(true);
              setTimeout(() => {
                // navigation.navigate('Home');
                setLoading(false);
                signIn('token');
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
                <TouchableOpacity
                  style={styles.checkboxCont}
                  onPress={() => setRememberMe(!rememberMe)}>
                  <View style={styles.checkbox}>
                    {rememberMe ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        color={colors.blue}
                        size={11}
                      />
                    ) : null}
                  </View>
                  <Text style={[commonStyle.p_regular, {marginLeft: 8}]}>
                    {t('remember')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
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
  // Icon
  iconCont: {marginBottom: 30},
  icon: {
    marginBottom: 10,
    height: 35,
    width: 35,
  },
  // checkbox
  checkboxCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  checkbox: [
    {
      borderRadius: 7,
      height: 20,
      width: 20,
      borderWidth: 1,
      borderColor: colors.lightBlue,
      backgroundColor: colors.greyBlue,
    },
    commonStyle.center,
  ],
});
