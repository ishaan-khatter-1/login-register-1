import {StyleSheet} from 'react-native';

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
    fontSize: 34,
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    opacity: 1,
  },
  welcomeContainer1: {
    marginVertical: 40,
    position: 'absolute',
    width: '100%',
    // height: '60%',
    // backgroundColor: 'red',
  },
  emailpasscon: {
    // height: '40%',
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
    // shadowOffset: {width: 0, height: 5},
  },
  emailpass: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 15,
    padding: 0,
  },
  emailpassinput: {
    margin: 8,
    // backgroundColor: 'green',
    // backgroundColor: 'orange',

    borderRadius: 10,
  },
  forgotpass: {
    marginHorizontal: 40,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotpasstext: {
    fontSize: 16,
    fontWeight: '700',
  },
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
  logreg: {
    // flex: 0.3,
    height: '15%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    marginHorizontal: 40,
    // padding: 20,
    marginTop: 20,
    // justifyContent: 'space-between', // not working
  },
  nextuser: {
    flex: 1,
    // backgroundColor: 'orange',
    padding: 3,
    // textAlign: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 0,
    // marginVertical: 20,
    // marginRight: 10,
    // paddingLeft: 10,
  },
  nextusertext: {
    color: 'rgb(0, 0, 0)',
    fontSize: 19,
    fontWeight: '900',
  },
  or: {
    flex: 1,
    // backgroundColor: 'beige',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    // marginHorizontal: ,
  },
  ortext: {
    color: 'rgb(0, 0, 0)',
    fontSize: 25,
    fontWeight: '900',
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