import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {FONTS, SIZES } from '../../res/style/theme';
import {Colors} from '../../res/style/colors'
import { sizeWidth,sizeHeight } from '../util/size';

const CircleImage = ({item,index,onPress}) => {
    var trendingStyle = {};

    if (index == 0) {
        trendingStyle = { marginLeft: SIZES.padding, }
    } else {
        trendingStyle = {}
    }

    return (
        <TouchableOpacity
        onPress={onPress}
        style={{justifyContent:'center',...trendingStyle, marginHorizontal: SIZES.base,}}>
            <Image
             source={{uri:item.image}}
             resizeMode='cover'
            style={styles.imageStyle}
            >

            </Image>
            <Text numberOfLines={1} style={styles.gameName}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default CircleImage

const styles = StyleSheet.create({
    gameName:{
        color: Colors.grey, ...FONTS.h5,textAlign:'center',width:sizeWidth(16)
   },
   imageStyle:
   {
    height:sizeWidth(17),width:sizeWidth(17),borderRadius:sizeWidth(17),
    borderColor:Colors.grey,
    borderWidth:2,
    backgroundColor:Colors.black,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
}
})
