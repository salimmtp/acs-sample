import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../config/theme';
import Swiper from 'react-native-swiper';
import SwiperComponent from './SwiperComponent.js';
import Dots from './Dots';
import commonStyle from '../../config/commonStyle';

export default Home = () => {
  const [isActive, setActive] = useState(0);
  const swiper = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.settingIconContainer}>
        <TouchableOpacity
          onPress={() => alert('settings')}
          style={styles.settingIcon}>
          <Image
            style={commonStyle.imgC}
            source={require('../../../assets/img/gear.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Multiple keys - swiper componenets */}
      <Swiper
        ref={swiper}
        style={styles.wrapper}
        showsButtons={false}
        index={isActive}
        loop={false}
        onIndexChanged={i => setActive(i)}
        showsPagination={false}>
        <SwiperComponent
          key="swiper-1"
          img={require('../../../assets/img/came_key.png')}
          keyName={`CAME UK - North`}
        />
        <SwiperComponent
          key="swiper-2"
          img={require('../../../assets/img/came-key-02.png')}
          keyName={`CAME UK - South`}
        />
        <SwiperComponent
          key="swiper-3"
          img={require('../../../assets/img/came_key.png')}
          keyName={`Entrotec`}
        />
      </Swiper>
      <View style={styles.actionCont}>
        <Dots active={isActive} />
        <TouchableOpacity style={styles.btnWhite_S}>
          <Text style={[commonStyle.p_regular, styles.pMargin]}>
            Report access denied
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.primary,
  },
  settingIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginVertical: 40,
  },
  settingIcon: {width: 30, height: 30, marginRight: 15},
  actionCont: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 60,
  },
  btnWhite_S: {
    backgroundColor: '#7FA0B7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
