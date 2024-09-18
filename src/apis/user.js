//用户相关的请求
import { request } from "@/utils";
// 1.login 请求

export function loginAPI(formdata){
    return request({
        url:'/authorizations',
        method:'POST',
        data:formdata
     })
}


// get user information
export function getProfileAPI(){
    return request({
        url:'/user/profile',
        method:'GET',
 
     })
}