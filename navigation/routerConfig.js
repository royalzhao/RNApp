
import React, {Component} from 'react'

import NavigationService from './NavigationService'
import stackNavigatorConfig from './stackNavigatorConfig'

import { createStackNavigator} from 'react-navigation'
import shopSetting from "../page/shopSetting";



const screens ={
    ShopSetting:{
        screen:shopSetting,
        navigationOptions:{
            title:'设置店铺'
        }
    }
}

const Nav = new createStackNavigator({
    ...screens
})

class Navs extends Component {

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render() {
        return (
            <Nav
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);//设置顶层导航
                }}
            />
       )
    }
}

export default Navs;