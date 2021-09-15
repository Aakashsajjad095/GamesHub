
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../../res/style/colors';
import { fonts } from '../../../../res/style/fonts';
import {sizeWidth,sizeFont,sizeHeight} from '../../../util/size'


export const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.white,
        flex: 1},
        subContainer:{
            alignItems:'center'
        },
        tabbarView:{
            flexDirection:'row',justifyContent:'space-evenly',padding:10,marginTop:10
          },
          tabbarStyle : {
            borderRadius:30,
            height:sizeHeight(6),
            paddingLeft:15,
            paddingRight:15,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent:'center',
            marginHorizontal:5  
          },
          
   matchstatusbartext:{
     fontSize: sizeFont(5),
     fontFamily: fonts['Gotham-Medium'],
     fontStyle:'normal',
     letterSpacing:1,
    color:Colors.darkGrey,
    
    
  },
});

