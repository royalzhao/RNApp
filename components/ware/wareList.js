import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    TouchableOpacity
  } from 'react-native';

// import { StackNavigator } from 'react-navigation';

import Colors from '../../constants/Colors';
import WareItem from './wareItem';
import ListIsEmpty from '../listIsEmpty';
import Api from "../../common/Api";
import request from '../../common/request'
import config from '../../common/config'
import Introduction from '../introduction';

export default class introduction extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            page : 1,
            total : 12,
            source:[],
            isLoading:true, //上拉加载
            isRefreshing:false,  //下拉刷新
        }
        
        this._fecthDataWithLoading = this._fecthDataWithLoading.bind(this)
    }

    componentDidMount(){
        this._fecthDataWithLoading()
    }

    _fecthDataWithLoading = ()=>{
        this.setState({
			isLoading: true
		});
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
        }, config.timeout);
        let param = {
            page:this.state.page
        }
        // console.log(JSON.stringify(param))
        config.loadData(_ => {
            request(Api.wareList+'?page='+this.state.page,'POST')
                .then( res=>{
                    // console.log(res)
                    if(res.code == 41004){
                        alert("数据请求出错")
                        return
                    }
                    this.state.page++;    
                    this.setState({
                        isLoading:false,
                        source:this.state.source.concat(res.data.items)
                    })
                }).catch( err=>{ 
                    //请求失败
                    console.log(err)
                })
            
        })
        
    }

    _renderRows = ({item,separators,index}) => {
        return(
            <WareItem 
                index={index} 
                item={item}
                list={this.state.source}
                style={styles.container}
                onPressItem={this._onPressItem}
            ></WareItem>
        )
    }

    

    _header = ()=>{
        return(
            <View>
                <Introduction></Introduction>
                <View style={styles.banner}>
                    <Image style={{width: 343, height: 125, borderRadius:5}} source={{uri:'https://m.360buyimg.com/jingtiao/jfs/t1/15432/23/3445/89503/5c272637Ea952fb8c/6a2a529389e754a9.jpg'}} />
                </View>
                <View style={styles.shopInfoBlock}>
                    <View style={styles.shopInfo}>
                    <Image style={{width:25,height:25,borderRadius:15}} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/852SR3EjIKxI3icqLBHnGibVvroXMialrF2JczZWs6c5PwicPAFEzjibE5OmVjvCYbvSibh6A6A4Es0588Yk02kXC3AQ/132'}}></Image>
                    <Text style={styles.shopName}>赵帅的京挑店铺</Text>
                    </View>
                    {/* <Text style={styles.shopNameSetting}>设置店铺</Text> */}
                    <TouchableOpacity
                    onPress={this.goShopSetting} 
                    activeOpacity={0.2} 
                    focusedOpacity={0.5}
                    >
                        <Text style={styles.shopNameSetting}>设置店铺</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _footer = () => {
        if(!this._hasMore()){
            return (
                <ListIsEmpty title="加载到底部了~"></ListIsEmpty>
            )
        }else{
            return null
        }
        
    }
    
    _listEmpty = ()=>{
        if(!this.state.isLoading){
            return (
                <ListIsEmpty title="超值商品陆续上架中"></ListIsEmpty>
            )
        }else{
            return null
        }
        
    }

    _fecthDataWithRefreshing = ()=>{
        this.setState({
            isRefreshing:true
        });
        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
        },config.timeout)

        setTimeout(()=>{
            request(Api.wareList+'?page=1','POST')
                .then( res=>{
                    // console.log(res)
                    if(res.code == 41004){
                        alert("数据请求出错")
                        return
                    }
                    this.setState({
                        isRefreshing:false,
                        source:res.data.items,
                        page:1
                    })
                    this.state.page++;
                }).catch( err=>{ 
                    //请求失败
                    console.log(err)
                })
            
        },config.loadingTime)
        
    }

    _hasMore = ()=>{
        return this.state.source.length < this.state.total && this.state.total > 0
    }

    _fetchMoreData = ()=>{
        // console.log(this.state.page)
        if(this._hasMore() && !this.state.isLoading){
            this._fecthDataWithLoading()
        }
    }
    _onPressItem = (name) => {
        // updater functions are preferred for transactional updates
        // this.setState((state) => {
        //   // copy the map rather than modifying state.
        //   const selected = new Map(state.selected);
        //   selected.set(id, !selected.get(id)); // toggle
        //   return {selected};
        // });
        //渲染时候的onPressItem
        this.props.onPressItem(name)
    }

    goShopSetting = () => {
        let param = {
            type:'shopSetting'
        }
        this.props.onPressItem(param)
    }

    render() {
        return (
                <View>
                    
                    <FlatList
                        data={this.state.source}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderRows}
                        ListEmptyComponent={this._listEmpty}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._fecthDataWithRefreshing}
                        initialNumToRender={config.pageSize}
                        onEndReached={this._fetchMoreData}
                        onEndReachedThreshold={0.3}
                    >
                    </FlatList>
                </View>
                
                
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
    banner:{
        alignItems:'center'
    },
        shopInfoBlock:{
        marginLeft:15,
        marginRight: 15,
        marginTop: 30,
        marginBottom: 15 ,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    shopInfo:{
        flexDirection:'row'
    },
    shopName:{
        color:Colors.strongColor,
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
    },
    shopNameSetting:{
        color:Colors.tintColor,
        fontSize:14
    },
    shopNameSetting:{
        color:Colors.tintColor,
        backgroundColor: '#fff',

    }
});
