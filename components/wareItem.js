
import React from 'react';
import PropTypes from 'prop-types';
import { View,Text,Image,StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default class wareItem extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {/* <Image style={styles.wareImg} source={{uri:'https://m.360buyimg.com/n1/jfs/t23857/180/2029802624/134146/59b7ca0d/5b70f56bN99eeb0e3.jpg'}}></Image> */}
                <View style={styles.wareInfoBlock}>
                    <Text style={styles.wareTitleBlock}>
                        <Text style={styles.wareTitleIcon}>爆品</Text>好奇Huggies铂金装婴儿湿巾80抽*6包 天然呵护
                    </Text>
                    <View style={styles.warePriceBlock}>
                        <Text style={styles.warePriceIcon}>￥</Text>
                        <Text style={styles.wareNewPrice}>259.00</Text>
                        <Text style={styles.wareOldPrice}>￥299.00</Text>
                    </View>
                    <View style={styles.wareShareBlock}>
                        <View style={styles.wareShareMessage}>
                            <Text style={styles.wareShareRate}>20%佣金</Text>
                            <Text style={styles.wareSharCommion}>￥ 200.00</Text>
                        </View>
                        <View>
                            <Image source={require('./../../assets/images/share.png')}></Image>
                            <Text>分享赚</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:343,
        height:137,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: {width:0,height:1},
        shadowRadius: 13,
        elevation:15,
        flexDirection: 'row',
    },
    wareImg:{
        width:115,
        height:115,
        marginRight: 10,
    },
    wareInfoBlock:{
        paddingTop:10,
        paddingRight:10,
        paddingBottom: 10,
    },
    wareTitleBlock:{
        fontSize:15,
        color:Colors.defaultTitle,
        fontWeight: 'bold',
    },
    wareTitleIcon:{
        backgroundColor:Colors.tintColor,
        color:"#fff",
        fontSize:11,
        paddingTop:1,
        paddingBottom:1,
        paddingLeft:5,
        paddingRight:5,
    },
    warePriceBlock:{
        flexDirection:'row',
        marginTop:20,
    },
    warePriceIcon:{
        color:Colors.tintColor,
        fontSize: 12,
    },  
    wareNewPrice:{
        color:Colors.tintColor,
        fontSize: 17,
        fontWeight:'bold',
        marginLeft: 5,
    },
    wareOldPrice:{
        fontWeight: '500',
        color:Colors.oldPriceColor,
        fontSize: 12,
    },
    wareShareBlock:{
        flexDirection:'row',
        justifyContent: 'space-bettween',
        marginTop:10,
    },
    wareShareMessage:{
        flexDirection:"row"
    },
    wareShareRate:{
        color:'#fff',
        backgroundColor:'#F8921E',
        paddingLeft:3,
        paddingRight:3,
        textAlign:"center"
    },
    wareSharCommion:{
        color:'#F8921E',
        backgroundColor:'#FFF1E2',
        paddingLeft:3,
        paddingRight:3,
        textAlign:"center"
    },
    wareShareButtonBolck:{
        flexDirection:'row',
    },
    wareShareButtonImg:{
        width:16,
        height:16,
        marginRight:5
    },
    wareShareButtonText:{
        color:styles.tintColor,
        fontWeight:'bold',
        fontSize:12,
    }
})

