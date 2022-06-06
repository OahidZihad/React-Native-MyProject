import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

const Header = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={require('../assets/logo.png')} />
          <View style={styles.input}>
            <Image
              style={styles.searchIcon}
              source={require('../assets/search.png')}></Image>
            <TextInput
              placeholder="Search for products"
              placeholderTextColor="#000"></TextInput>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#BD0451',
    height: 80,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 45,
    color: '#000',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    height: 20,
    marginHorizontal: 15,
  },
});
