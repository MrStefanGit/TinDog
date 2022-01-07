// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUI7fsetDQOeOZv1zwbO0-qoHvQLkhh5M",
  authDomain: "tindog-clone-9d3dd.firebaseapp.com",
  projectId: "tindog-clone-9d3dd",
  storageBucket: "tindog-clone-9d3dd.appspot.com",
  messagingSenderId: "103392802887",
  appId: "1:103392802887:web:aa35974d6762389147d962"
};

// const app = initializeApp(firebaseConfig);
// export default app;

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;

// async function getDogs(database) {
//   const dogsCol = collection(database, 'dogs');
//   const dogSnapshot = await getDocs(dogsCol);
//   const dogList = dogSnapshot.docs.map(doc => doc.data());
//   return dogList
// }

// const dogData = getDogs(database)

// export default dogData;