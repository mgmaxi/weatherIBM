import {StyleSheet} from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: '2.5%',
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
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
    marginTop: 20,
    width: 170,
    color: '#000',
    alignSelf: 'center',
    borderRadius: 25,
  },
  btnDeleteCity: {
    position: 'absolute',
    bottom: '2.5%',
    width: 170,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#d92405',
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
