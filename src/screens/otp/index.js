import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import Container from '../../commonComponents/Container';
import commonStyle from '../../config/commonStyle';
import {colors} from '../../config/theme';
import {useTranslation} from 'react-i18next';
import Header from '../../commonComponents/Header';
import {BtnPrimary} from '../../commonComponents/Button';

export default function OTP({navigation}) {
  const [loading, setLoading] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
  });
  const {t} = useTranslation();

  // OTP single digit field helper function
  const otpDigitFunc = (e, value, values, backwardRef, forwardRef) => {
    let textValue = e.trim();
    if (textValue === '') {
      setValues({...values, [value]: textValue});
      backwardRef.current.focus();
    } else {
      setValues({...values, [value]: textValue.split('').pop()});
      forwardRef.current.focus();
    }
  };

  return (
    <Container>
      <Header title={t('otpHeadingline1') + '\n' + t('otpHeadingline2')} />
      <Text style={[commonStyle.p_regular, {marginBottom: 30}]}>
        {t('downloadedTxt')}
      </Text>
      <View style={styles.otpInputsCont}>
        <View style={[styles.otpInputs, errorFlag && {marginBottom: 10}]}>
          <TextInput
            style={styles.inputField}
            value={values.value1}
            onChangeText={e => {
              let textValue = e.trim();
              if (textValue.length === 1) {
                setValues({...values, value1: e});
                ref_input2.current.focus();
              } else if (textValue.length === 6) {
                // from clipbord
                let obj = {};
                textValue.split('').map((e, i) => {
                  obj[`value${i + 1}`] = e;
                });
                setValues(obj);
                ref_input6.current.focus();
              } else if (e === '') {
                setValues({...values, value1: e});
              } else {
                setValues({...values, value1: textValue.split('').pop()});
                ref_input2.current.focus();
              }
            }}
            autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
            ref={ref_input1}
          />
          <TextInput
            style={styles.inputField}
            value={values.value2}
            onChangeText={e => {
              otpDigitFunc(e, `value2`, values, ref_input1, ref_input3);
            }}
            // autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input3.current.focus()}
            ref={ref_input2}
          />
          <TextInput
            style={styles.inputField}
            value={values.value3}
            onChangeText={e => {
              otpDigitFunc(e, `value3`, values, ref_input2, ref_input4);
            }}
            // autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
          />
          <TextInput
            style={styles.inputField}
            value={values.value4}
            onChangeText={e => {
              otpDigitFunc(e, `value4`, values, ref_input3, ref_input5);
            }}
            // autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input5.current.focus()}
            ref={ref_input4}
          />
          <TextInput
            style={styles.inputField}
            value={values.value5}
            onChangeText={e => {
              otpDigitFunc(e, `value5`, values, ref_input4, ref_input6);
            }}
            // autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input6.current.focus()}
            ref={ref_input5}
          />
          <TextInput
            style={styles.inputField}
            value={values.value6}
            onChangeText={e => {
              otpDigitFunc(e, `value6`, values, ref_input5, ref_input6);
            }}
            // autoFocus={true}
            keyboardType="numeric"
            returnKeyType="next"
            // onSubmitEditing={() => ref_input2.current.focus()}
            ref={ref_input6}
          />
        </View>
        {errorFlag ? (
          <Text style={[commonStyle.p_normal_grey, styles.alertTxtRed]}>
            Enter OTP to proceed
          </Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={[commonStyle.p_regular, styles.pMargin]}>
          {t('noMail')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={[
            commonStyle.p_regular_grey,
            {color: colors.blue},
            styles.pMarginLast,
          ]}>
          {t('resendMail')}
        </Text>
      </TouchableOpacity>
      <BtnPrimary
        onPress={() => {
          navigation.navigate('TabHome');
        }}
        loading={loading}
        style={styles.bottomMargin}
        title={t('connect')}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  inputField: {
    paddingHorizontal: 15,
    height: 50,
    width: 45,
    borderColor: 'gray',
    borderWidth: 1,
    color: colors.white,
    borderColor: colors.lightBlue,
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor: colors.greyBlue,
  },
  otpInputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 55 * 6,
  },
  otpInputsCont: {marginBottom: 40},
  pMargin: {marginBottom: 10},
  pMarginLast: {marginBottom: 40},
  alertTxtRed: {color: 'red'},
});
