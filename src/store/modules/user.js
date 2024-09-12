//和用户相关的状态管理

import {createSlice} from "@reduxjs/toolkit"
import { request } from "@/utils"
import { setToken as _setToken, getToken } from "@/utils"
const userStore = createSlice ({
    name : "user",
    // 数据状态
    initialState: {
        token: getToken() || ''
       
    },
    // 同步修改方法
    reducers :{

        setToken (state, action){
            console.log('Token received in reducer:', action.payload);
            state.token = action.payload
            _setToken(action.payload)
        // 本地也存一份
        localStorage.setItem('token_key',action.payload)
        }
    }
})
 // 解构出actionCreater
const { setToken }  =  userStore.actions
 // 获取reducer function

const userReducer = userStore.reducer

// 异步方法
const fetchLogin = (loginForm) =>{
    return  async (dispatch) => {
// 1 发送异步请求
        const res = await request.post('/authorizations', loginForm)
        // console.log('Full login response:', res); // 检查完整的响应对象
        // console.log('Login response data:', res.data.data);

// 2 提交同步action进行token的存入
        dispatch(setToken(res.data.data.token))
        // console.log(res.data.token)
    }
}

export { fetchLogin,  setToken }
export default userReducer