import React from 'react';
import {View, Linking, ScrollView, StyleSheet} from 'react-native';
import {
  List,
  Headline,
  Paragraph,
  Subheading,
  IconButton,
} from 'react-native-paper';
import global from '../styles/global';

const AboutUs = () => {
  return (
    <View style={global.container}>
      <Headline style={global.title}>About Us</Headline>
      <View style={styles.containerRepository}>
        <IconButton
          style={{
            marginVertical: 10,
            backgroundColor: '#000',
            borderWidth: 2,
            borderColor: '#FFF',
          }}
          icon="github"
          color="#FFF"
          size={78}
          onPress={() =>
            Linking.openURL('https://github.com/mgmaxi/weatherIBM')
          }
        />
        <Subheading
          style={styles.repository}
          onPress={() =>
            Linking.openURL('https://github.com/mgmaxi/weatherIBM')
          }>
          Application repository
        </Subheading>
      </View>
      <ScrollView style={styles.containerTechnologies}>
        <List.Section>
          <List.Accordion
            style={{
              backgroundColor: '#3a74b5',
            }}
            title="Technologies"
            titleStyle={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}
            left={props => <List.Icon {...props} color="#000" icon="tools" />}>
            <List.Item
              title="React Native"
              onPress={() => Linking.openURL('https://reactnative.dev/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="React Navegation"
              onPress={() => Linking.openURL('https://reactnavigation.org/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="React Native Paper"
              onPress={() => Linking.openURL('https://reactnativepaper.com/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="React Native Maps"
              onPress={() =>
                Linking.openURL(
                  'https://github.com/react-native-maps/react-native-maps',
                )
              }
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="React Native Country Picker Modal"
              onPress={() =>
                Linking.openURL(
                  'https://github.com/xcarpentier/react-native-country-picker-modal',
                )
              }
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="React Native Vector Icons"
              onPress={() =>
                Linking.openURL(
                  'https://github.com/oblador/react-native-vector-icons',
                )
              }
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="Axios"
              onPress={() => Linking.openURL('https://axios-http.com/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="Moment"
              onPress={() => Linking.openURL('https://momentjs.com/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="JSON Server"
              onPress={() =>
                Linking.openURL('https://github.com/typicode/json-server')
              }
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
            <List.Item
              title="API: Open WeatherMap"
              onPress={() => Linking.openURL('https://openweathermap.org/')}
              left={props => (
                <List.Icon
                  {...props}
                  icon="react"
                  color="#5ed3f3"
                  style={styles.iconTechnologies}
                />
              )}
            />
          </List.Accordion>
        </List.Section>
      </ScrollView>
      <View style={styles.containerDevelop}>
        <Paragraph
          style={styles.develop}
          onPress={() => Linking.openURL('https://github.com/mgmaxi')}>
          Developed by Maximiliano Melani Ghirardi
        </Paragraph>
        <IconButton
          color="#FFF"
          style={{
            backgroundColor: '#000',
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          icon="github"
          size={20}
          onPress={() => Linking.openURL('https://github.com/mgmaxi')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRepository: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  repository: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  containerTechnologies: {
    marginTop: 10,
    marginBottom: 50,
  },
  iconTechnologies: {
    backgroundColor: '#000',
    borderRadius: 50,
  },
  containerDevelop: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  develop: {
    fontSize: 16,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});

export default AboutUs;
