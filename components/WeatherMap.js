import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

const WeatherMap = ({cityList, coord}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: coord ? coord.lat : -80,
          longitude: coord ? coord.lon : -60,
          latitudeDelta: coord ? 5 : 75,
          longitudeDelta: coord ? 5 : 75,
        }}>
        {cityList.map(data => (
          <Marker
            key={data.id}
            coordinate={{
              latitude: data.coord.lat,
              longitude: data.coord.lon,
            }}
            image={require('../assets/weatherMark.png')}>
            <Callout tooltip>
              <View>
                <View style={styles.containerMarker}>
                  <Text style={styles.markerTitle}>{data.cityName}</Text>
                  <Text style={styles.markerSubTitle}>{data.countryCode}</Text>
                </View>
                <View style={styles.markerArrowBorder} />
                <View style={styles.markerArrow} />
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  containerMarker: {
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 60,
    minWidth: 120,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
  },
  markerTitle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  markerSubTitle: {
    color: '#000',
    textAlign: 'center',
  },
  markerArrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  markerArrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    marginBottom: -15,
  },
});

export default WeatherMap;
