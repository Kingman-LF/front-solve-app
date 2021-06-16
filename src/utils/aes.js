// 新建 src/utils/crypto.js
import CryptoJS from 'crypto-js/crypto-js'

const key = CryptoJS.enc.Utf8.parse('retedfgd'); // 'retedfgd' 与后台一致
const iv = CryptoJS.enc.Utf8.parse('asdqwe'); // 'asdqwe' 与后台一致

// AES加密 ：字符串 key iv  返回base64

export function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}



// AES 解密 ：字符串 key iv  返回base64

export function Decrypt(word) {
    // let key = KEY;
    // let iv = IV;

    // if (keyStr && ivStr) {
    //     key = CryptoJS.enc.Utf8.parse(keyStr);
    //     iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }
    //
    // let base64 = CryptoJS.enc.Base64.parse(str);
    // let src = CryptoJS.enc.Base64.stringify(base64);
    //
    // var decrypt = CryptoJS.AES.decrypt(src, key, {
    //     iv: iv,
    //     // mode: CryptoJS.mode.ECB,
    //     mode: CryptoJS.mode.BCB, // 保持一致
    //     padding: CryptoJS.pad.Pkcs7
    // });
    //
    // var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    // return decryptedStr.toString();


    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}