import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

const WeatherMap = ({cityList}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -38.416097,
          longitude: -63.616672,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}>
        {cityList.map(data => (
          <Marker
            key={data.id}
            coordinate={{
              latitude: data.lat,
              longitude: data.lon,
            }}
            image={require('../assets/weatherMark.png')}>
            <Callout tooltip>
              <View>
                <View style={styles.containerMarker}>
                  <Text style={styles.markerTitle}>{data.city}</Text>
                  <Text style={styles.markerSubTitle}>temperature</Text>
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
