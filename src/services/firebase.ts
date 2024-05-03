import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db

//const firebase = require('firebase/app');
//import 'firebase/firestore';
//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
//const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
//const { collection, addDoc, getDocs, doc, setDoc } = require('firebase/firestore');
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

try {
	const docRef = await addDoc(collection(db, 'users'), {
		first: 'Ada',
		last: 'Lovelace',
		born: 1815,
	});
	console.log('Document written with ID: ', docRef.id);
} catch (error) {
	console.error('Error adding document: ', error);
}
