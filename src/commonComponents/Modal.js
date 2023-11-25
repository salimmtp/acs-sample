import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

import commonStyle from '../config/commonStyle';
import {colors, horizontalPadding, borderRadius} from '../config/theme';

export default ({modalVisible, setModalVisible, children}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.centeredView}>
        <Pressable
          onPress={() => {
            // to avoid onPress function of parent
          }}
          style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.headerItemAlign}>
              <Text style={[commonStyle.h2_Bold, {color: colors.white}]}>
                Smart Credential
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesomeIcon icon={faXmark} color={'#FFF'} size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.modalBody}>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(53,94,131,0.8)',
    paddingTop: 130,
    alignItems: 'center',
    paddingHorizontal: horizontalPadding,
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
});
