import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Button,
  Caption,
  Dialog,
  Portal,
  Headline,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import global from '../styles/global';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={global.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logoIBM}
          source={require('../assets/logo/ibm.png')}
        />
        <Image
          style={styles.logoCaC}
          source={require('../assets/logo/cac.png')}
        />
      </View>
      <Headline style={global.title}>Ice Cream Weather</Headline>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View>
          <Image
            style={styles.imgEatingIceCream}
            source={require('../assets/img/dialog-eating-ice-cream.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <Subheading
        style={[global.subTitle, {color: '#FFF', textShadowColor: '#000'}]}>
        Get Started
      </Subheading>
      <Caption style={styles.caption}>Add a city or manage your list!</Caption>
      <Button
        style={styles.btn}
        icon="plus-circle"
        mode="contained"
        onPress={() => navigation.navigate('Weather')}>
        Add City / City List
      </Button>
      <Caption style={styles.caption}>
        Check your list of cities on the map!
      </Caption>
      <Button
        style={styles.btn}
        icon="map"
        mode="contained"
        onPress={() => navigation.navigate('Map')}>
        Cities on Map
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title style={[global.title, {fontSize: 30}]}>
            Ice Cream Weather
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph style={styles.description}>
              Is a project from the specialization program on mobile development
              of IBM and CaC.
            </Paragraph>
            <Subheading style={global.subTitle}>Purpose</Subheading>
            <Paragraph style={styles.description}>
              The client Paula want's to sell ice cream in several cities along
              the coast. For that she must know the weather of the cities.
            </Paragraph>
            <Subheading style={global.subTitle}>Use</Subheading>
            <Paragraph style={styles.description}>
              In this application you can add cities to a list, get their
              current weather, min/max temperature, time and view them in the
              map. This app fetch the weather data from OpenWeatherMap.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerLogo: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logoIBM: {
    width: 75,
    height: 35,
  },
  logoCaC: {
    width: 75,
    height: 35,
  },
  imgEatingIceCream: {
    alignSelf: 'center',
    width: 350,
    height: 200,
  },
  hideContent: {
    display: 'none',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  caption: {
    fontSize: 14,
    textAlign: 'center',
  },
  btn: {
    marginBottom: 10,
  },
});
