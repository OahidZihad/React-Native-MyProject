import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

console.log('Screen: ', height);

const FreeDoctor = () => {
  const handleViewRef = useRef(null);
  // console.log('current', handleViewRef.current.animate(fadeIn, 5000));

  // handleViewRef = ref => (View = ref);

  useEffect(() => {
    handleViewRef.current.animate(fadeIn, 5000);
  }, []);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <Animatable.View style={styles.body} ref={handleViewRef}>
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
    </Animatable.View>
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
