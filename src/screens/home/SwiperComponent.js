import {View, Text, StyleSheet, Image} from 'react-native';
import commonStyle from '../../config/commonStyle';

export default SwiperComponent = ({img, keyName}) => {
  return (
    <View style={commonStyle.flex}>
      <View style={commonStyle.flex}>
        <View style={commonStyle.centerFull}>
          <View style={styles.image}>
            <Image style={commonStyle.imgC} source={img} />
          </View>
        </View>
      </View>
      <View style={styles.keyNameCont}>
        <View style={styles.keyName}>
          <Text style={[commonStyle.p_regular, styles.pMargin]}>{keyName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  keyNameCont: {
    display: 'flex',
    justifyContent: 'center',
  },
  keyName: {
    alignSelf: 'center',
    marginTop: 45,
  },
});
