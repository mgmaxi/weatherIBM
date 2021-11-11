import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import axios from 'axios';
import WeatherMap from '../components/WeatherMap';

const Map = ({route}) => {
  const [cityList, setCityList] = useState([]);

  // Consult DB for get the list of cities
  useEffect(() => {
    const getCityList = async () => {
      try {
        const url = 'http://10.0.2.2:3000/cityList';
        const result = await axios.get(url);
        setCityList(result.data);
      } catch (error) {
        showAlert("Couldn't get the list of cities", error);
      }
    };
    getCityList();
  }, []);

  // Alert
  const showAlert = (title, message) => {
    Alert.alert(title, message, [{text: 'OK'}]);
  };

  return (
    <View style={styles.container}>
      {route.params ? (
        <WeatherMap cityList={cityList} coord={route.params} />
      ) : (
        <WeatherMap cityList={cityList} />
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
