import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEFRvdIHmKGrEwfmBpdgm3P3iQ_8s-SHg",
    authDomain: "revents-220216.firebaseapp.com",
    databaseURL: "https://revents-220216.firebaseio.com",
    projectId: "revents-220216",
    storageBucket: "revents-220216.appspot.com",
    messagingSenderId: "567038485615"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;