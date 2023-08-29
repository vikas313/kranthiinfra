// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getRemoteConfig, getValue} from'firebase/remote-config'
import {  fetchAndActivate } from "firebase/remote-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOAw7zxF1aWmMMrzmaGNuOs2b35il7Ui8",
  authDomain: "kranthiinfratechpvtltd.firebaseapp.com",
  projectId: "kranthiinfratechpvtltd",
  storageBucket: "kranthiinfratechpvtltd.appspot.com",
  messagingSenderId: "180082109240",
  appId: "1:180082109240:web:f994ec83513689fc6bafcd",
  measurementId: "G-D6V1PKG4L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const remoteConfig = getRemoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 15000
export const isFetched = await fetchAndActivate(remoteConfig)

const analytics = getAnalytics(app);

export const isServerUp = getValue(remoteConfig, "isserverup");

