import {StyleSheet} from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: '2.5%',
  },
  title: {
    marginVertical: 10,
    paddingTop: 20,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#3a74b5',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  subTitle: {
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#000',
    textShadowColor: '#FFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  text: {
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: '2.5%',
    backgroundColor: '#6c64fb',
  },
  btnGoMap: {
    elevation: 3,
    position: 'absolute',
    left: 15,
    bottom: 0,
    width: 110,
    color: '#000',
    borderRadius: 25,
  },
  btnDeleteCity: {
    elevation: 3,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: 110,
    borderRadius: 25,
    backgroundColor: '#d92405',
  },
  btnGoBack: {
    elevation: 3,
    position: 'absolute',
    right: 15,
    bottom: 0,
    width: 110,
    color: '#000',
    borderRadius: 25,
  },
  btnCancel: {
    marginRight: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ccc',
  },
  btnDelete: {
    paddingHorizontal: 5,
    backgroundColor: '#d92405',
  },
});

export default global;
