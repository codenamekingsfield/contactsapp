import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATdaZIxMi34-vo_P63m9Bkmii4mGqy-FQ",
    authDomain: "rnfirebase-5a16f.firebaseapp.com",
    projectId: "rnfirebase-5a16f",
    storageBucket: "rnfirebase-5a16f.appspot.com",
    messagingSenderId: "485097834594",
    appId: "1:485097834594:web:840dcc3ebccd995618a93b"
};
  
firebase.initializeApp(firebaseConfig)

export default firebase;