
import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA2VacjLpXxzT0hrBzojL5LvLUGyWGSWYI",
    authDomain: "face-recognition-cffc0.firebaseapp.com",
    projectId: "face-recognition-cffc0",
    storageBucket: "face-recognition-cffc0.appspot.com",
    messagingSenderId: "438640680317",
    appId: "1:438640680317:web:fa4c1d32f1aedd63e38014",
    measurementId: "G-YB8X0T9ESS"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export default {
    firebase,
    db,
    storage,
}
