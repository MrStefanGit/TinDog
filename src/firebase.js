import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUI7fsetDQOeOZv1zwbO0-qoHvQLkhh5M",
  authDomain: "tindog-clone-9d3dd.firebaseapp.com",
  projectId: "tindog-clone-9d3dd",
  storageBucket: "tindog-clone-9d3dd.appspot.com",
  messagingSenderId: "103392802887",
  appId: "1:103392802887:web:aa35974d6762389147d962"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await database
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await database.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        bio: '',
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, breed, age) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await database.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      breed,
      age,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};
export default database;

//marlanie
export {
  auth,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};