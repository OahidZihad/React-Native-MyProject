import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CleanHome = () => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={[styles.text, {color: '#BD0451'}]}>Clean Home =</Text>{' '}
        Happy Home!
      </Text>

      <View style={styles.body}>
        <View style={styles.cleanHomeContainer}>
          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/laundry.png')}></Image>
              <Text style={styles.text}>Laundry</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/cleaning.png')}></Image>
              <Text style={styles.text}>Cleaning Supplies</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/toilet-paper.png')}></Image>
              <Text style={styles.text}>Essential Rolls</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/tissue-paper.png')}></Image>
              <Text style={styles.text}>Tissues</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/cleaningg.png')}></Image>
              <Text style={styles.text}>Home Cleaning</Text>
            </View>
          </View>

          <View style={styles.cleanProduct}>
            <View style={styles.innerProduct}>
              <Image source={require('../assets/garbage.png')}></Image>
              <Text style={styles.text}>Garbage Bag</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CleanHome;

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
