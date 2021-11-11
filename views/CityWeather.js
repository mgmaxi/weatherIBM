import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  FAB,
  Title,
  Alert,
  Portal,
  Dialog,
  Button,
  Paragraph,
} from 'react-native-paper';
import axios from 'axios';
import global from '../styles/global';
import CityWeatherCard from '../components/CityWeatherCard';

const CityWeather = ({navigation, route}) => {
  const {setConsultAPI} = route.params;
  // Variables from DB list
  const {id, cityName, countryCode} = route.params.item;
  // Variable with data of weather from API OpenWeatherMap
  const [cityWeather, setCityWeather] = useState({});
  // Alert setting
  const [alertVisible, setAlertVisible] = useState(false);

  // Fn get City Weather from API OpenWeatherMap
  useEffect(() => {
    const getCityWeather = async () => {
      try {
        const APIkey = '9ce6fc357f002e0fdb6ef7e8411a0c08';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${APIkey}`;
        const result = await axios.get(url);
        setCityWeather(result.data);
      } catch (error) {
        showAlert(error, "Couldn't get the weather of the city.");
      }
    };
    getCityWeather();
  }, []);

  // Fn for delete a city from the list
  const deleteCity = async id => {
    // Hide alert
    setAlertVisible(false);

    // Delete from DB
    try {
      const url = `http://10.0.2.2:3000/cityList/${id}`;
      await axios.delete(url);
    } catch (error) {
      //alerta
      showAlert(error, "Couldn't delete the city from the list.");
    }

    // Redirect
    navigation.navigate('CityList');

    // Update city list
    setConsultAPI(true);
  };

  // Alert
  const showAlert = (title, message) => {
    Alert.alert(title, message, [{text: 'OK'}]);
  };

  return (
    <View style={global.container}>
      <View>
        {Object.keys(cityWeather).length === 0 ? (
          <View>
            <Title>Geting weather from {cityName}!</Title>
            <Paragraph>
              Remember it must be a valid city name and country.
            </Paragraph>
          </View>
        ) : (
          <CityWeatherCard cityWeather={cityWeather} navigation={navigation} />
        )}
      </View>
      <Button
        icon="delete"
        mode="contained"
        color="#FF0000"
        style={global.btnDeleteCity}
        onPress={() => setAlertVisible(true)}>
        Delete city
      </Button>
      <FAB
        style={global.fab}
        small
        icon="arrow-left"
        onPress={() => navigation.goBack()}
      />
      <Portal>
        <Dialog visible={alertVisible} onDismiss={() => setAlertVisible(false)}>
          <Dialog.Title>Delete City</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Do you want to delete this city from your list?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              color="#000"
              style={global.btnCancel}
              onPress={() => setAlertVisible(false)}>
              Cancel
            </Button>
            <Button
              color="#FFF"
              style={global.btnDelete}
              onPress={() => deleteCity(id)}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CityWeather;
