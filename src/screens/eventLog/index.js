import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../commonComponents/Container';
import Header from '../../commonComponents/Header';
import Item from './Item';
import dummyData from './sampleData';
export default function EventLog() {
  return (
    <Container>
      <Header title={`EVENT LOG`} />

      <View style={styles.container}>
        {dummyData.map((e, i) => (
          <Item
            key={`item-key-${i}`}
            date={e.date}
            time={e.time}
            door={e.door}
            keyColor={e.keyColor}
            success={e.success}
          />
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 13,
    borderBottomRightRadius: 13,
    overflow: 'hidden',
  },
});
