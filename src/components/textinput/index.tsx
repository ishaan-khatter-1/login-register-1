import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../login/styles';
import {useRef} from 'react';

interface input {
  text: string;
  pass_refer_true?: boolean;
  // pass_refer?: any;
  refer?: (a: boolean) => object;
}

const Inputfield = ({text, pass_refer_true, refer}: input) => {
  const pass_ref = useRef();
  // if (pass_refer_true) {
  //   pass_refer = pass_ref;

  // }

  return (
    <View style={styles.emailpass}>
      <TextInput
        style={styles.emailpassinput}
        placeholder={text}
        onSubmitEditing={() => this.pass_ref.focus()}
        // ref={if(pass_refer_true===true) {{pass_ref}}}
        // ref={}
      />
      {/* <TextInput
        style={styles.emailpassinput}
        placeholder={text}
        onSubmitEditing={() => pass_ref.current.focus()}
      /> */}
    </View>
  );
};

export default Inputfield;
