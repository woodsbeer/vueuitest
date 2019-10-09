/**
 * Created by Limbo.Wu on 2019/10/09.
 */
import axios from 'axios';
import iView from 'iview';
import deepAssign from 'deep-assign';
import {getSign} from './util';
import auth from './auth';
import config from '../../config';

const {baseURL} = config;

axios.defaults.timeout = 30000;
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(
    config => {
        // console.log(config.data instanceof FormData,'config.data instanceof FormData');
        config.data = !!config.data ? config.data instanceof FormData ? config.data : JSON.parse(JSON.stringify(config.data)) : undefined;
        config.headers['Token'] = auth.get().token;
        config.headers['Cache-Control'] = 'no-cache';
        //config.headers['appid'] = 'insiap';
        return config
    },
    error => {
        iView.Message.error('网络异常');
        return Promise.reject(error);
    });

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        }
        iView.Message.error(response.statusText);
        return Promise.reject(response);
    },
    error => {
        iView.Message.error('服务器异常');
        return Promise.reject(error);
    });

const Main = (option) => {
    return axios.get('/app/systemTime/get')
        .then((signTimestamp) => {
            return axios(deepAssign(
                {
                    headers: {
                        'CARC-Authorization': getSign(!!signTimestamp.data ? signTimestamp.data.dateTime : null)
                    }
                },
                option
            ))
        })
};

export default Main
