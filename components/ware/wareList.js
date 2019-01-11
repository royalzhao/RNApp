import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
  } from 'react-native';

import Colors from '../../constants/Colors';
import WareItem from './wareItem';

// const Index_icon1 = require('../assets/images/index_icon1.png');
// const Index_icon2 = require('../assets/images/index_icon2.png');
// const Index_icon3 = require('../assets/images/index_icon3.png');

export default class introduction extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            source:[],
            isLoading:true
        }
        this.getWareList = this.getWareList.bind(this)
    }

    componentDidMount(){
        this.getWareList()
        // return fetch('https://www.easy-mock.com/mock/5c1c91b421d37d1c3c4dc64d/api/wareList')
        //     .then((Response) => Response.json())
        //     .then((responseJson) => {
        //         this.setState({
        //             isLoading:false,
        //             source:responseJson.data
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    getWareList(){
        return fetch('https://www.easy-mock.com/mock/5c1c91b421d37d1c3c4dc64d/api/wareList')
            .then(response => response.json())
            .then((responseJson) => {
                // console.log(responseJson.data)
                this.setState({
                    isLoading:false,
                    source:this.state.source.concat(responseJson.data)
                })
                // console.log(this.state.source)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    _renderRows = ({item,separators,index}) => {
        return(
            <WareItem 
                index={index} 
                item={item}
                list={this.state.source}
                style={styles.container}
            ></WareItem>
        )
    }
    
    render() {
        return (
            
                <FlatList
                    data={this.state.source}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderRows}
                >
                </FlatList>
                // {this.state.source.map((item,index) => (
                //     <WareItem key={index} name={item.name} jdPrice={item.jdPrice} jdPriceOp={item.jdPriceOp} commission={item.commission} rate={item.rate} imagePath={item.imagePath} isHot={item.isHot}></WareItem>
                // ))}
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
      marginTop:15,
      marginBottom: 15,
      marginLeft: 20,
      marginRight: 20,
    },
    
});
