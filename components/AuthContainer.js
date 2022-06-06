import {StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';
import React from 'react';

const AuthContainer = () => {
  return (
    <View style={styles.body}>
      <View style={styles.authContainer}>
        <View style={styles.authTextContainer}>
          <Text style={styles.text}>
            Start an amazing journey with your{' '}
            <Image source={require('../assets/mainLogo.png')}></Image>{' '}
          </Text>
        </View>
        <Pressable style={styles.button} android_ripple={{color: 'white'}}>
          <Text style={styles.buttonText}>LOGIN OR REGISTER</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthContainer;

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
    backgroundColor: '#BD0451',
    width: '98%',
    borderRadius: 10,
    paddingVertical: 5,
  },
  authTextContainer: {
    flexDirection: 'row',
    width: '60%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFAF00',
    height: 35,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    paddingHorizontal: 5,
  },
});
