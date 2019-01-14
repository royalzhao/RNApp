import {InteractionManager} from 'react-native'

export default {
    header: {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
    },
    pageSize: 15,
    loadingTime: 350,
    timeout: 10000,
    api:{
        baseURI:"https://www.easy-mock.com/mock/5c1c91b421d37d1c3c4dc64d/",
        wareList:'api/wareList',
    },
    loadData(callback,timeout){
        InteractionManager.runAfterInteractions(()=>{
            callback && callback()
        })
    }
}