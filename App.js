import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import Weather from './views/Weather';
import Map from './views/Map';
import AboutUs from './views/AboutUs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#6c64fb'}}
        shifting={false}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Weather"
          component={Weather}
          options={{
            tabBarLabel: 'Weather',
            tabBarIcon: ({color}) => (
              <Icon name="weather-partly-cloudy" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="map-marker" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            tabBarLabel: 'About Us',
            tabBarIcon: ({color}) => (
              <Icon name="information" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
