/** @format */

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyATSzEebXnqY5QCKtHrpuzgghe6gQz_g-g',
	authDomain: 'restaurantapp-2412a.firebaseapp.com',
	databaseURL: 'https://restaurantapp-2412a-default-rtdb.firebaseio.com',
	projectId: 'restaurantapp-2412a',
	storageBucket: 'restaurantapp-2412a.appspot.com',
	messagingSenderId: '540975170224',
	appId: '1:540975170224:web:f26af4b4dd3e9a993a7175',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
