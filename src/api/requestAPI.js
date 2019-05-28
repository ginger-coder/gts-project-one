import axios from 'axios';


let req = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'http://123.207.174.24:8000',
    // withCredentials: true,
    timeout: 10000
});


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
        return req.get(type, {
            params:{...params}
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
