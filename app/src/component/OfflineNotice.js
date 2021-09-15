import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
import {Colors} from '../../res/style/colors'
import {sizeHeight,sizeFont} from '../../src/util/size'
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}
class OfflineNotice extends PureComponent {
  render() {
      return <MiniOfflineSign />;
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: Colors.absent,
    height: sizeHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
  },
  offlineText: { 
    color: Colors.white,
    fontSize:sizeFont(4),
    textAlign:'center'
  }
});
export default OfflineNotice;