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
          <Introduction></Introduction>
          <View style={styles.banner}>
            <Image style={{width: 343, height: 125, borderRadius:5}} source={{uri:'https://m.360buyimg.com/jingtiao/jfs/t1/15432/23/3445/89503/5c272637Ea952fb8c/6a2a529389e754a9.jpg'}} />
          </View>
          <View style={styles.shopInfoBlock}>
            <View style={styles.shopInfo}>
              <Image style={{width:25,height:25,borderRadius:15}} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/852SR3EjIKxI3icqLBHnGibVvroXMialrF2JczZWs6c5PwicPAFEzjibE5OmVjvCYbvSibh6A6A4Es0588Yk02kXC3AQ/132'}}></Image>
              <Text style={styles.shopName}>赵帅的京挑店铺</Text>
            </View>
            <Text style={styles.shopNameSetting}>设置店铺</Text>
          </View>
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
  banner:{
    alignItems:'center'
  },
  shopInfoBlock:{
    marginLeft:15,
    marginRight: 15,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  shopInfo:{
    flexDirection:'row'
  },
  shopName:{
    color:Colors.strongColor,
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10,
  },
  shopNameSetting:{
    color:Colors.tintColor,
    fontSize:14
  }
});
