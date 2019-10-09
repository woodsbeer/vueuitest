/**
 * Created by Limbo.Wu on 2019/10/09.
 */
import env from './env';

const baseURL = env !== 'production' ? 'http://api.test.baidu.cn' : 'https://api.baidu.cn';
const apiURL = env !== 'production' ? 'http://testapi.baidu.com' : 'http://api.baidu.com';
const webURL = env !== 'production' ? 'http://insiap.test.baidu.cn' : 'http://b.baidu.com';

export default {
    name: 'CARC管理台',
    version: '1.0',
    icp: '',
    copy: '',
    pageTitle: '-CARC管理台',
    appName: '',
    baseURL,
    webURL,
    apiURL,
    signConfig: {
        deviceId: '123',
        signVersion: 'v1.1',
        originKey: ''
    },
    paging:{
        pageSize: 10,
        pageOpts: [10, 20, 50]
    }
}