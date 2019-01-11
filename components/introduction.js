import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import Colors from '../constants/Colors';
import IntroductionItem from './introductionItem';

const Index_icon1 = require('../assets/images/index_icon1.png');
const Index_icon2 = require('../assets/images/index_icon2.png');
const Index_icon3 = require('../assets/images/index_icon3.png');

export default class introduction extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            source:[
                {
                    uri: Index_icon1,
                    title:'特邀平台'
                },
                {
                    uri: Index_icon2,
                    title:'定制好物'
                },
                {
                    uri: Index_icon3,
                    title:'会员特权'
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.source.map((item,index) => (
                    <IntroductionItem key={index} title={item.title} img={item.uri}></IntroductionItem>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:15,
      marginBottom: 15,
      marginLeft: 20,
      marginRight: 20,
    },
    
});
