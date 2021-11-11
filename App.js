import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Map from './views/Map';
import Home from './views/Home';
import AddCity from './views/AddCity';
import AboutUs from './views/AboutUs';
import CityList from './views/CityList';
import CityWeather from './views/CityWeather';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// Stack and Tab for Navigation
const Tab = createMaterialBottomTabNavigator();
const WeatherStack = createStackNavigator();

const WeatherStackScreen = () => {
  return (
    <WeatherStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <WeatherStack.Screen
        name="CityList"
        component={CityList}
        options={{title: 'City List'}}
      />
      <WeatherStack.Screen
        name="AddCity"
        component={AddCity}
        options={{title: 'Add a City'}}
      />
      <WeatherStack.Screen
        name="CityWeather"
        component={CityWeather}
        options={{title: 'Weather of a City'}}
      />
    </WeatherStack.Navigator>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#93BAF2',
  },
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          initialRouteName="Home"
          inactiveColor="#3e2465"
          barStyle={{backgroundColor: '#6c64fb'}}>
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
            component={WeatherStackScreen}
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
    </PaperProvider>
  );
};

export default App;
