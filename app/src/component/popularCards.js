import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import {
    Svg,
    Polygon
} from 'react-native-svg';
import {FONTS, SIZES } from '../../res/style/theme';
import {Colors} from '../../res/style/colors';
import {sizeWidth,sizeFont,sizeHeight} from '../../src/util/size'


const PopularCards = ({item,index,colorTrend,onPress}) => {

    var trendingStyle = {};

    if (index == 0) {
        trendingStyle = { marginLeft: SIZES.padding, }
    } else {
        trendingStyle = {}
    }

    return (
       

        <TouchableOpacity
        onPress={onPress}
        style={[styles.container,{ ...trendingStyle}]}
    >
        <Text style={styles.gameType}>{item.status}</Text>

        <View style={[styles.cardStyle,{backgroundColor: colorTrend[index]}]}>
            <View style={{justifyContent: 'space-between',marginTop:20 }}>
                <Text style={{ color: Colors.white, ...FONTS.h4 }}>{item.name}</Text>
                <Text style={{ color: Colors.white, ...FONTS.h5 }}>{item.categoryName}</Text>
            </View>
        </View>

        <View style={{ position: 'absolute', top: 27, right: 0, width: "95%", height: "100%" }}>
            <Svg height="100%" width="100%">
                <Polygon
                    points="0,0 170,0 170,80"
                    fill="white"
                />
            </Svg>
        </View>

        <Image
            source={{uri:item.image}}
            resizeMode='contain'
            style={{
                position: 'absolute',
                top: 10,
                right: 0,
                // width: "98%",
                // height: 130,
                height: sizeHeight(23), width: sizeWidth(50),
                transform: [
                    { rotate: '30deg' }
                ]
            }}
        />
    </TouchableOpacity>

    )
}

export default PopularCards

const styles = StyleSheet.create({

container:{
    height: sizeHeight(35), width: sizeWidth(50), justifyContent: 'center', marginHorizontal: SIZES.base,
},
gameType:{
     color: Colors.grey, ...FONTS.h5 
},
trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    // elevation: 7,
},
cardStyle:{
flex: 1,
justifyContent: 'flex-end',
marginTop: SIZES.base,
borderTopLeftRadius: 10,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
marginRight: SIZES.padding,
paddingLeft: SIZES.radius,
paddingRight: SIZES.padding,
paddingBottom: SIZES.radius,
}

})
