import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Avatar, Card} from 'react-native-paper';
import moment from 'moment';
import global from '../styles/global';

const CityWeatherCard = ({navigation, cityWeather}) => {
  // Variables with data of weather from API OpenWeatherMap
  const {name: cityName, coord, main, timezone, weather} = cityWeather;
  const {temp, temp_min, temp_max} = main;
  const {description, icon} = weather[0];

  const kelvin = 273.15;
  const celciusTemp = parseInt(temp - kelvin);
  const minTemp = parseInt(temp_min - kelvin);
  const maxTemp = parseInt(temp_max - kelvin);

  // Weather Icon
  const LeftContent = props => (
    <Avatar.Image
      {...props}
      style={styles.icon}
      size={48}
      source={{
        uri: `http://openweathermap.org/img/w/${icon}.png`,
      }}
    />
  );

  // Get time of a city
  const getCityTime = format => {
    const currentCityTime = moment()
      .utcOffset(timezone / 60)
      .format(format);
    return currentCityTime;
  };

  return (
    <View>
      <Card elevation={20}>
        <Card.Title
          title={cityName}
          subtitle={description}
          left={LeftContent}
        />
        <Card.Content style={styles.containerCard}>
          <Text style={styles.temperature}>
            {celciusTemp}
            <View style={styles.containerCelcius}>
              <Text style={styles.celcius}>&#x2103;</Text>
            </View>
          </Text>
          <Text style={styles.time}>{getCityTime('h:mm A')}</Text>
          <Text style={styles.tempMaxMin}>
            Max {maxTemp} &#x2103; Min {minTemp} &#x2103;
          </Text>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Button
          onPress={() => navigation.navigate('Map', coord)}
          icon="map"
          mode="contained"
          style={global.btnGoMap}>
          View on map
        </Button>
      </Card>
    </View>
  );
};

export default CityWeatherCard;

const styles = StyleSheet.create({
  containerCard: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
  },
  temperature: {
    width: '100%',
    color: '#FFF',
    fontSize: 62,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
  containerCelcius: {
    paddingBottom: 20,
  },
  celcius: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  time: {fontSize: 16},
  tempMaxMin: {marginVertical: 10, color: '#000', fontSize: 22},
});