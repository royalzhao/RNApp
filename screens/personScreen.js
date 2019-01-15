import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    header: null,
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
    return <ExpoConfigView />;
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
      width: 23,
      height: 23,
  }
});

