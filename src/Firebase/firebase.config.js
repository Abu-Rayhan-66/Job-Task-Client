// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPX3eoijo1HFGOYALyRXCycgUh6a76FS8",
  authDomain: "job-task-1-ab05d.firebaseapp.com",
  projectId: "job-task-1-ab05d",
  storageBucket: "job-task-1-ab05d.appspot.com",
  messagingSenderId: "330247340021",
  appId: "1:330247340021:web:e8ad025592b3984c97aabc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;