import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
  } from 'react-native';

export default class listIsEmpty extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.line}></View>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
                <View style={styles.line}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:16,
        paddingRight:16,
        marginTop: 10,
        marginBottom: 10,
    },
    line:{
        flex:1,
        height:1,
        backgroundColor:'#eee',
    },
    textBlock:{
        flex:2,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#eee',
        paddingTop: 1,
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 1,
    },
    text:{
        color:'#fff',
        fontSize: 12,
        textAlign:'center'
    }
})