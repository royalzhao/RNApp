import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,
    Text,
    View,
    Image,
    Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');

export default class shopSetting extends Component{
    static navigationOptions = {
        title: '商品详情',
        headerStyle: {
            backgroundColor: '#F0260E',
        },
        headerTintColor: '#fff',
    };

    constructor(props){
        super(props)
        this.state = {
            swiperShow:false
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            })
        },1)
    }

    renderBanner(){
        if(this.state.swiperShow){
            return (
                <Swiper
                    style={styles.wrapper}
                    height={width * 40 / 75}
                    showsButtons={false}
                    removeClippedSubviews={false} //这个很主要啊，解决白屏问题
                    autoplay={true}
                    horizontal ={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={require('../assets/images/lun1.jpg')}    style={styles.img}></Image>
                    <Image source={require('../assets/images/lun2.jpg')}  style={styles.img}></Image>
                    <Image source={require('../assets/images/lun3.jpg')} style={styles.img}></Image>
                    
                </Swiper>
            )
        }else{
            return (
                <View style={styles.wrapper}>
                     <Image source={require('../assets/images/lun1.jpg')}  style={{width:200,height:200}}></Image>
                </View>
            )
        }
    }

    render(){
        return (
            <View style={styles.container}>
               {this.renderBanner()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:width * 40 / 75,
    },

    wrpaper: {
        width: width,
        height:width * 40 / 75,

    },
    img:{
        width:width,
        height:200,
    }
})