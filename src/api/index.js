import requests from '@/api/request'
//获取商品类型列表
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',methods:'get'})

/**
 * 
 * 调用注册接口 
 * 
 */
export const reqRegister = data =>requests({url:'user/regUser',method:'post',data})

/**
 * 
 * 调用登录接口 
 * 
 */
export const reqLogin = data =>requests({url:'user/login',method:'post',data})

/**
 * 
 * 调用登录接口 
 * 
 */
export const reqUpdatePass = data =>requests({url:'my/resetPwd',method:'post',data})