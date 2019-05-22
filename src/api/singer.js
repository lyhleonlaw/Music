import {commomParam,options} from './config'
import axios from 'axios'
import jsonp from '@/common/js/jsonp'

export function getSinger() {
    const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";

    const data =  Object.assign({}, commomParam,{
        g_tk: 236115480,
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        data: '{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":200,"sex":-100,"genre":-100,"index":-100,"sin":1,"cur_page":1,"pageNum":10}}}'
    });

    return jsonp(url, data);
}