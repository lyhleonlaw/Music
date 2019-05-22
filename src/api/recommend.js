import jsonp from '@/common/js/jsonp'
import {commomParam,options} from './config'
import axios from 'axios'
export function getRecommend() {
    const url = 'musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({}, commomParam,{
        uin:0,
        needNewCode: 1,
        platform: 'h5'
    });
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
    // return jsonp(url, data , options);

}

