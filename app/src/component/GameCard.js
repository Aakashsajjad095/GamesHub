import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../../res/style/fonts';
import {FONTS} from '../../res/style/theme';
import {sizeWidth, sizeFont, sizeHeight} from '../../src/util/size';
import {Colors} from '../../res/style/colors';
const GameCard = ({item,onPress}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.cardView}
      onPress={onPress}
      >
        <ImageBackground
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          style={{flex: 1}}>
          <View style={styles.statusView}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
          <View style={styles.gameNameView}>
            <View
              style={{
                 flex:1,
                justifyContent: 'center',
                alignItems:'center'
              }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.gameName}>
               {item.name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
     marginTop: 7,
  },
  cardView: {
    backgroundColor: Colors.bright,
    borderRadius: 10,
    width: sizeWidth(30),
    height: sizeHeight(23),
  },
  statusView: {
    backgroundColor: 'green',
    height: sizeHeight(2.5),
    width: sizeWidth(10),
    borderRadius: 13,
    margin: 16,
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    right: 2,
    alignSelf: 'flex-end',
  },
  statusText: {
    color: 'white',
    fontSize:sizeFont(2),
    alignSelf: 'center',
    alignItems: 'center',
    margin: 2,
  },
  gameNameView: {
   backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    height: sizeHeight(8),
    width: sizeWidth(30),
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },

  gameName: {
    color: Colors.white,
    fontSize:sizeFont(3),
    textAlign:'center',
    width: 70,

    fontFamily: fonts['Gotham-Medium'],
  },
  dateText: {
    color: Colors.white,
    ...FONTS.h4,
    fontFamily: fonts['Gotham-Medium'],
  },
});
