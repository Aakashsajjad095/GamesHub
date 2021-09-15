import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

export default function entypoFonts(props) {
  return (
    <Icon
      name={props.name}
      size={props.size}
      color={props.Colors}
    />

  );
}