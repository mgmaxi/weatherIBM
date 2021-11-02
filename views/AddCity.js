import React, {useState} from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  FAB,
  Portal,
  Dialog,
  Button,
  Headline,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import global from '../styles/global';

const AddCity = ({navigation, route}) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const {setConsultAPI} = route.params;

  // Fn for add a city to the list
  const addCity = async () => {
    // Validation
    if (city.trim() === '' || country.trim() === '') {
      setAlertVisible(true);
      return;
    }

    // Add city to the list
    const listUpdated = {city, country};

    try {
      const url = 'http://10.0.2.2:3000/cityList';
      await axios.post(url, listUpdated);
    } catch (error) {
      console.log(error);
    }

    // Redirect to the list
    navigation.navigate('CityList');

    // Update the list of cities
    setConsultAPI(true);
  };

  // Fn for Close KeyBoard
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={global.container}>
        <Headline style={global.title}>Add a city</Headline>
        <TextInput
          label={'City Name'}
          value={city}
          onChangeText={inputCity => setCity(inputCity)}
          style={styles.input}
        />

        <Picker
          selectedValue={country}
          onValueChange={itemValue => setCountry(itemValue)}>
          <Picker.Item label="- Select a Country -" value="" />
          <Picker.Item label="United States" value="US" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="México" value="MX" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="Perú" value="PE" />
        </Picker>

        <Button
          icon="playlist-plus"
          mode="contained"
          style={styles.btnAddCity}
          onPress={() => addCity()}>
          Add City
        </Button>

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
              <Paragraph sty>
                The fields can't be empty and must be valid names.
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
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default AddCity;
