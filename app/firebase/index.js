import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAjBKChuZNH5A1mQPvL_JXVlFK8WsP08Cg",
    authDomain: "jmanns-todo-app.firebaseapp.com",
    databaseURL: "https://jmanns-todo-app.firebaseio.com",
    storageBucket: "jmanns-todo-app.appspot.com",
    messagingSenderId: "844377557424"
  };

  firebase.initializeApp(config);
} catch (e) {
  
}

export const firebaseRef =  firebase.database().ref();
export default firebase;
