import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../login/styles';

interface btninput {
  text: string;
  validate?: () => void;
  opacity?: number;
}

const Btnlogreg = ({text, validate, opacity}: btninput) => {
  return (
    <View style={styles.loginbtn}>
      <TouchableOpacity
        style={[styles.btntouchable, {opacity}]}
        onPress={validate}>
        <Text style={styles.logintxt}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btnlogreg;
