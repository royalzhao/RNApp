import React from 'react';

import { ScrollView, StyleSheet,Image,View,Text,SectionList,TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Api from "../common/Api";
import request from '../common/request'
import config from '../common/config'
import { SwipeListView } from 'react-native-swipe-list-view'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '购物车',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/images/shopping_selected.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/images/shopping.png')}/>
        );
    },
  };

  constructor(props){
    super(props)
    this.state = {
      isLoading:false,
      status: [],
      isSelectedAllItem: false,
      totalNum: 0,
      totalPrice: 0.00,
      tempData:{},
      tempArr:[]
    }
  }

  componentDidMount() {
    console.log(1)
    this._fecthShoppingCartData()
  }

  _fecthShoppingCartData = () => {
    this.setState({
      isLoading:true
    })
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    }, config.timeout)

    // config.loadData(_ => {
      request(Api.shoppingCart,"GET")
        .then(res=>{
          // console.log(res.data)
          let tempStatusArr = []
          res.data.map((item,index)=>{
            let items = item.shopItems
            let shopObj = {}
            shopObj.checked = false
            shopObj.shopName = item.shopName
            shopObj.shopId = item.shopId
            let tempItems = []
            items.map((sku)=>{
              sku.checked = false
              sku.quantity = sku.minQuantity
              tempItems.push(sku)
            })
            shopObj.items = tempItems
            tempStatusArr.push(shopObj)
          })

          this.setState({
            status:this.state.status.concat(tempStatusArr)
          })
 
        })
        .catch(err=>{
          console.log(err)
        })
    // })

  }

  calculateCountAndPrice(){
    let tempTotalNum = 0
    let tempTotalPrice = 0
    let tempStatus = this.state.status
    tempStatus.map((item)=>{
      let skuItems = item.items
      skuItems.map((skuItem)=>{
        if(skuItem.checked){
          tempTotalNum += 1
          tempTotalPrice += skuItem.itemPrice * skuItem.quantity
        }
      })
    })

    this.setState({totalNum: tempTotalNum, totalPrice: tempTotalPrice})

  }

  checkedShop(index){
    // console.log(index)
    let tempStatus = this.state.status
    let shop = tempStatus[index]
    shop.checked = !shop.checked
    let items = shop.items
    items.map((item)=>{
      item.checked = shop.checked
    })

    let isSelectedAllShop = true
    tempStatus.map((item)=>{
      if(!item.checked){
        isSelectedAllShop = false
        return
      }
    })

    this.calculateCountAndPrice()

    this.setState({isSelectedAllItem: isSelectedAllShop, status: tempStatus})
  }

  checkItem(sectionIndex, index){
    let tempStatus = this.state.status
    let tempShop = tempStatus[sectionIndex]
    let tempShopItems = tempStatus[sectionIndex].items
    let item  = tempShopItems[index]
    item.checked = !item.checked

    let isSelectedAllShopItem = true
    tempShopItems.map((sku)=>{
      if(!sku.checked){
        isSelectedAllShopItem = false
        return
      }
    })

    tempShop.checked = isSelectedAllShopItem
    let isSelectedAllShop = true
    tempStatus.map((shop)=>{
      if(!shop.checked){
        isSelectedAllShop = false
        return
      }
    })

    this.calculateCountAndPrice()
    this.setState({
      isSelectedAllItem:isSelectedAllShop,
      status:tempStatus
    })
  }

  checkAllShop(){
    let isSelectedAllItem = !this.state.isSelectedAllItem
    let tempStatus = this.state.status;
    tempStatus.map((item)=>{
      item.checked = isSelectedAllItem
      item.items.map((skuItem)=>{
        skuItem.checked = isSelectedAllItem
      })
    })

    this.calculateCountAndPrice()
    this.setState({
      isSelectedAllItem:isSelectedAllItem,
      status:tempStatus
    })
  }

  add(sectionIndex,index){
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if(item.quantity >= item.maxQuantity){
      alert('商品购买数量不能大于：'+item.maxQuantity)
    }else{
      item.quantity += 1
    }

    if(item.checked){
      this.calculateCountAndPrice()
    }
    this.setState({
      status:tempStatus
    })
  }

  minus(sectionIndex,index){
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity <= item.minQuantity) {
      alert('商品购买数量不能小于:'+item.minQuantity)
    } else {
      item.quantity -= 1
    }

    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({status: tempStatus})
  }

  renderSectionHeader = ({section}) =>{
    if (section.data.length <= 0) {
			return null
    }
    // console.log(section)
    let key = section.key
    let index = section.index
    let shop = this.state.status[index]
    return(
      <View style={styles.cartHeadBlock}>
        <TouchableOpacity onPress={() => this.checkedShop(index)}>
          <Image style={styles.checkBox} source={shop.checked ? require('../assets/images/ic_selected.png') : require('../assets/images/ic_defult.png')} resizeMode={'center'}/>
        </TouchableOpacity>
        <Text style={styles.cartHeadTitle}>{key}</Text>
      </View>
    )
  }

  _renderRows = ({section,item,index}) => {

    let sectionIndex = section.index
    let statusItem = item.checked
		return (
			<View style={styles.cartBodyBlock}>
        <TouchableOpacity onPress={() => this.checkItem(sectionIndex, index)}>
          <Image style={styles.cartBodyButton} source={statusItem ? require('../assets/images/ic_selected.png') : require('../assets/images/ic_defult.png')}  resizeMode={'center'}></Image>
        </TouchableOpacity>
        <View style={styles.cartBodyImgBlock} >
          <Image style={styles.cartBodyImg} source={{uri:item.itemimg}}></Image>
        </View>
        
        <View style={styles.cartBodyInfo}>
          <Text style={styles.cartBodyWareName}>{item.itemName}</Text>
          <View style={styles.cartBodyWareNumPrice}>
            <Text style={styles.cartBodyPrice}><Text style={styles.cartBodyPriceIcon}>￥</Text>{item.itemPrice}</Text>
            <View style={styles.cartBodyNumBlock}>
              <TouchableOpacity onPress={()=>this.add(sectionIndex,index)}>
                <Image style={styles.cartBodyNumImg} source={require('../assets/images/add.png')}/>
              </TouchableOpacity>
              <Text style={styles.cartBodyNum}>{item.quantity}</Text>
              <TouchableOpacity onPress={()=>this.minus(sectionIndex,index)}>
                <Image style={styles.cartBodyNumImg} source={require('../assets/images/reduce.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
		)
	};
  

  render() {
    console.log(2)

    let tempArr = this.state.status.map((item, index) => {
      let tempData = {}
      tempData.key = item.shopName
      tempData.index = index
      tempData.data = item.items
      return tempData
    })
    
    if(tempArr.length != 0){
      return (
        <View style={styles.block}>
          
          {/* <SectionList
            renderSectionHeader={this.renderSectionHeader}
            sections={tempArr}
            renderItem={this._renderRows}
            keyExtractor={(item, index) => index.toString()}
            style={styles.SectionListBlock}
          ></SectionList> */}

          <SwipeListView
            useSectionList
            renderSectionHeader={this.renderSectionHeader}
            sections={tempArr}
            renderItem={this._renderRows}
            keyExtractor={(item, index) => index.toString()}
            style={styles.SectionListBlock}closeOnRowPress={true}  //当按下一行，关闭打开的行
            closeOnScroll={true}    //列表滚动时关闭打开的行
            leftOpenValue={75}      //列表项左滑translateX的值：正值
            rightOpenValue={-75}    //列表项右滑translateX的值：负值
            stopLeftSwipe={100}     //列表项左滑translateX最大的值：正值
            stopRightSwipe={-100}   //列表项右滑translateX最大的值：负值
            disableRightSwipe={true} //禁止右滑
            ItemSeparatorComponent={() => <View style={{height: 0}}/>}
            renderHiddenItem={(rowData) => (      //渲染隐藏的行
                <TouchableOpacity style={styles.delete}>
                    <Text style={{fontSize:15, color: '#fff'}}>删除</Text>
                </TouchableOpacity>
            )}
            onRowOpen={(rowKey, rowMap) => {     //当滑动行的动画处于开启状态时调用
              if(rowMap[1] !== undefined){
                   setTimeout(() => {
                       rowMap[rowKey].closeRow()
                   }, 2000)
              }
            }}   
          >
          </SwipeListView>

          <View style={styles.cartFooterBlock}>
            <View style={styles.cartFooterInfo}>
              <TouchableOpacity onPress={() => this.checkAllShop()}>
                <Image source={this.state.isSelectedAllItem ? require('../assets/images/ic_selected.png') : require('../assets/images/ic_defult.png')}  resizeMode={'center'}></Image>
              </TouchableOpacity>
              <Text style={styles.cartFooterSelectAll}>全选</Text>
              <Text style={styles.cartFooterSelectAll}>合计：￥{this.state.totalPrice}</Text>
            </View>
            <TouchableOpacity style={styles.cartFooterButton}>
              <Text style={styles.cartFooterButtonText}>去结算（{this.state.totalNum}）</Text>
            </TouchableOpacity>

          </View>
          
        </View>
      );
    }else{
      return(
        <Text>正在加载中</Text>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  block:{
    flex:1
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  SectionListBlock:{
    marginBottom:10
  },  
  cartHeadBlock:{
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop:11,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 11,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems:'center'
  },
  checkBox:{
    width:14,
    height:14,
    marginRight:10
  },
  cartHeadTitle:{
    fontSize:14,
    fontWeight: 'bold',
    color:Colors.strongColor
  },
  cartBodyBlock:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    marginLeft: 10,
    marginRight: 10,
    
    backgroundColor: "#fff",
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  cartBodyButton:{
    // flex:1
    width:14,
    height:14,
  },
  cartBodyImgBlock:{
    width:90,
    height:90,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  cartBodyImg:{
    width:67,
    height:67
  },
  cartBodyInfo:{
    paddingLeft:5,
    flex:1,
  },
  cartBodyWareName:{
    color:Colors.strongColor,
    fontSize:12,
    marginTop: 10,
  },
  cartBodyWareNumPrice:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    alignItems:'center'
  },
  cartBodyPrice:{
    color:Colors.tintColor,
    fontSize:17,
    fontWeight:'bold'
  },
  cartBodyPriceIcon:{
    color:Colors.tintColor,
    fontSize:10,
    fontWeight:'bold'
  },
  cartBodyNumBlock:{
    flexDirection:'row',
    alignItems:'center'
  },
  cartBodyNumImg:{
    width:18,
    height:18,
  },
  cartBodyNum:{
    color:Colors.strongColor,
    fontSize:12,
    fontWeight:'600',
    marginLeft:10,
    marginRight:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:1,
    paddingBottom:1,
    backgroundColor:Colors.NumBg,
    width:40,
    textAlign:'center'
  },
  cartFooterBlock:{
    flexDirection:'row',
    height:55,
    backgroundColor: "#fff"
  },
  cartFooterInfo:{
    flexDirection:'row',
    flex:5, 
    alignItems:'center'
  },
  cartFooterButton:{
    flex:2,
    backgroundColor: "#ED0802",
    alignItems:'center',
    justifyContent:'center'
  },
  cartFooterButtonText:{
    color:'#fff',
    fontSize:14,
    
  },
  cartFooterSelectAll:{
    color:Colors.defaultTitle,
    fontSize:13,
    fontWeight:'bold',
    marginRight:10
  },
  delete:{
    flexDirection:'row',
    justifyContent:'flex-end',
    backgroundColor:'#E1251B',
    height:110,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    paddingRight:20,
  }

});