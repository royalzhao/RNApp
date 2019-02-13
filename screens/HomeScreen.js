import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import Colors from '../constants/Colors';
import WareList from '../components/ware/wareList';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
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

  onPressItem(param) {
    console.log("点击了",param)
    if(param.type == 'shopSetting'){
      this.props.navigation.navigate('ShopSetting');
    }else{
      this.props.navigation.navigate('WaresDetail');
    }
  }
  render() {
    return (
      <View style={styles.container}>
          
          <WareList onPressItem = {this.onPressItem.bind(this)}></WareList>
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
