firebase.initializeApp({
  apiKey: 'AIzaSyDgLD9d6dbskc_cMrEKyGgL2dd49OeIA2A',
  authDomain: 'usuario1-9f871.firebaseapp.com',
  projectId: 'usuario1-9f871'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




