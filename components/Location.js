import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Location = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.locationIcon}
        source={require('../assets/location.png')}
      />
      <Text style={styles.text}>Your Location</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#72114E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
