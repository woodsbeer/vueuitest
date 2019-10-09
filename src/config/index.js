/**
 * Created by Limbo.Wu on 2019/10/09.
 */
import env from './env';

const baseURL = env !== 'production' ? 'http://api.test.e-baotong.cn' : 'https://api.e-bao.cn';
const apiURL = env !== 'production' ? 'http://testapi.insiap.com' : 'http://api.insiap.com';
const webURL = env !== 'production' ? 'http://insiap.test.e-baotong.cn' : 'http://b.insiap.com';

export default {
    name: '盈识运营管理台',
    version: '1.2',
    icp: '粤ICP备13063195号',
    copy: '运营管理台 © 2017 深圳市易保网通科技有限公司 ',
    pageTitle: '-盈识运营管理台',
    appName: '展业家',
    baseURL,
    webURL,
    apiURL,
    signConfig: {
        deviceId: '123',
        signVersion: 'v1.1',
        originKey: 'ios-zyj-v1.1'
    },
    paging:{
        pageSize: 10,
        pageOpts: [10, 20, 50]
    }
}