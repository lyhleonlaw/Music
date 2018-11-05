import jsonp from '@/common/js/jsonp'
import {commomParam,options} from './config'

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({}, commomParam,{
        uin:0,
        needNewCode: 1,
        platform: 'h5'
    })

    return jsonp(url, data , options);
}