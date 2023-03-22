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

const Register = () => {
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
      confirmPass === password &&
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
        <ScrollView>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>🫅🏻New User</Text>
            <Text style={styles.welcome}>Registeration</Text>
          </View>
          <ScrollView style={styles.emailpasscon}>
            {/* <Inputfield text={'Enter Email'} />
            <Inputfield text={'First Name'} />
            <Inputfield text={'Last Name'} />
            <Inputfield text={'Keep Password'} />
            <Inputfield text={'Confirm Password'} /> */}
            <View>
              <View style={styles.emailpass}>
                <TextInput
                  style={styles.emailpassinput}
                  placeholder={'Enter Email'}
                  onChangeText={val => setEmail(val)}
                  onSubmitEditing={() => name_ref.current.focus()}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                />
              </View>
              <View style={styles.emailpass}>
                <TextInput
                  style={styles.emailpassinput}
                  placeholder={'Enter Full Name'}
                  onChangeText={val => setfullName(val)}
                  onSubmitEditing={() => phone_ref.current.focus()}
                  ref={name_ref}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                />
              </View>
              <View style={styles.emailpass}>
                <TextInput
                  style={styles.emailpassinput}
                  placeholder={'Enter Phone Number'}
                  onChangeText={val => setPhone(val)}
                  onSubmitEditing={() => keepPass_ref.current.focus()}
                  ref={phone_ref}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                />
              </View>
              <View
                style={[
                  styles.emailpass,
                  {flexDirection: 'row', alignItems: 'center'},
                ]}>
                <TextInput
                  style={[styles.emailpassinput, {flex: 1}]}
                  placeholder={'Keep Password'}
                  onChangeText={val => {
                    setPassword(val);
                    console.log(val);
                  }}
                  onSubmitEditing={() => confirmPass_ref.current.focus()}
                  ref={keepPass_ref}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                />
                <TouchableOpacity onPress={eyefunc}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      margin: 10,
                    }}
                    source={{uri: `${closeye}`}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.emailpass}>
                <TextInput
                  style={styles.emailpassinput}
                  placeholder={'Confirm Password'}
                  onChangeText={val => setconfirmPass(val)}
                  onSubmitEditing={() => zip_ref.current.focus()}
                  ref={confirmPass_ref}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                />
              </View>
            </View>

            {/* <View style={{marginBottom: 20}}>
              <Inputfield text={'Enter Zip Code'} />
            </View> */}
            <View
              style={{
                marginBottom: 20,
              }}>
              <View style={[styles.emailpass]}>
                <TextInput
                  style={styles.emailpassinput}
                  placeholder={'Enter Zip code'}
                  onChangeText={val => {
                    setZip(val);
                    console.log('value : ', val);
                    console.log('zip : ', zip);
                    opacitydone();
                  }}
                  ref={zip_ref}
                />
              </View>
            </View>
          </ScrollView>
          <Btnlogreg
            text={'Register'}
            validate={validationFunction}
            opacity={opacity}
          />
          <View style={styles.logreg}>{/* <Btnlogreg text={'new'} /> */}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;
