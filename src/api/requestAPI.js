import axios from 'axios';
import { Toast } from 'antd-mobile';


let req = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'http://123.207.174.24:8000',
    // withCredentials: true,
    timeout: 10000
});

const getUserId = () => {
    return localStorage.getItem('userid');
}

export default {
    /**
     * 登录
     * @param  {Object}    [params={}] ?username=20&passward=60&type=1
     *     {
     *         username:
     *         passward:
     *         type:
     *     }
     */
    requestData(type,params={}) {
        let user_id = getUserId();
        
        if( !user_id && location.pathname !== '/login' && location.pathname !== '/register'){
            Toast.fail('登录失效，请重新登录！');
            setTimeout(()=>{
                location.href = '/login';
            },500);
            return false;
        }
        return req.get(type, {
            params:{...params,user_id}
        })
            .then(res=>{
                if(res.status===200){
                    return res.data;
                }else{
                    throw 'wrong';
                }
            })
    },
}
