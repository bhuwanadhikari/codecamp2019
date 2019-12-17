import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEcO-k1yHwyYwY8FSl4CF8HTdHacMAkwI",
    authDomain: "bhuwan-forum.firebaseapp.com",
    databaseURL: "https://bhuwan-forum.firebaseio.com",
    projectId: "bhuwan-forum",
    storageBucket: "bhuwan-forum.appspot.com",
    messagingSenderId: "842592147578",
    appId: "1:842592147578:web:b97eb601753d74e0a6c3c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}