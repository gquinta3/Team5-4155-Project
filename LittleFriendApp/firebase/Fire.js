import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys);
    }
/*
    addPost = async ({ text }) => {
        return new Promise((res, rej) => {
            this.firestore
            .collection("users")
            .add({
                text,
                uid: this.uid,
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            });
        });
    };
*/

    createUser = async user => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)

            let db = this.firestore.collection("users").doc(this.uid)

            db.set ({
                name: user.name,
                email: user.email,

            });
        } catch (error) {
            alert("Error: ", error);
        }
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}
Fire.shared = new Fire();
export default Fire;