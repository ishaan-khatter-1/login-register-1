import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts/indes';

const styles = StyleSheet.create({
  img1: {
    // flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.45,
  },
  welcome: {
    color: 'rgb(0, 0, 0)',
    fontWeight: '900',
    fontSize: 30,
    fontFamily: fonts.Bold,
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // opacity: 1,
  },
  welcomeContainer1: {
    // marginVertical: 40,
    marginTop: 10,
    // flex: 1,
    position: 'absolute',
    width: '100%',
    // height: '60%',
    // backgroundColor: 'red',
  },
  emailpasscon: {
    // height: '30%',
    // flex: 0.5,
    // width: '90%',
    backgroundColor: 'white',
    // marginTop: 10,
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 15,
    // borderWidth: 1,
    borderColor: 'pink',
    // borderRadius: 50,
    borderRadius: 20,
    // padding: 20,
    elevation: 10,
    shadowColor: 'black',
    // paddingTop: 20,
    // paddingBottom: 20,
    // shadowOffset: {width: 0, height: 5},
  },

  emailpass: {
    // flex: 1,
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 15,
    padding: 0,
  },
  emailpassinput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    padding: 0,
    backgroundColor: 'orange',
  },

  logreg: {
    // flex: 0.3,
    // height: '27%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-between',
    // marginBottom: 100,
    // padding: 20,
    marginTop: 20,
    // justifyContent: 'space-between', // not working
  },

  logregText: {
    color: 'rgb(0, 0, 0)',
    fontWeight: '900',
    fontSize: 22,
    fontFamily: fonts.Bold,
  },

  register: {
    flex: 1,
    // backgroundColor: 'rgb(45, 119, 193)',
    alignItems: 'flex-end',
    borderRadius: 5,
    justifyContent: 'center',
    // paddingRight: 10,
  },
  registertext: {
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(106, 166, 226)',
    fontSize: 19,
    fontWeight: '900',
    // alignItems: 'flex-end',
    padding: 7,
    borderRadius: 8,
  },
});

export default styles;
