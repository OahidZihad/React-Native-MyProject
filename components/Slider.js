import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Slider = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      showsPagination={false}>
      <View style={styles.slide1}>
        <Image
          style={styles.slideImage}
          source={require('../assets/slide.png')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.slideImage}
          source={require('../assets/slide.png')}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.slideImage}
          source={require('../assets/slide.png')}
        />
      </View>
    </Swiper>
  );
};

export default Slider;

const styles = StyleSheet.create({
  wrapper: {
    height: 130,
  },
  slide1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '98%',
    height: 130,
    borderRadius: 10,
  },
});
