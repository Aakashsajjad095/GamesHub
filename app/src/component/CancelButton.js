import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {Colors} from '../../res/style/colors'
import EntypoFonts from './EntypoFonts'

const CancelButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.crossView}>
          <EntypoFonts name={'cross'} size={25} Colors={Colors.white} />
          </TouchableOpacity>
    )
}

export default CancelButton

const styles = StyleSheet.create({
    crossView: {
        position: 'absolute',
        right: 0,
        width: 40,
        height: 30,
        borderColor: Colors.white,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      },

})
