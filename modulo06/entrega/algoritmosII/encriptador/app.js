
// Const
const PLAIN_ALPHABET = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const ENCRYPTED_ALPHABET = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

encrypt = (sourceStr) => {

    var cryptedStr = "";
    for (i = 0; i < sourceStr.length; i++) {
        cryptedChar = ENCRYPTED_ALPHABET[PLAIN_ALPHABET.indexOf(sourceStr[i])];
        cryptedStr = cryptedStr + (cryptedChar ? cryptedChar : sourceStr[i]);
    }
    return cryptedStr;
}

decrypt = (cryptedStr) => {

    var sourceStr = "";
    for (i = 0; i < cryptedStr.length; i++) {
        decryptedChar = PLAIN_ALPHABET[ENCRYPTED_ALPHABET.indexOf(cryptedStr[i])]
        sourceStr = sourceStr + (decryptedChar ? decryptedChar : cryptedStr[i]);
    }
    return sourceStr;
}

doEncrypt = () => {
    var result = encrypt(document.getElementById("sourceTextArea").value);
    document.getElementById("cryptedTextArea").value = result;
}

doDecrypt = () => {
    var result = decrypt(document.getElementById("cryptedTextArea").value);
    document.getElementById("sourceTextArea").value = result;
}

