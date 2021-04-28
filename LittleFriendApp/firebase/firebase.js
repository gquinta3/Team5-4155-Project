import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

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

export const firestore = firebase.firestore();

export const PetRef = firestore.collection("users");

export const createUserDocument = async (user, additionalData, dogData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {email} = user;
    const {displayName} = additionalData;
    const {prefDog} = dogData;

  
  try {
    userRef.set({
      displayName,
      email,
      prefDog,
      userId : user.uid,
      createdAt: new Date(),
    });
      
  } catch (error) {
    console.log('Error in creating user', error);
  }
  }
};

/*
export async function getProfile(profileRetreived) {
  var users = [];
    
  var snapshot = await PetRef.get()
      
      snapshot.forEach((doc) => {
        const dogDoc = doc.data()
        dogDoc.id = doc.id
        users.push(dogDoc);
      });

  profileRetreived(users);
  
};

export async function addDog(dog, addComplete) {
  PetRef.doc(dog.id).set(dog).then(() => addComplete(dog)
  ).catch((error) =>  console.log(error))
  
};
*/
