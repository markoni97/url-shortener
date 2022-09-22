import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "url-shortener-f8328.firebaseapp.com",
  databaseURL: "https://url-shortener-f8328-default-rtdb.firebaseio.com",
  projectId: "url-shortener-f8328",
  storageBucket: "url-shortener-f8328.appspot.com",
  messagingSenderId: "467907919117",
  appId: "1:467907919117:web:261817366f28df473d4444"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);