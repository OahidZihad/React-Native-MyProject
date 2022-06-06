import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import AuthContainer from './components/AuthContainer';
import BuyAgain from './components/BuyAgain';
import CategoryList from './components/CategoryList';
import Delivery from './components/Delivery';
import ExpressDelivery from './components/ExpressDelivery';
import FreeDoctor from './components/FreeDoctor';
import Header from './components/Header';
import Health from './components/Health';
import Location from './components/Location';
import PopularPicks from './components/PopularPicks';
import Slider from './components/Slider';

const App = () => {
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <Header></Header>
      <Location></Location>
      <Delivery></Delivery>
      <AuthContainer></AuthContainer>
      <Slider></Slider>
      <BuyAgain></BuyAgain>
      <Health></Health>
      <CategoryList></CategoryList>
      <FreeDoctor></FreeDoctor>
      <ExpressDelivery></ExpressDelivery>
      <PopularPicks></PopularPicks>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F2F2F2',
    // backgroundColor: '#ffffff',
  },
});

export default App;
