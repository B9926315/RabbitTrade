//管理用户相关数据
import {defineStore} from "pinia";
import {ref} from "vue";
import {loginApi} from "@/apis/user";

export const useUserStore=defineStore('user',()=>{
    const userInfo=ref({});
    const getUserInfo=async ({account,password})=>{
        const res=await loginApi({account,password});
        userInfo.value=res.result;
    }
    //退出登录函数,清除用户信息
    const clearUserInfo=()=>{
        userInfo.value={}
    }
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    //数据持久化
    persist:true
})