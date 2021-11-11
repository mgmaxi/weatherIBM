import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import WeatherMap from '../components/WeatherMap';

const Map = () => {
  const [cityList, setCityList] = useState([]);

  // Consult DB for get the list of cities
  useEffect(() => {
    const getCityList = async () => {
      try {
        const url = 'http://10.0.2.2:3000/cityList';
        const result = await axios.get(url);
        setCityList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCityList();
  }, []);

  return (
    <View style={styles.container}>
      <WeatherMap cityList={cityList} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
