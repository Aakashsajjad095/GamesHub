import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {Colors} from '../../res/style/colors';
import EntypoFonts from './EntypoFonts';

export default function FabButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <EntypoFonts name={'plus-circle'} size={25} Colors={Colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: Colors.Motivationcolor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
});
