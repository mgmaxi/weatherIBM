import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList, StyleSheet} from 'react-native';
import {FAB, List, Button, Headline, Paragraph} from 'react-native-paper';
import axios from 'axios';
import global from '../styles/global';

const CityList = ({navigation}) => {
  const [cityList, setCityList] = useState({});
  const [consultAPI, setConsultAPI] = useState(true);

  // Consult DB for get the cities added to the list
  useEffect(() => {
    const getCityList = async () => {
      try {
        const url = 'http://10.0.2.2:3000/cityList';
        const result = await axios.get(url);
        setCityList(result.data);
        setConsultAPI(false);
      } catch (error) {
        showAlert("Couldn't get the list of cities", error.message);
      }
    };
    if (consultAPI) {
      getCityList();
    }
  }, [consultAPI]);

  //Fn for navigate to AddCity screen
  const goAddCity = () => {
    navigation.navigate('AddCity', {setConsultAPI});
  };

  // Alert
  const showAlert = (title, message) => {
    Alert.alert(title, message, [{text: 'OK'}]);
  };

  return (
    <View style={global.container}>
      <Headline style={global.title}>City List</Headline>
      <Paragraph style={global.text}>
        Add a City or select one from your list to get more details!
      </Paragraph>
      <Button
        style={styles.btnGoAddCity}
        icon="city"
        mode="contained"
        onPress={() => goAddCity()}>
        Add a City
      </Button>
      <FlatList
        data={cityList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <List.Item
            title={item.cityName}
            titleStyle={{fontWeight: 'bold'}}
            description={item.countryCode}
            onPress={() =>
              navigation.navigate('CityWeather', {item, setConsultAPI})
            }
            left={props => <List.Icon {...props} icon="city" />}
          />
        )}
      />
      <FAB style={global.fab} small icon="plus" onPress={() => goAddCity()} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnGoAddCity: {
    marginTop: 10,
  },
  containerListItem: {
    flexDirection: 'row',
  },
  temperature: {
    marginLeft: 5,
    paddingVertical: 5,
  },
});

export default CityList;
