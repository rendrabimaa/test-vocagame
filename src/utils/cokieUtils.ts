import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

// Encryption and decryption keys (keep them secure)
const encryptionKey = 'your-encryption-key';
const decryptionKey = 'your-decryption-key';

// Function to encrypt the cookie value
const encryptCookie = (value: string): string => {
  const encryptedValue = CryptoJS.AES.encrypt(value, encryptionKey).toString();
  return encryptedValue;
};

// Function to decrypt the cookie value
const decryptCookie = (encryptedValue: string): string => {
  const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, encryptionKey).toString(CryptoJS.enc.Utf8);
  return decryptedValue;
};

// Function to set an encrypted cookie with an expiration time in minutes
export const setEncryptedCookie = (key: string, value: string, minutesToExpire: number): void => {
  const encryptedValue = encryptCookie(value);
  const expiresDate = new Date(new Date().getTime() + minutesToExpire * 60000); // Convert minutes to milliseconds
  Cookies.set(key, encryptedValue, { expires: expiresDate }); 
};

// Function to get and decrypt a cookie
export const getDecryptedCookie = (key: string): string | null => {
  const encryptedValue = Cookies.get(key);
  if (encryptedValue) {
    return decryptCookie(encryptedValue);
  }
  return null;
};
