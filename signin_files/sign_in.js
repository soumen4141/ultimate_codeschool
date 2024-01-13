
    
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut ,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
 

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCIk4pKU2P_nMxjLpBBpSNmcawbpctlufY",
   authDomain: "fir-1-9a604.firebaseapp.com",
   projectId: "fir-1-9a604",
   storageBucket: "fir-1-9a604.appspot.com",
   messagingSenderId: "155387087610",
   appId: "1:155387087610:web:4f83ef5af2ec5083c7d743"
 };


 

 //--------account creation javascript code start--------
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 let email=document.getElementById("Email");
let password=document.getElementById("Pass");









//--------account log in code start----------------

 function signin(){



signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("account log in");
    console.log(user);
    console.log(userCredential);

    console.log(auth.currentUser)
    location.href = "../index.html";

    if(user){
      alert("log in successfully");
    }

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });




 }

 let button1=document.querySelector(".Sign_in");

 button1.addEventListener('click',signin);


console.log("soumen");
//   //--------account log in code start----------------


