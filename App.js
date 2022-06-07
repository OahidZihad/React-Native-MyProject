import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#BD0451',
          labelStyle: {fontSize: 14, fontWeight: 'bold'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#BD0451' : null,
                  }}
                  source={require('./assets/house.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home1"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#BD0451' : null,
                  }}
                  source={require('./assets/searchTab.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home2"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#BD0451' : null,
                  }}
                  source={require('./assets/coupons.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home3"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              console.log('color: ', color, 'size: ', size);
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#BD0451' : null,
                  }}
                  source={require('./assets/shopping-cart.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home4"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#BD0451' : null,
                  }}
                  source={require('./assets/more.png')}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F2F2F2',
    // backgroundColor: '#ffffff',
  },
});

export default App;
