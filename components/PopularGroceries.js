import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

const PopularGroceries = () => {
  return (
    <View style={styles.body}>
      <Text style={[styles.text, {marginBottom: 5}]}>
        {' '}
        <Text style={[styles.text, {color: '#BD0451'}]}>Most Popular</Text>{' '}
        Groceries
      </Text>

      <ScrollView
        style={styles.productContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.product}>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>-5% Discount</Text>
            <Image source={require('../assets/heart2.png')} />
          </View>

          <View style={styles.productImgContainer}>
            <Image source={require('../assets/sss.png')} />
          </View>

          <Text style={styles.text}>ALMARAI COWS MILK FULL FAT</Text>
          <Text style={[styles.text, {fontSize: 12}]}>Size: 5kg</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingColor="#FFAF00"
              ratingBackgroundColor="#fff"
              ratingCount={5}
              imageSize={20}
              startingValue={5}
              style={styles.rating}
            />
          </View>
          <Text style={styles.text}>
            <Text style={[styles.text, {color: '#CC0A61'}]}>197</Text> ৳/Pieces
          </Text>
          <Pressable style={styles.button} android_ripple={{color: 'white'}}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </Pressable>
        </View>

        <View style={styles.product}>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>-5% Discount</Text>
            <Image source={require('../assets/heart2.png')} />
          </View>
          <Image source={require('../assets/sss.png')} />
          <Text style={styles.text}>ALMARAI COWS MILK FULL FAT</Text>
          <Text style={[styles.text, {fontSize: 12}]}>Size: 5kg</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingColor="#FFAF00"
              ratingBackgroundColor="#fff"
              ratingCount={5}
              imageSize={20}
              startingValue={5}
              style={styles.rating}
            />
          </View>
          <Text style={styles.text}>
            <Text style={[styles.text, {color: '#CC0A61'}]}>197</Text> ৳/Pieces
          </Text>
          <Pressable style={styles.button} android_ripple={{color: 'white'}}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </Pressable>
        </View>

        <View style={styles.product}>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>-5% Discount</Text>
            <Image source={require('../assets/heart2.png')} />
          </View>
          <Image source={require('../assets/sss.png')} />
          <Text style={styles.text}>ALMARAI COWS MILK FULL FAT</Text>
          <Text style={[styles.text, {fontSize: 12}]}>Size: 5kg</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingColor="#FFAF00"
              ratingBackgroundColor="#fff"
              ratingCount={5}
              imageSize={20}
              startingValue={5}
              style={styles.rating}
            />
          </View>
          <Text style={styles.text}>
            <Text style={[styles.text, {color: '#CC0A61'}]}>197</Text> ৳/Pieces
          </Text>
          <Pressable style={styles.button} android_ripple={{color: 'white'}}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </Pressable>
        </View>

        <View style={styles.product}>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>-5% Discount</Text>
            <Image source={require('../assets/heart2.png')} />
          </View>
          <Image source={require('../assets/sss.png')} />
          <Text style={styles.text}>ALMARAI COWS MILK FULL FAT</Text>
          <Text style={[styles.text, {fontSize: 12}]}>Size: 5kg</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingColor="#FFAF00"
              ratingBackgroundColor="#fff"
              ratingCount={5}
              imageSize={20}
              startingValue={5}
              style={styles.rating}
            />
          </View>
          <Text style={styles.text}>
            <Text style={[styles.text, {color: '#CC0A61'}]}>197</Text> ৳/Pieces
          </Text>
          <Pressable style={styles.button} android_ripple={{color: 'white'}}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularGroceries;

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    marginBottom: 80,
  },
  text: {
    color: '#000',
    fontSize: 16,
    padding: 5,
  },

  productContainer: {
    backgroundColor: '#fff',
  },

  product: {
    width: 190,
    padding: 5,
  },

  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
  },

  discountText: {
    color: '#FF0101',
    backgroundColor: '#FFAF00',
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 3,
  },

  productImgContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#FFAF00',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    // fontWeight: '700',
    // paddingHorizontal: 5,
  },
});
