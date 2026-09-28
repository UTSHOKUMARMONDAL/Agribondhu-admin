// Firebase project config for agribondhu-project-survey.
// The same file is loaded by both index.html and admin.html.
// databaseURL is REQUIRED for Realtime Database — after you create the Realtime
// Database in the Firebase console, copy its URL from the top of the Data tab
// (looks like https://agribondhu-project-survey-default-rtdb.<region>.firebasedatabase.app)
// and paste it in below.
const firebaseConfig = {
  apiKey: "AIzaSyAHQ-Ezr9XK-SXw3IcVul79U3CbxjborOg",
  authDomain: "agribondhu-project-survey.firebaseapp.com",
  databaseURL: "https://agribondhu-project-survey-default-rtdb.firebaseio.com",
  projectId: "agribondhu-project-survey",
  storageBucket: "agribondhu-project-survey.firebasestorage.app",
  messagingSenderId: "1086350867810",
  appId: "1:1086350867810:web:71d9e41deb3617a6f4403b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
