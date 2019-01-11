import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import Colors from '../constants/Colors';

export default class introductionItem extends React.Component {
  render() {
    return (
        <View style={styles.contentItem}>
            <Image style={{width:20,height:20}} source={this.props.img} />
            <Text style={styles.contentItemText}>{this.props.title}</Text>
        </View>  
    );
  }
}


const styles = StyleSheet.create({
    contentItem:{
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',
    },
    contentItemText:{
        color:Colors.defaultColor,
        fontSize:12,
        marginLeft: 5,
    }
});