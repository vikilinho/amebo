//   Firebase SDK
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWqXMJ_xRXHcS2Ts1VIt2Id5rqa1tdFT8",
    authDomain: "public-amebo.firebaseapp.com",
    databaseURL: "https://public-amebo.firebaseio.com",
    projectId: "public-amebo",
    storageBucket: "public-amebo.appspot.com",
    messagingSenderId: "816225362865",
    appId: "1:816225362865:web:5256f97ab43fe4a9bf1390",
    measurementId: "G-CN9LFKF1ZC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();