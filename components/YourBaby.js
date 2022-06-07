import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const YourBaby = () => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={[styles.text, {color: '#BD0451'}]}>For You and</Text> Your
        Baby
      </Text>

      <View style={styles.body}>
        <View style={styles.cleanHomeContainer}>
          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/diapers.png')}></Image>
              <Text style={styles.text}>Diapers</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/baby-food.png')}></Image>
              <Text style={styles.text}>Baby Food</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/hair-care.png')}></Image>
              <Text style={styles.text}>Baby Hair-Care</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/mother.png')}></Image>
              <Text style={styles.text}>Moms</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/dental-checkup.png')}></Image>
              <Text style={styles.text}>Dental Care</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/Rectangle33.png')}></Image>
              <Text style={styles.text}>Body Care</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default YourBaby;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    margin: 10,
  },
  cleanHomeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '96%',
  },
  cleanProduct: {
    width: '32%',
    marginVertical: '1%',
    backgroundColor: '#D7428540',
    paddingVertical: 15,
    borderRadius: 5,
  },
  innerProduct: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
