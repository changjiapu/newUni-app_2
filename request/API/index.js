import {postRequest,getRequest,postGetRequest,deleteRequest,deleteGetRequest}from'@/request/index.js'
//系统用户注册
export function addUserBySystem(data){
	return postRequest(data,'/user/addUserBySystem').then(res => res)
}
//用户登录
export function login(data){
	return postRequest(data,'/user/login').then(res => res)
}
//忘记密码 修改
export function retrievePassword(data){
	return postRequest(data,'/user/retrievePassword').then(res => res)
}
//修改用户密码
export function updUserPassword(data){
 return postRequest(data,'/user/updUserPassword').then(res => res)
}
//获取客服服务信息
export function getCustomerService(){
	return getRequest('/user/getCustomerService').then(res => res)
}
//投诉建议
export function customerFeedback(data){
	return postRequest(data,'/user/customerFeedback').then(res => res)
}
//保存修改店铺信息
export function addShopInfo(data){
	return postRequest(data,'/shop/addShopInfo').then(res=>res)
}
//保存修改店铺信息
export function getShopInfoById(shopId){
	return getRequest('/shop/getShopInfoById?shopId='+shopId).then(res=>res)
}
//
export function getCommentByShopId(pageNo,pageSize,shopId){
	return getRequest('/comment/getCommentByShopId?pageNo='+pageNo+'&pageSize='+pageSize+'&shopId='+shopId).then(res=>res)
}
//根据店铺 id 及条件查询所有商品
export function getProductByShopId(pageNo,pageSize,shopId,sortWay){
	return getRequest('/product/getProductByShopId?pageNo='+pageNo+'&pageSize='+pageSize+'&shopId='+shopId+'&sortWay='+sortWay).then(res=>res)
}
//店铺添加商品
export function addProduct(data){
	return postRequest(data,'/product/addProduct').then(res=>res)
}
//查询商品id
export function getProductCategory(level,type){
	return getRequest('/category/getProductCategory?level='+level+'&type='+type).then(res=>res)
}
//商品上下架
export function shelvesProduct(productId,publishStatus){
	return postGetRequest('/product/shelvesProduct?productId='+productId+'&publishStatus='+publishStatus).then(res=>res)
}
//删除商品
export function delProductById(productIds){
	return deleteGetRequest('/product/delProductById?productIds='+productIds).then(res=>res)
}
//修改商品信息
export function updProduct(data){
	return postRequest(data,'/product/updProduct').then(res=>res)
}
//根据商品id查询商品基本信息
export function getShopProductById(productId){
	return getRequest('/product/getShopProductById?productId='+productId).then(res=>res)
}
//根据用户 id 判断是否入驻商家
export function getShopStatusByUserId(userId){
	return getRequest('/shop/getShopStatusByUserId?userId='+userId).then(res => res)
}
//获取用户信息
export function getUserById(userId){
	return postGetRequest('/user/getUserById?userId='+userId).then(res => res)
}
//修改用户头像
export function updUserPhoto(data){
	return postRequest(data,'/user/updUserPhoto').then(res => res)
}
//修改用户名
export function updUserName(data){
	return postRequest(data,'/user/updUserName').then(res => res)
}
//修改用户昵称
export function updUserNikeName(data){
	return postRequest(data,'/user/updUserNikeName').then(res => res)
}
//修改用户电话号码
export function updUserPhone(data){
 return postRequest(data,'/user/updUserPhone').then(res => res)
}
//修改用户个性签名
export function updUserSpecName(data){
 return postRequest(data,'/user/updUserSpecName').then(res => res)
}
//修改用户性别
export function updUserSex(data){
 return postRequest(data,'/user/updUserSex').then(res => res)
}
//获取销量统计表
export function getSaleProductAnalysisByShopId(pageNo,pageSize,shopId,categoryId,startTime){
 return getRequest('/analysis/getSaleProductAnalysisByShopId?pageNo='+pageNo+"&pageSize="+pageSize+"&shopId="+shopId+'&categoryId='+categoryId+'&startTime='+startTime).then(res => res)
}
//日月季报表
export function getMoneyAnalysisByShopId(shopId,dateType,startTime,endTime){
 return getRequest('/analysis/getMoneyAnalysisByShopId?shopId='+shopId+"&dateType="+dateType+"&startTime="+startTime+"&endTime="+endTime).then(res => res)
}
//查询订单列表
export function queryOrderList(userId,queryType,state,pageNo,pageSize){
 return postGetRequest('/order/queryOrderList?userId='+userId+"&queryType="+queryType+"&state="+state+"&pageNo="+pageNo+"&pageSize="+pageSize).then(res => res)
}
//确认订单
export function confirmOrder(addressId,detailId,orderStatus){
 return postGetRequest('/order/confirmOrder?addressId='+addressId+"&detailId="+detailId+"&orderStatus="+orderStatus).then(res => res)
}
//取消订单
export function cancelOrder(detailId){
 return postGetRequest('/order/cancelOrder?detailId='+detailId).then(res => res)
}
//发布公告
export function addNotice(data){
 return postRequest(data,'/notice/addNotice').then(res => res)
}
//商家入驻
export function addShop(data){
	return postRequest(data,'/shop/addShop').then(res => res)
}
//修改个人信息
export function updateUserInfo(data){
	return postRequest(data,'/user/updateUserInfo').then(res => res)
}