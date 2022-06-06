import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FreeDoctor = () => {
  return (
    <View style={styles.body}>
      <View style={styles.authContainer}>
        <View>
          <Text style={styles.text}>Free Doctor</Text>
          <Text style={[styles.text, {fontSize: 24}]}>
            Book Your Consultation
          </Text>
        </View>
        {/* <View android_ripple={{color: 'white'}}> */}
        <Image source={require('../assets/standDoctor.png')}></Image>
        {/* </View> */}
      </View>
    </View>
  );
};

export default FreeDoctor;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#044EBD',
    width: '98%',
    borderRadius: 10,
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
  },
});
