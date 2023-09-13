// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeF8UYAXHDhQoQy3P8bIdkiWNnJw4zISA",
  authDomain: "jonplant-85dd1.firebaseapp.com",
  projectId: "jonplant-85dd1",
  storageBucket: "jonplant-85dd1.appspot.com",
  messagingSenderId: "358962117856",
  appId: "1:358962117856:web:2a20cb2d9c5652db34e485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

export default firebaseConfig;