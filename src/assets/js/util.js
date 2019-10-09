/**
 * Created by Limbo.Wu on 2019/10/09.
 */
import md5 from 'md5';
import config from '../../config';

export const getSign = (signTimestamp = new Date().getTime()) => {
    let {deviceId, signVersion, originKey} = config.signConfig,
        requestKey = md5(deviceId + originKey).toString(),
        sign = md5(deviceId + signTimestamp + requestKey).toString(),
        auth = {signTimestamp, deviceId, signVersion, sign};
    return JSON.stringify(auth);
};

export const title = (title = '盈识平台') => {
    window.document.title = title;
};

export const getCurDate = () => {
    const end = new Date();
    const start = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 0, 0, 0);
    return [start, end];
};

export const getCurWeek = () => {
    const end = new Date();
    const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    return [start, end];
};

export const getCurMonth = () => {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    return [start, end];
};

export const getMonthAgo = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date
};
export const getNowFormatDate=()=> {
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

/**
 * 展业云专用
 * @param file
 * @param fileName
 * @returns {FormData}
 */
export const getFormData = (file, fileName) => {
    let formData = new FormData();
    formData.append('file', file, file.name);
    !!fileName && formData.append('fileName', fileName);
    formData.append('ossBucketName', 'test12323');
    formData.append('ossDiskPath', 'datas/test/');
    return formData
};
