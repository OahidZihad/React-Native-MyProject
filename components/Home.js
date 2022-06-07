import React from 'react';
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import AuthContainer from './AuthContainer';
import BuyAgain from './BuyAgain';
import CategoryList from './CategoryList';
import Delivery from './Delivery';
import ExpressDelivery from './ExpressDelivery';
import FreeDoctor from './FreeDoctor';
import Header from './Header';
import Health from './Health';
import Location from './Location';
import PopularPicks from './PopularPicks';
import Slider from './Slider';
import CleanHome from './CleanHome';
import YourBaby from './YourBaby';
import PopularGroceries from './PopularGroceries';

const App = () => {
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#BD0451" />
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
      <CleanHome></CleanHome>
      <YourBaby></YourBaby>
      <PopularGroceries></PopularGroceries>
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
