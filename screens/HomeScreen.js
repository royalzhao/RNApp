import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import Introduction from '../components/introduction';
import WareList from '../components/ware/wareList';

import { MonoText } from '../components/StyledText';

import ShopSetting from '../page/shopSetting'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title:"京东品客",
    headerStyle:{
      backgroundColor:Colors.tintColor,
    },
    headerTintColor: '#ffffff',
    headerTintStyle:{
      fontWeight:'bold'
    }
  };

  render() {
    return (
      <View style={styles.container}>
          
          <WareList></WareList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
