import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {TabNav} from "./MainTabNavigator";

import ShopSettingScreen from "../page/shopSetting";
import WaresDetailScreen from "../page/waresDetail";


const App = createStackNavigator({
        ShopSetting: {screen: ShopSettingScreen},
        WaresDetail: {screen: WaresDetailScreen},
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
