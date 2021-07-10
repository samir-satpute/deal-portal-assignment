import CryptoJS from "crypto-js";
import SecureStorage from "secure-web-storage";
import config from "./../config.json";

// https://www.npmjs.com/package/secure-web-storage
export const secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key) {
    return CryptoJS.SHA256(key, config.secureStorageSecret).toString();
  },
  encrypt: function encrypt(data) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      config.secureStorageSecret
    ).toString();
  },
  decrypt: function decrypt(data) {
    return CryptoJS.AES.decrypt(data, config.secureStorageSecret).toString(
      CryptoJS.enc.Utf8
    );
  },
});

export default secureStorage;
