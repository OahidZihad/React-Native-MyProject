import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Health = () => {
  return (
    <View style={styles.body}>
      <View style={styles.body2}>
        <View style={styles.easier}>
          <Text style={styles.smallText}>Easier</Text>
          <Text style={styles.largeText}>Upload Your Prescrip</Text>
          <View style={styles.presImageContainer}>
            <Image
              style={styles.presImage}
              source={require('../assets/pres.png')}
            />
          </View>
        </View>
        <View style={styles.live}>
          <Text style={styles.smallText}>Live</Text>
          <Text style={styles.largeText}>Consult With Doctors</Text>
          <View style={styles.presImageContainer}>
            <Image
              style={styles.presImage}
              source={require('../assets/doctor.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body2: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  easier: {
    width: '49%',
    backgroundColor: '#01870A',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  live: {
    width: '49%',
    backgroundColor: '#870182',
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
  presImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
});
