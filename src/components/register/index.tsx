import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import Btnlogreg from '../button';
import Inputfield from '../textinput';
import { useNavigation } from '@react-navigation/native';


const Register = () => {
  const {navigate} = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
  const [zip, setZip] = useState('');
  const [opacity, setOpacity] = useState(0.4);
  const [eye, setEye] = useState(true);
  const [closeye, setCloseye] = useState(
    'https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png',
  );

  const backtologin =()=>{
    navigate('Login')
  }

  const name_ref = useRef();
  const phone_ref = useRef();
  const keepPass_ref = useRef();
  const confirmPass_ref = useRef();
  const zip_ref = useRef();

  const validationFunction = () => {
    const emailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    // const phoneRex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const phoneRex = /^\d{10}$/;
    const fullnameRex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const zipRex = /^\d{5}$/;

    if (email === '') {
      Alert.alert('Email field cannot be empty.');
      return null;
    } else if (!emailRex.test(email)) {
      Alert.alert('Entry valid input in the form of example@xyz.xyz');
      return null;
    }

    if (fullName === '') {
      Alert.alert('Name cannot be emtpy.');
      return null;
    } else if (!fullnameRex.test(fullName)) {
      Alert.alert('Entry valid input in the form of example@xyz.xyz');
      return null;
    }

    if (phone === '') {
      Alert.alert('Phone number cannot be emtpy.');
      return null;
    } else if (!phoneRex.test(phone)) {
      Alert.alert('Not valid phone number');
      return null;
    }

    if (password === '') {
      Alert.alert('Password cannot be empty');
      return null;
    } else if (!passRex.test(password)) {
      Alert.alert(
        'Password must contain atleast 8 characters which must have at least 1 number, atleast 1 Uppercase letter, and atleast 1 special character.',
      );
      return null;
    }

    if (confirmPass !== password) {
      Alert.alert('Both Password and Confirm Password must match.');
      return null;
    }
    if (!zipRex.test(zip)) {
      Alert.alert('Zip code is not valid');
      return null;
    }

    if (
      emailRex.test(email) &&
      fullnameRex.test(fullName) &&
      phoneRex.test(phone) &&
      passRex.test(password) &&
      confirmPass === password &&
      zipRex.test(zip)
    ) {
      Alert.alert('Congratulations for registration.');
    }
  };

  const opacitydone = () => {
    const emailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const phoneRex = /^\d{10}$/;
    const fullnameRex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const zipRex = /^\d{5}$/;

    if (
      emailRex.test(email) &&
      fullnameRex.test(fullName) &&
      phoneRex.test(phone) &&
      passRex.test(password) &&
      zipRex.test(zip)
    ) {
      setOpacity(1);
    } else {
      setOpacity(0.4);
    }
  };

  const eyefunc = () => {
    if (eye) {
      setEye(false);
      setCloseye(
        'https://cdn4.iconfinder.com/data/icons/remixicon-system/24/eye-close-fill-512.png',
      );
    } else {
      setEye(true);
      setCloseye(
        'https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png',
      );
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/img1.jpg')}
        style={styles.img1}
      />
      <View style={styles.welcomeContainer1}>
        {/* <ScrollView> */}

        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcome}>🫅🏻New User</Text>
              <Text style={styles.welcome}>Registeration</Text>
            </View>
            <View style={{height: '55%'}}>
              {/* <ScrollView style={styles.emailpasscon}> */}
              <ScrollView style={styles.emailpasscon}>
                <View style={styles.emailpassinput}>
                  <Inputfield
                    text={'Enter Email'}
                    onSubmitEditting={() => name_ref.current.focus()}
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    setSomething={val => setEmail(val)}
                  />
                </View>
                <View style={styles.emailpassinput}>
                  <Inputfield
                    text={'Full Name'}
                    onSubmitEditting={() => phone_ref.current.focus()}
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    setSomething={val => setfullName(val)}
                    pass_ref={name_ref}
                  />
                </View>
                <View style={styles.emailpassinput}>
                  <Inputfield
                    text={'Phone Number'}
                    onSubmitEditting={() => keepPass_ref.current.focus()}
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    setSomething={val => setPhone(val)}
                    pass_ref={phone_ref}
                  />
                </View>
                <View
                  style={[
                    styles.emailpassinput,
                    {justifyContent: 'space-between'},
                  ]}>
                  <Inputfield
                    text={'Keep Password'}
                    onSubmitEditting={() => confirmPass_ref.current.focus()}
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    setSomething={val => setPassword(val)}
                    pass_ref={keepPass_ref}
                    securetextentry={eye}
                  />
                  <TouchableOpacity onPress={eyefunc}>
                    <Image
                      style={{width: 20, height: 20, marginHorizontal: 12}}
                      source={{uri: `${closeye}`}}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.emailpassinput,
                    {
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Inputfield
                    text={'Confirm Password'}
                    onSubmitEditting={() => zip_ref.current.focus()}
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    setSomething={val => setconfirmPass(val)}
                    pass_ref={confirmPass_ref}
                    securetextentry={eye}
                  />
                  <TouchableOpacity onPress={eyefunc}>
                    <Image
                      style={{width: 20, height: 20, marginHorizontal: 12}}
                      source={{uri: `${closeye}`}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[styles.emailpassinput, {marginBottom: 20}]}>
                  <Inputfield
                    text={'Zip code'}
                    // blurOnSubmit={false}
                    returnKeyType={'done'}
                    setSomething={val => setZip(val)}
                    pass_ref={zip_ref}
                    opacityPass={opacitydone}
                    // onSubmitEditting={validationFunction}
                  />
                </View>
              </ScrollView>
              {/* </ScrollView> */}
            </View>
            <Btnlogreg
              text={'Register'}
              validate={validationFunction}
              opacity={opacity}
            />

            <View style={styles.logreg}>
              <Text style={styles.logregText}>Already Registered? --==></Text>
              <TouchableOpacity onPress={backtologin}><Text style={styles.logregText}>Login</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.logreg}> */}
        {/* <Text>Already Registered?</Text> */}
        {/* </View> */}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Register;
