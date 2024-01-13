
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

// let h1=document.querySelector("h1");


// h1.innerHTML=localStorage.getItem(auth.currentUser);
onAuthStateChanged(auth, (user) => {
    if (user) {

      let total=0;
      let details_body=document.getElementsByClassName("course_details");

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
     
let data=JSON.parse(localStorage.getItem(user.uid));
console.log(data);


    data.forEach(element => {

        let e=document.createElement("li");

        e.innerHTML=` <span class="course_title">${element.course_name}</span><span class="price">${element.course_price}</span>`

        details_body[0].appendChild(e);

         
    });

    data.forEach((elem)=>{

      let num_str=+(elem.course_price);

      total=total+num_str;
    
    

    

    

    

    })


      let e=document.createElement("li");

        e.innerHTML=` <span class="course_title">total</span><span class="price">${total}</span>`
 
        details_body[0].appendChild(e);
 

      
      // ...
    } else {
      // User is signed out
      // ...
    }
  });