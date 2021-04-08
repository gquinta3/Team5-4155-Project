import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCglTtxJ15Q4IP_qdFYPUZCvIzTorhWphM",
  authDomain: "little-friend-app.firebaseapp.com",
  projectId: "little-friend-app",
  storageBucket: "little-friend-app.appspot.com",
  messagingSenderId: "237671022821",
  appId: "1:237671022821:web:c20a426cf75dbb2688d40c",
  measurementId: "G-XVEBFPWYKJ"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;


