import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {Card, Button, Avatar} from 'react-native-paper';
import global from '../styles/global';

const CityWeatherCard = ({
  navigation,
  cityWeather,
  dayOrNight,
  setAlertVisible,
}) => {
  // Variables with data of weather from API OpenWeatherMap
  const {name: cityName, coord, main, weather} = cityWeather;
  const {temp, temp_min, temp_max} = main;
  const {main: weatherDescription, icon} = weather[0];
  const {currentCityTime, urlBgImage} = dayOrNight;

  const kelvin = 273.15;
  const celciusTemp = parseInt(temp - kelvin);
  const minTemp = parseInt(temp_min - kelvin);
  const maxTemp = parseInt(temp_max - kelvin);

  // Card city icon
  const LeftContent = props => (
    <Avatar.Icon
      style={{
        backgroundColor: '#FFF',
        borderWidth: 0.5,
      }}
      size={38}
      icon="city"
      color="#000"
    />
  );

  return (
    <View>
      <Card style={styles.card} elevation={20}>
        <ImageBackground
          style={styles.bgImage}
          source={{uri: urlBgImage}}
          resizeMode="cover">
          <Card.Title
            style={styles.title}
            title={cityName}
            titleStyle={{fontWeight: 'bold', color: '#FFF'}}
            subtitle={
              <Text>
                <Image
                  style={{height: 20, width: 20}}
                  source={{
                    uri: `http://openweathermap.org/img/w/${icon}.png`,
                  }}
                />
                {weatherDescription}
              </Text>
            }
            subtitleStyle={{color: '#FFF'}}
            left={LeftContent}
          />
          <Card.Content>
            <View style={styles.containerContentCard}>
              <View style={styles.containerIcon}>
                <Image
                  style={{height: 63, width: 71}}
                  source={{
                    uri: `http://openweathermap.org/img/w/${icon}.png`,
                  }}
                />
              </View>
              <View style={styles.containerTemperature}>
                <Text style={styles.temperature}>{celciusTemp}</Text>
              </View>
              <View style={styles.containerCelcius}>
                <Text style={styles.celcius}>&#x2103;</Text>
              </View>
            </View>
            <Text style={styles.time}>{currentCityTime}</Text>
            <Text style={styles.tempMaxMin}>
              Max {maxTemp} &#x2103; Min {minTemp} &#x2103;
            </Text>
          </Card.Content>
        </ImageBackground>
      </Card>
      <View style={styles.containerBtn}>
        <Button
          onPress={() => navigation.navigate('Map', coord)}
          icon="map"
          mode="contained"
          style={global.btnGoMap}>
          Map
        </Button>
        <Button
          icon="delete"
          mode="contained"
          color="#FF0000"
          style={global.btnDeleteCity}
          onPress={() => setAlertVisible(true)}>
          Delete
        </Button>
        <Button
          onPress={() => navigation.goBack()}
          icon="arrow-left"
          mode="contained"
          style={global.btnGoBack}>
          Back
        </Button>
      </View>
    </View>
  );
};

export default CityWeatherCard;

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
    minHeight: 565,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 0,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    opacity: 0.75,
  },
  containerContentCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerTemperature: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerCelcius: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  temperature: {
    color: '#FFF',
    fontSize: 92,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  celcius: {
    paddingTop: 20,
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  time: {color: '#FFF', textAlign: 'center', fontSize: 18},
  tempMaxMin: {
    marginTop: 10,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 5,
  },
  containerBtn: {
    elevation: 3,
    position: 'relative',
    bottom: 15,
  },
});
