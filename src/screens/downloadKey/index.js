import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../../commonComponents/Container';
import {borderRadius, colors, horizontalPadding} from '../../config/theme';
import commonStyle from '../../config/commonStyle';
import {BtnSmall} from '../../commonComponents/Button';
import {useTranslation} from 'react-i18next';

export default function DownloadKey({navigation}) {
  const {t} = useTranslation();
  return (
    <Container>
      <View style={styles.centeredView}>
        <Pressable
          onPress={() => {
            // to avoid onPress function of parent
          }}
          style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.headerItemAlign}>
              <Text style={[commonStyle.h2_Bold, {color: colors.white}]}>
                {t('smartCredential')}
              </Text>
              <View />
            </View>
          </View>
          <View style={styles.modalBody}>
            <Text style={commonStyle.p_Regular_black}>
              {t('dPara1')} {'\n'}
              {'\n'}
              {t('dPara2')}
            </Text>
            <View style={styles.modalFooter}>
              <BtnSmall
                text={t('yes')}
                onPress={() => {
                  navigation.navigate('Downloading');
                }}
              />
              <BtnSmall text={t('no')} style={styles.btnGray} />
            </View>
          </View>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    paddingTop: 130,
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    borderRadius,
    overflow: 'hidden',
  },
  modalHeader: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  headerItemAlign: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  modalBody: {
    padding: 20,
    backgroundColor: colors.white,
  },
  modalFooter: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  btnGray: {backgroundColor: '#b5c0c4', marginLeft: 8},
});
