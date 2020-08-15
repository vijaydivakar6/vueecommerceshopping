  import firebase from 'firebase';
  require("firebase/firestore");
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAT7hS9Q5h0tle9SoCyq7y3OirShw46dKQ",
    authDomain: "vue-shop-5cf76.firebaseapp.com",
    databaseURL: "https://vue-shop-5cf76.firebaseio.com",
    projectId: "vue-shop-5cf76",
    storageBucket: "vue-shop-5cf76.appspot.com",
    messagingSenderId: "738650622123",
    appId: "1:738650622123:web:449a8d7424c4a438f5cfee",
    measurementId: "G-QKSCL4F3K7"
  };
  // Initialize Firebase
   const fb=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export{fb,db}
  firebase.analytics();