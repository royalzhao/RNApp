import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {TabNav} from "./MainTabNavigator";

import ShopSettingScreen from "../page/shopSetting";


const App = createStackNavigator({
        ShopSetting: {screen: ShopSettingScreen},
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                // header: null
                title:"京东品客",
                headerStyle: {
                  backgroundColor: '#F0260E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen',
        // defaultNavigationOptions: {
        //   headerStyle: {
        //     backgroundColor: '#F0260E',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // },
    });

export default App;
