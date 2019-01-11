
import React from 'react';
import PropTypes from 'prop-types';
import { View,Text,Image,StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default class wareItem extends React.Component{
    
    render(){
        const {
            item,
            list,
            index
        } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.wareBlock}>
                    <Image style={styles.wareImg} source={{uri:'https://m.360buyimg.com/n1/'+item.imagePath}}></Image>
                    <View style={styles.wareInfoBlock}>
                        <Text style={styles.wareTitleBlock}>
                            <Text style={styles.wareTitleIcon}>爆品</Text>{item.name}
                        </Text>
                        <View style={styles.warePriceBlock}>
                            <Text style={styles.warePriceIcon}>￥</Text>
                            <Text style={styles.wareNewPrice}>{item.jdPrice}</Text>
                            <Text style={styles.wareOldPrice}>￥{item.jdPriceOp}</Text>
                        </View>
                        <View style={styles.wareShareBlock}>
                            <View style={styles.wareShareMessage}>
                                <Text style={styles.wareShareRate}>{item.rate}佣金</Text>
                                <Text style={styles.wareSharCommion}>￥ {item.commission}</Text>
                            </View>
                            <View>
                                <Image source={require('./../../assets/images/share.png')}></Image>
                                <Text>分享赚</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
    },
    wareBlock:{
        flex:1,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: {width:0,height:1},
        shadowRadius: 6,
        elevation:1,
        flexDirection: 'row',
        marginLeft:16,
        marginRight:16,
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
        flexWrap: 'wrap',
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
        justifyContent: 'space-between',
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
        color:Colors.tintColor,
        fontWeight:'bold',
        fontSize:12,
    }
})

