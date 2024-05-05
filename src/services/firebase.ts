import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { Song } from '../types/songs';

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

export const addSong = async (product: Omit<Song, 'id'>) => {
	try {
		const where = collection(db, 'songs1');
		await addDoc(where, product);
		console.log('se añadió con éxito');
	} catch (error) {
		console.error(error);
	}
};

const getSongs = async () => {
	const querySnapshot = await getDocs(collection(db, 'songs1'));
	const transformed: Array<Song> = [];

	querySnapshot.forEach((doc) => {
		const data: Omit<Song, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});

	return transformed;
};

export default {
	addSong,
	getSongs,
};
