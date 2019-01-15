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
import WareList from '../components/ware/wareList';
import { MonoText } from '../components/StyledText';
import ShopSetting from '../page/shopSetting'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    header: null,
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/images/index_selected.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/images/index.png')}/>
        );
    },
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
  tabBarIcon: {
      width: 23,
      height: 23,
  }
});
