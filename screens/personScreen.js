import React from 'react';
import LinearGradient from "react-native-linear-gradient"
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  BVLinearGradient,
} from 'react-native';

import Colors from '../constants/Colors'; 

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/images/me_selected.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/images/me.png')}/>
        );
    },
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
        <ImageBackground style={styles.personInfoBlock} source={require('../assets/images/personBg.png')}>
          <View style={styles.personInfo}>
            <Image style={styles.img} source={require('../assets/images/avater.png')}></Image>
            <View style={styles.nameBlock}>
              <Text style={styles.name}>京大东</Text>
              {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#B0B0B0', '#5F5F5F']}> */}
                <Text style={styles.vip}>普通会员</Text>
              {/* </LinearGradient> */}
              
            </View>
          </View>
          <View style={styles.memberStrategy}>
            <TouchableOpacity
            onPress={this.goShopSetting} 
            activeOpacity={0.7} 
            focusedOpacity={0.7}
            >
                <Text style={styles.shopNameSetting}>查看会员成长攻略 ></Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.orderBlock}>
          <View style={styles.imgBlock}>
            <Image style={styles.upgradeBanner} source={require('../assets/images/upgradeBanner.png')}></Image>
          </View>
          <View style={styles.orderStateBlock}>
            <View style={styles.orderItem}>
              <Image style={styles.orderItemIcon} source={require('../assets/images/daifukuan.png')}></Image>
              <Text style={styles.orderItemText}>待付款</Text>
            </View>
            <View style={styles.orderItem}>
              <Image style={styles.orderItemIcon} source={require('../assets/images/daishouhuo.png')}></Image>
              <Text style={styles.orderItemText}>待收货</Text>
            </View>
            <View style={styles.orderItem}>
              <Image style={styles.orderItemIcon} source={require('../assets/images/yiwancheng.png')}></Image>
              <Text style={styles.orderItemText}>已完成</Text>
            </View> 
            <View style={styles.orderItem}>
              <Image style={styles.orderItemIcon} source={require('../assets/images/allOrder.png')}></Image>
              <Text style={styles.orderItemText}>全部订单</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>  
              <Image style={styles.listItemIcon} source={require('../assets/images/youhuiquan.png')}></Image>
              <Text style={styles.listItemText}>优惠券</Text>
            </View>
            <View style={styles.listItemRight}>
              <Image style={styles.turnRight} source={require('../assets/images/turn_right2.png')}></Image>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>  
              <Image style={styles.listItemIcon} source={require('../assets/images/tuihuo.png')}></Image>
              <Text style={styles.listItemText}>退货/售后</Text>
            </View>
            <View style={styles.listItemRight}>
              <Image style={styles.turnRight} source={require('../assets/images/turn_right2.png')}></Image>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>  
              <Image style={styles.listItemIcon} source={require('../assets/images/address.png')}></Image>
              <Text style={styles.listItemText}>地址管理</Text>
            </View>
            <View style={styles.listItemRight}>
              <Image style={styles.turnRight} source={require('../assets/images/turn_right2.png')}></Image>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>  
              <Image style={styles.listItemIcon} source={require('../assets/images/contact.png')}></Image>
              <Text style={styles.listItemText}>联系客服</Text>
            </View>
            <View style={styles.listItemRight}>
              <Image style={styles.turnRight} source={require('../assets/images/turn_right2.png')}></Image>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
      width: 23,
      height: 23,
  },
  personInfoBlock:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    paddingLeft:16,
    paddingRight:16,
    paddingBottom: 47,
    paddingTop: 21,
  },
  personInfo:{
    flexDirection:'row',
    alignItems: 'center',
  },
  memberStrategy:{
    marginBottom:9,

  },
  shopNameSetting:{
    fontSize:11,
    color:"#fff"
  },
  img:{
    width:65,
    height:65
  },
  nameBlock:{
    marginLeft:10
  },
  name:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  vip:{
    color:"#fff",
    backgroundColor: '#B0B0B0',
    paddingLeft:7,
    paddingRight:7,
    fontSize:10,
    borderRadius: 22,
    paddingTop:2,
    paddingBottom:2,
    marginTop:5,
  },
  imgBlock:{
    flex:1,
    alignItems:'center',
  },
  orderBlock:{
    position:'relative',
    backgroundColor:"#fff",
  },
  upgradeBanner:{
    position:'absolute',
    height:69,
    width:355, 
    top:-20,
  },
  orderStateBlock:{
    paddingLeft:38,
    paddingRight: 38,
    paddingBottom:14,
    marginTop:70,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  orderItem:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:"center",
  },
  orderItemIcon:{
    width:35,
    height:35,
  },
  orderItemText:{
    fontSize:15,
    color:Colors.defaultTitle,
  },
  list:{
    marginTop:10,
    backgroundColor:"#fff"
  },
  listItem:{
    paddingLeft:16,
    paddingRight: 16,
    paddingTop:17,
    paddingBottom:17,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderWidth: 1,
    borderBottomColor: "#eee",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderTopColor: "#fff",
    borderStyle:'solid',
  },
  listItemLeft:{
    flexDirection:'row'
  },
  listItemIcon:{
    width:17,
    height:17,
    marginRight:10,
  },
  listItemText:{
    color:Colors.strongColor,
  },
  turnRight:{
    width:8,
    height:13,
  }
});

