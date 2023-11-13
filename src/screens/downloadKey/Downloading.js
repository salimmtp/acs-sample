import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../commonComponents/Container';
import commonStyle from '../../config/commonStyle';

export default function Downloading({navigation}) {
  const loaders = [1, 2, 3, 4, 5];
  const [activeLoader, setActiveLoader] = useState(1);

  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
      navigation.navigate('Otp');
      return;
    }
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      console.log('counting....');
      setTimeLeft(timeLeft - 1);
      if (activeLoader > 5) {
        setActiveLoader(1);
      } else setActiveLoader(activeLoader + 1);
    }, 900);

    // clear interval on re-render to avoid memory leaks
    return () => {
      clearInterval(intervalId);
    };
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <Container>
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: 80, height: 60, marginBottom: 30}}>
          <Image
            source={require('../../../assets/img/cloud.png')}
            style={commonStyle.imgC}
          />
        </View>
        <View style={{marginBottom: 30}}>
          {loaders.map((e, i) => {
            return (
              <View style={{width: 40, height: 25}} key={`down-arr-${i}`}>
                <Image
                  source={
                    activeLoader === e
                      ? require('../../../assets/img/arrow-down-white.png')
                      : require('../../../assets/img/arrow-down.png')
                  }
                  style={commonStyle.imgC}
                />
              </View>
            );
          })}
        </View>
        <View style={{width: 90, height: 65}}>
          <Image
            source={require('../../../assets/img/mobile.png')}
            style={commonStyle.imgC}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({});
