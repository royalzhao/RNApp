import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class shopSetting extends Component{
    static navigationOptions = {
        title: '设置店铺信息',
        // headerStyle: {
        //   backgroundColor: '#ffffff,
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        
    };
    render(){
        return (
            <View>
                <Text>这是店铺设置页</Text>
            </View>
        )
    }
}