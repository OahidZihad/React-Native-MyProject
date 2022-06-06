import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BuyAgain = () => {
  return (
    <View style={styles.body}>
      <View style={styles.body2}>
        <View style={styles.bulk}>
          <View>
            <Text style={styles.smallText}>Save Big</Text>
            <Text style={styles.largeText}>Purchase in Bulk</Text>
          </View>
          <Image source={require('../assets/bulk-buying.png')} />
        </View>
        <View style={styles.quick}>
          <View>
            <Text style={styles.smallText}>Quick</Text>
            <Text style={styles.largeText}>Buy Again</Text>
          </View>
          <Image source={require('../assets/fast-time.png')} />
        </View>
      </View>
    </View>
  );
};

export default BuyAgain;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  body2: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#BD0451',
    width: '49%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  quick: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044EBD',
    width: '49%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  smallText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  largeText: {
    color: '#fff',
    fontSize: 18,
  },
});
