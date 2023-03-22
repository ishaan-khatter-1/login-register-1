import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './styles';
import Btnlogreg from '../button';
import Inputfield from '../textinput';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const pass_ref=useRef();
  const navigator = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [eye, setEye] = useState(true);
  const [closeye, setCloseye] = useState('https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png')
  const [opacity, setOpacity] = useState(0.4);

  const validationFunction =()=> {

    const emailRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   


    if(email === ''){
      Alert.alert('Email field cannot be empty.')
      return null;
    }else if(!emailRex.test(email)){
      Alert.alert('Entry valid input in the form of example@xyz.xyz')
      return null;
    }

    if (password === ''){
      Alert.alert('Password cannot be empty')
      return null;

    }else if(!passRex.test(password)){
      Alert.alert('Password must contain atleast 8 characters which must have at least 1 number, atleast 1 Uppercase letter, and atleast 1 special character.')
      return null;

    }

    if (emailRex.test(email) && passRex.test(password)) {



      Alert.alert('Login Successful.')
      return 1
    }

  }

  const opactiyPass =() => {

    const emailRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


    if (emailRex.test(email) && passRex.test(password)){
      setOpacity(1);
    }else {
      setOpacity(0.4);
    }


    // (passval) =>setPassword(passval)
  }

  

  const registerUser = () => {
    navigator.navigate('Register');
  };

  const eyefunc =()=> {
    if(eye){
      setEye(false)
      setCloseye('https://cdn4.iconfinder.com/data/icons/remixicon-system/24/eye-close-fill-512.png')
    }
    else{
      setEye(true)
      setCloseye('https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png')
    }
  }
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/img1.jpg')}
        style={styles.img1}></ImageBackground>
      <View style={styles.welcomeContainer1}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>🫅🏻Login</Text>
        </View>
        <View style={styles.emailpasscon}>
          <View style={styles.emailpass}>
            <TextInput style={styles.emailpassinput}
            placeholder = {'enter email'}
            onSubmitEditing={()=>pass_ref.current.focus()}
          blurOnSubmit={false} 
          returnKeyType={"next"}
          onChangeText = {(val) =>{
            setEmail(val);
            opactiyPass();
          
          }}
          >


            </TextInput>
          </View>
          <View style={[styles.emailpass]}>
            <View style={{flex:1, flexDirection:'row', alignItems:"center"}}>
            <TextInput style={[styles.emailpassinput,{flex:1}]}
            placeholder = {'enter password'} ref={pass_ref} returnKeyType={"done"} 
          onChangeText = {
            (passval) => {
              setPassword(passval);
              opactiyPass();
            }
          }
          secureTextEntry = {eye}
          
          > 
            </TextInput>
            <TouchableOpacity onPress={eyefunc}>
            <Image
          style={{width: 20 , height: 20, margin: 10}}
          source={{uri:`${closeye}`}}
      />
      </TouchableOpacity>
      </View>
          </View>
          {/* <Inputfield text={'Enter Email'} />
          <Inputfield text={'Enter Password'} pass_refer_true={true}/> */}

        </View>
        <View style={styles.forgotpass}>
          <Text style= {styles.forgotpasstext}>Forgot Password?</Text>
        </View>
        {/* <View style={styles.loginbtn}>
        <TouchableOpacity style={styles.btntouchable}>
              <Text style={styles.logintxt}>Login</Text>
            </TouchableOpacity>
        </View> */}
        <Btnlogreg text={'Login'} validate = {validationFunction} opacity = {opacity}/>
        <View style={styles.logreg}>
          <View style={styles.nextuser}>
            <TouchableOpacity>
              <Text style={styles.nextusertext}>New User?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.or}>
            <Text style={styles.ortext}>--==></Text>
          </View>
          <View style={styles.register}>
            <TouchableOpacity onPress={registerUser}>
              <Text style={styles.registertext}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;



// ???? from where the below new code comes don't know??
// function useNavigation() {
//   throw new Error('Function not implemented.');
// }

