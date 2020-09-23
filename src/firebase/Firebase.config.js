import firebase from "firebase";
// import { updateCollections } from "../redux/site/site.actions";

const config = {
  apiKey: "AIzaSyCEu3WsvqugTOqBDfNmVR8sVp524ylAkhs",
  authDomain: "aviator-db.firebaseapp.com",
  databaseURL: "https://aviator-db.firebaseio.com",
  projectId: "aviator-db",
  storageBucket: "aviator-db.appspot.com",
  messagingSenderId: "904722295928",
  appId: "1:904722295928:web:1bf9154b54557c9f59d18d",
  measurementId: "G-2060N4EPY6"
};

firebase.initializeApp(config);

// const addPageData = (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);
// };

// Gets reference to storage and creates in it a storageBucket reference
const storageRef = firebase.storage().ref();

// Creates reference to 'cloud.jpg'
const logoRef = storageRef.child("./images/logo.png");
// ref.put(logoRef);

export const fireStore = firebase.firestore();
export const fireAuth = firebase.auth();

// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = fireStore.collection(collectionKey);
//   console.log(collectionRef);

//   const batch = fireStore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     console.log(newDocRef);
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
