import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Container from '../../commonComponents/Container';
import commonStyle from '../../config/commonStyle';

export default Home = () => {
  return (
    <Container>
      {/* <View style={{display: 'flex', flex: 1, justifyContent: 'space-between'}}> */}
      <View
        style={{display: 'flex', alignItems: 'flex-end', marginVertical: 40}}>
        <View style={{width: 30, height: 30}}>
          <Image
            style={commonStyle.imgC}
            source={require('../../../assets/img/gear.png')}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 300,
            height: 300,
          }}>
          <Image
            style={commonStyle.imgC}
            source={require('../../../assets/img/came_key.png')}
          />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text style={[commonStyle.p_regular, styles.pMargin]}>
            came UK - North
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#7FA0B7',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <Text style={[commonStyle.p_regular, styles.pMargin]}>
            Report access denied
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </Container>
  );
};

const styles = StyleSheet.create({});
