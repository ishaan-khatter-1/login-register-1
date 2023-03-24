import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../login/styles';
import {useRef} from 'react';

interface input {
  text: string;
  pass_refer_true?: boolean;
  // pass_refer?: any;
  refer?: (a: boolean) => object;
  pass_ref?: any;
  onSubmitEditting?: any;
  blurOnSubmit?: boolean;
  returnKeyType?: any;
  setSomething?: (a: any) => any;
  opacityPass?: (a: any) => any;
  securetextentry?: boolean;
}

const Inputfield = ({
  text,
  pass_ref,
  onSubmitEditting,
  blurOnSubmit,
  returnKeyType,
  setSomething,
  opacityPass,
  securetextentry,
}: input) => {
  // if (pass_refer_true) {
  //   pass_refer = pass_ref;

  // }

  return (
    // <View style={styles.emailpass}>
    <TextInput
      style={styles.emailpassinput}
      onEndEditing={opacityPass}
      placeholder={text}
      onSubmitEditing={onSubmitEditting}
      ref={pass_ref}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      onChangeText={setSomething}
      secureTextEntry={securetextentry}
      // ref={if(pass_refer_true===true) {{pass_ref}}}
      // ref={}
    />

    // </View>
  );
};

export default Inputfield;
