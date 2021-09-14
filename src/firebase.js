import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDvZF8JuLpKPwqR6tIpwMUXtvV65iIB8PA",
  authDomain: "fireflychat-a0b64.firebaseapp.com",
  projectId: "fireflychat-a0b64",
  storageBucket: "fireflychat-a0b64.appspot.com",
  messagingSenderId: "739227969714",
  appId: "1:739227969714:web:1458caa637cdb3160241ab"
}).auth();