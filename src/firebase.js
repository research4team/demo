import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyD5umZBgBopnyXrUa6RHAcEfeNGeLeZMVs",
    authDomain: "reactfire-5d933.firebaseapp.com",
    databaseURL: "https://reactfire-5d933.firebaseio.com",
    projectId: "reactfire-5d933",
    storageBucket: "reactfire-5d933.appspot.com",
    messagingSenderId: "929369164571"
};
var fire = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default fire;