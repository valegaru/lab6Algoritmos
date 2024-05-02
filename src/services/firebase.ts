const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBYbGMD0aW7X5vbeJ2jSI9oZfm57ltn1QI',
	authDomain: 'labs-9a0f6.firebaseapp.com',
	projectId: 'labs-9a0f6',
	storageBucket: 'labs-9a0f6.appspot.com',
	messagingSenderId: '909162520072',
	appId: '1:909162520072:web:6c5a6b47b5d7145472bbbd',
};

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);

initializeApp();

const db = getFirestore();