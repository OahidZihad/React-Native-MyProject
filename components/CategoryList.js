import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const CategoryList = () => {
  return (
    <View style={styles.body}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#CC0A61'}]}>
            <Image source={require('../assets/Rectangle25.png')} />
          </View>
          <Text style={styles.title}>OTC Medicine</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#FFA500'}]}>
            <Image source={require('../assets/Rectangle26.png')} />
          </View>
          <Text style={styles.title}>Supplements</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#0000FF'}]}>
            <Image source={require('../assets/Rectangle27.png')} />
          </View>
          <Text style={styles.title}>Dairy</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#CC0A61'}]}>
            <Image source={require('../assets/Rectangle28.png')} />
          </View>
          <Text style={styles.title}>Flavouring</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#D9E021'}]}>
            <Image source={require('../assets/Rectangle29.png')} />
          </View>
          <Text style={styles.title}>Beverages</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#5AACFE'}]}>
            <Image source={require('../assets/Rectangle30.png')} />
          </View>
          <Text style={styles.title}>Almarai</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#45CE0D'}]}>
            <Image source={require('../assets/Rectangle31.png')} />
          </View>
          <Text style={styles.title}>Skin Care</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#15FFFF'}]}>
            <Image source={require('../assets/Rectangle32.png')} />
          </View>
          <Text style={styles.title}>Hair Care</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#FFA500'}]}>
            <Image source={require('../assets/Rectangle33.png')} />
          </View>
          <Text style={styles.title}>Body Care</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#17C3FF'}]}>
            <Image source={require('../assets/Rectangle34.png')} />
          </View>
          <Text style={styles.title}>Baby Care</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#CC0A61'}]}>
            <Image source={require('../assets/Rectangle35.png')} />
          </View>
          <Text style={styles.title}>Private Box</Text>
        </View>
        <View style={styles.categoryCircularContainer}>
          <View style={[styles.categoryCircular, {borderColor: '#D9E021'}]}>
            <Image source={require('../assets/Rectangle30.png')} />
          </View>
          <Text style={styles.title}>Medical Device</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  body: {
    marginVertical: 5,
  },
  categoryCircularContainer: {
    margin: 10,
  },
  categoryCircular: {
    borderWidth: 6,
    width: 70,
    height: 70,
    borderRadius: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 10,
  },
});
