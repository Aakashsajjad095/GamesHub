import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../../res/style/colors';
import {fonts} from '../../../../res/style/fonts';
import {sizeWidth, sizeFont,sizeHeight} from '../../../util/size';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  Container: {
    backgroundColor:Colors.backgroundColor,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    //  height:sizeHeight(50),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  subContainer:{
    alignItems:'center',
},
loaderModel: {
  // margin: 20,
  backgroundColor:Colors.backgroundColor,
  borderRadius: 2,
  padding: 35,
   height:height,
   width:width,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},

});
