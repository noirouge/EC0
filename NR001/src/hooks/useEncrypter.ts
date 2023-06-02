import {enc, AES} from 'react-native-crypto-js'
function useEncrypter(){

    const encryptText = (text: string, key: string) => {
        const encryptedText = AES.encrypt(text, key).toString();
        return encryptedText;
    };

    const decryptText = (text: string, key: string) => {
        const decryptedText = AES.decrypt(text, key).toString(enc.Utf8);
        return decryptedText;
    }





return{
    encryptText,
    decryptText,
}
}


export default useEncrypter;