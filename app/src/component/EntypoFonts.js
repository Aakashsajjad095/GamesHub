import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {Colors} from '../../res/style/colors';


export default function entypoFonts(props) {
  return (
    <Icon
      name={props.name}
      size={props.size}
      color={props.Colors}
    />

  );
}