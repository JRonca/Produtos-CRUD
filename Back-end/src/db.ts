import admin from "firebase-admin";
import firebaseConfig from './config';

admin.initializeApp(firebaseConfig);

const db = admin.firestore();
export default db;