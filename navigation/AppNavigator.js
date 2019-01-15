// import React from 'react';
// import { createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });



import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {TabNav} from "./MainTabNavigator";
import ShopSettingScreen from "../page/shopSetting";


const App = createStackNavigator({
        ShopSetting: {screen: ShopSettingScreen},
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    });

export default App;
