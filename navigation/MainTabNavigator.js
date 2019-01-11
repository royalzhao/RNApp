import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import personScreen from '../screens/personScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#E14040',
    inactiveTintColor: '#666',
  },
};

const ShoppingCartStack = createStackNavigator({
  ShoppingCart: ShoppingCartScreen,
});

ShoppingCartStack.navigationOptions = {
  tabBarLabel: '购物车',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#E14040',
    inactiveTintColor: '#666',
  },
};

const personStack = createStackNavigator({
  person: personScreen,
});

personStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-person' : 'md-person'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#E14040',
    inactiveTintColor: '#666',
  },
};

export default createBottomTabNavigator({
  HomeStack,
  ShoppingCartStack,
  personStack,
});
