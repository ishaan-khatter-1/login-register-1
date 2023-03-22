import {StyleSheet} from 'react-native/types';

const styles = StyleSheet.create({
  loginbtn: {
    //   // backgroundColor: 'lightgreen',
    //   alignItems: 'center',
    //   borderRadius: 5,
    //   justifyContent: 'center',
    marginHorizontal: 40,
    shadowColor: 'black',
    elevation: 30,
    //   marginBottom: 15,
  },
  btntouchable: {
    backgroundColor: 'rgb(255,165,0)',
    width: '100%',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 50,
    //   marginHorizontal: 40, // goes out of screen -- need to use in container instead.
    borderRadius: 10,
    padding: 5,
  },
  logintxt: {
    fontSize: 24,
    fontWeight: '800',
    color: 'rgb(0, 0, 0)',
  },
});

export default styles;
