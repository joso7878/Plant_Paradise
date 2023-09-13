import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBeF8UYAXHDhQoQy3P8bIdkiWNnJw4zISA",
  authDomain: "jonplant-85dd1.firebaseapp.com",
  projectId: "jonplant-85dd1",
  storageBucket: "jonplant-85dd1.appspot.com",
  messagingSenderId: "358962117856",
  appId: "1:358962117856:web:2a20cb2d9c5652db34e485",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);