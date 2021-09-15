import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Modal,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/colors';
import NetInfo from '@react-native-community/netinfo';
import {WebView} from 'react-native-webview';
import CancelButton from '../../../component/CancelButton';
import Button from '../../../component/Button';
import Orientation from 'react-native-orientation';
import CircleImage from '../../../component/CircleImage';
import {FONTS, SIZES} from '../../../../res/style/theme';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import gameLinks from '../../../../res/string/gameLinks.json';

const playGame = props => {
  const {item} = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [offline, setOffline] = useState(false);
  const [loader, setLoader] = useState(true);
  // Dummy Data
  const [populor, setPopulor] = React.useState(gameLinks.mostPlayed);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setTimeout(() => {
          setLoader(false);
        }, 10000);
      } else {
        setOffline(true);
      }
    });

    Orientation.unlockAllOrientations();
  }, []);

  const renderPopuler = () => {
    return (
      <View>
        <View style={styles.subContainer}>
          <View style={{flexDirection: 'row'}}>
            {populor.slice(0, 3).map((item, index) => (
              <CircleImage
                item={item}
                index={index}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  props.navigation.navigate('playGame', {
                    item: item,
                  });
                }}
              />
            ))}
          </View>

          <Button
            title="Close"
            style={{borderColor: Colors.absent, backgroundColor: Colors.absent}}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={Colors.backgroundColor}
        barStyle="dark-content"
      />
      <WebView
        source={{uri: item.gameLink}}
        cacheEnabled={true}
        clearFormData={true}
      />

      <CancelButton
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, {...FONTS.largeTitleBold}]}>
              Most Played Games
            </Text>
            <View>{renderPopuler()}</View>
          </View>
        </View>
      </Modal>

      {/* games Loader */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={loader}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.loaderModel}>
          <CancelButton
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AnimatedCircularProgress
              duration={offline ? 1000 : 9000}
              size={200}
              width={10}
              fill={offline ? 40 : 100}
              tintColor={Colors.bright}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={Colors.bluegray}>
              {fill => (
                <ImageBackground
                  resizeMode="stretch"
                  style={{height: 200, width: 200}}
                  source={{
                    uri: item.image,
                  }}
                />
              )}
            </AnimatedCircularProgress>
            <Text
              style={[
                styles.modalText,
                {
                  ...FONTS.largeTitleBold,
                  color: offline ? Colors.absent : Colors.white,
                  marginTop: 15,
                },
              ]}>
              {offline ? 'No Internet Connection' : 'Loading . . . . .'}
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default playGame;
