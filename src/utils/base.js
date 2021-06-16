import md5 from "js-md5";
import CryptoJS  from "crypto-js";
const aesPrivateKey = "abcdefgabcdefg12";

//解密方法
export function Decrypt(param) {
    let data = {
        sign:null,//签名
        data:null//json数据
    }
    data.data = JSON.stringify(param)
    data.sign = md5(data.data)
    // console.log(data)
    let srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    let key = CryptoJS.enc.Utf8.parse(keys);
    let datas = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return datas.toString();
}
export function Encrypt(encrypt) {
    // let data = {
    //     sign:null,//签名
    //     data:null//json数据
    // }
    // data.data = JSON.stringify(param)
    //
    // data.sign = md5(data.data)
    // // let srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    // var key = CryptoJS.enc.Utf8.parse(keys);
    // // let datas = CryptoJS.AES.encrypt(data, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    // let decrypt = CryptoJS.AES.decrypt(data, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    // console.log(decrypt)
    // return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    // var aesPrivateKey = '1234567890123456';//密钥
    //
    // var key = CryptoJS.enc.Utf8.parse(aesPrivateKey);
    //
    // var decrypt = CryptoJS.AES.decrypt(decryptString, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    // console.log(CryptoJS.enc.Utf8.stringify(decrypt).toString())
    // return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    let data = {
        sign:null,//签名
        data:null//json数据
    }
    data.data = JSON.stringify(encrypt)
    data.sign = md5(data.data).toUpperCase()
    // console.log(data)
    var key = CryptoJS.enc.Utf8.parse(aesPrivateKey);

    var srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));

    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});

    return encrypted.toString();
}
