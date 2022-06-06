import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Delivery = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Next Delivery:</Text>
      <Image
        style={styles.deliveryIcon}
        source={require('../assets/delivery.png')}
      />
      <View style={styles.deliveryService}>
        <Text style={styles.deliveryServiceText}>Express 60 Mins</Text>
      </View>
      <Image
        style={styles.deliveryIcon}
        source={require('../assets/24-hours.png')}
      />
      <View style={styles.deliveryService}>
        <Text style={styles.deliveryServiceText}>24/7 Open</Text>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 2,
  },
  deliveryIcon: {
    marginHorizontal: 5,
  },
  text: {
    color: '#BD0451',
    fontSize: 17,
    marginLeft: 10,
  },
  deliveryService: {
    backgroundColor: '#BD0451',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 20,
  },
  deliveryServiceText: {
    color: '#fff',
    fontWeight: '500',
  },
});
