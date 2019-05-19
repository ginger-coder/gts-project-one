import axios from 'axios';


let req = axios.create({
    baseURL: 'http://localhost:5000/api',
    // baseURL: 'http://123.207.174.24:8000',
    // withCredentials: true,
    timeout: 10000
});


export default {
    /**
     * 获取商品数据
     * @param  {Object}    [params={}] ?page_size=20&category_id=60&page=1&sort=sort
     *     {
     *         page_size:
     *         category_id:
     *         page:
     *         sort
     *     }
     */
    login(params={}) {
        return req.get('/user/login', {
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