import React, {useState} from 'react';
import {
  View,
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  FAB,
  Portal,
  Dialog,
  Button,
  Divider,
  Headline,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import axios from 'axios';
import global from '../styles/global';
// country picker
import CountryPicker from 'react-native-country-picker-modal';

const AddCity = ({navigation, route}) => {
  // City input config
  const [city, setCity] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const {setConsultAPI} = route.params;

  // Country picker config
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withModal, setWithModal] = useState(true);
  const [withFilter, setWithFilter] = useState(true);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  // Fn for add a city to the list
  const addCity = async () => {
    // Validation for empty fields
    if (city.trim() === '' || countryCode.trim() === '') {
      setAlertVisible(true);
      return;
    }

    // Validate city name and create variable with data weather of the city from API OpenWeatherMap
    let cityData;
    try {
      const APIkey = '9ce6fc357f002e0fdb6ef7e8411a0c08';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APIkey}`;
      const result = await axios.get(url);
      const {name, sys, main, coord, weather} = result.data;
      cityData = {
        cityName: name,
        countryCode: sys.country,
        temperature: main.temp,
        coord: coord,
        icon: weather[0].icon,
      };
    } catch (error) {
      showAlert('City not found', 'Use a valid city name');
      return;
    }

    // Add city to the list
    try {
      const url = 'http://10.0.2.2:3000/cityList';
      await axios.post(url, cityData);
    } catch (error) {
      showAlert('City not added', 'Try again later or contact support');
      return;
    }
    // Redirect to the list
    navigation.navigate('CityList');
    // Update the list of cities
    setConsultAPI(true);
  };

  // Fn for close keyboard
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  // Alert
  const showAlert = (title, message) => {
    Alert.alert(title, message, [{text: 'OK'}]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={global.container}>
        <Headline style={global.title}>Add a city</Headline>
        <Paragraph style={[global.text, styles.text]}>
          Select a country. Then complete the field with a valid city.
        </Paragraph>
        <Divider style={styles.divider} />
        <View style={styles.picker}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withModal,
              onSelect,
            }}
          />
        </View>
        <Divider style={styles.divider} />
        {country ? (
          <>
            <TextInput
              label={'City Name'}
              value={city}
              onChangeText={inputCity => setCity(inputCity)}
              underlineColor="#ccc"
              style={styles.input}
            />
            <Button
              icon="playlist-plus"
              mode="contained"
              style={styles.btnAddCity}
              onPress={() => addCity()}>
              Add City
            </Button>
          </>
        ) : null}
        <FAB
          style={global.fab}
          small
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />
        <Portal>
          <Dialog
            visible={alertVisible}
            onDismiss={() => setAlertVisible(false)}>
            <Dialog.Title>Fill the fields</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                The fields can't be empty and must be a valid city name.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button color="#000" onPress={() => setAlertVisible(false)}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnAddCity: {
    marginTop: 20,
  },
  text: {
    marginBottom: 20,
  },
  picker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: 'transparent',
  },
  divider: {
    borderWidth: 0.2,
    borderColor: '#FFF',
    opacity: 0.7,
  },
});

export default AddCity;
