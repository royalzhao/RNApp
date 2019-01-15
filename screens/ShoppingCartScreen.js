import React from 'react';

import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '购物车',
    header: null,
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/images/shopping_selected.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/images/shopping.png')}/>
        );
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  }
});
