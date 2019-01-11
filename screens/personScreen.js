import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title:"我的",
    headerStyle:{
      backgroundColor:Colors.tintColor,
    },
    headerTintColor: '#ffffff',
    headerTintStyle:{
      fontWeight:'bold'
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
