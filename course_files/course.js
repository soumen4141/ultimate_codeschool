

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

 let user=auth.currentUser;

 console.log(user);
// localStorage.setItem(value, `${data}`);
// let getvalue= localStorage.getItem(value);
 
 let add=document.querySelectorAll(".course_buy");




let cart_arr=[]



let add_localstorage=(user)=>{

//      let local_data=JSON.parse(localStorage.getItem("myitem")).concat(cart_arr);
//    let data=JSON.stringify(local_data);
   
//     localStorage.setItem("myitem", data);
//     console.log(user)

if(localStorage.getItem(user.uid)==null){
    localStorage.setItem(user.uid, "[]");

    
}
else{
    
let local_data=JSON.parse(localStorage.getItem(user.uid)).concat(cart_arr);
let data=JSON.stringify(local_data);

 localStorage.setItem(user.uid, data);
}

// let local_data=JSON.parse(localStorage.getItem(user.uid)).concat(cart_arr);
// let data=JSON.stringify(local_data);

//  localStorage.setItem(user.uid, data);
 
}

let show_cart=(user)=>{
    let mycart=document.querySelector("#mycart")
    console.log(user)

    mycart.addEventListener('click',()=>{

        add_localstorage(user);
        location.href = "../mycart_files/mycart.html";


    })


}

// console.log(arr_data[0].name);
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
     
    
document.querySelectorAll(".box").forEach(element => {

  // let cousre_buy=element.querySelector(".course_buy");

  // let course_not_buy=0;
  let check=0;

  

    element.querySelector(".course_buy").addEventListener('click',()=>{
      if(check==0){
        let data=element.querySelector("p");
        let data2=element.querySelector(".course_price b")
     
          let obj={}
     
         obj.course_name=data.innerHTML;
         obj.course_price=data2.innerHTML;
     
        cart_arr.push(obj);

     
          if(user){
     
           alert("Course has been added");
          }
          element.querySelector(".course_buy").innerHTML="REMOVE";
          check=1;

      }
      else{
      check=0;
      //this code is for remove item from local storage
      if(localStorage.getItem(user.uid)!==null){

        let local_data1=JSON.parse(localStorage.getItem(user.uid));
        
        local_data1.forEach((elem,index)=>{
         if(elem.course_name==element.querySelector("p").innerHTML){
                
          local_data1.splice(index,1);

    
        
         }

         let data1=JSON.stringify(local_data1);

          localStorage.setItem(user.uid, data1);
    
        })
       
    
    }
      alert("You have removed this course");
      element.querySelector(".course_buy").innerHTML="ADD TO CART";

      }
            //this code is for remove item from local storage

       
      
      
      


     }) 
  
  // else{

  //   element.querySelector(".course_buy").addEventListener('click',()=>{

  //     element.querySelector(".course_buy").innerHTML="add"

  //   })

  // }
 
  if(localStorage.getItem(user.uid)!==null){

    let local_data1=JSON.parse(localStorage.getItem(user.uid));
    
    local_data1.forEach((elem)=>{
     if(elem.course_name==element.querySelector("p").innerHTML){
            
    element.querySelector(".course_buy").innerHTML="REMOVE";

    check=1;
     }

    })
   

}
    
});


show_cart(user);



    
      // ...
    } else {
      // User is signed out

      document.querySelectorAll(".course_buy").forEach(elem=>{

       elem.addEventListener('click',()=>{


        alert("please log in  first");
       })

      })

    }
  });

  



//course filter js start


let course_obj=[

 {
  course_title:"Programming course",
  course_name:"Programming",
  course_price:"",
  image_link:""
  
 },
 {
  course_title:"Programming course",
  course_name:"Programming",
  course_price:""
  
 },
 {
  course_title:"3D design course",
  course_name:"3D",
  course_price:""
  
 }, {
  course_title:"3D design course",
  course_name:"3D",
  course_price:""
  
 },
 {
  course_title:"Web developement course",
  course_name:"WEB",
  course_price:""
  
 },{
  course_title:"Web developement course",
  course_name:"WEB",
  course_price:""
  
 },{
  course_title:"Backend development",
  course_name:"Backend",
  course_price:""
  
 },{
  course_title:"Backend development",
  course_name:"Backend",
  course_price:""
  
 },{
  course_title:"Backend development",
  course_name:"Backend",
  course_price:""
  
 },
 {
  course_title:"3D design course",
  course_name:"3D",
  course_price:""
  
 },{
  course_title:"3D design course",
  course_name:"3D",
  course_price:""
  
 },{
  course_title:"Backend development",
  course_name:"Backend",
  course_price:""
  
 },{
  course_title:"UI/UX design course",
  course_name:"UI/UX",
  course_price:""
  
 },{
  course_title:"UI/UX design course",
  course_name:"UI/UX",
  course_price:""
  
 },
 {
  course_title:"UI/UX design course",
  course_name:"UI/UX",
  course_price:""
  
 },{
  course_title:"UI/UX design course",
  course_name:"UI/UX",
  course_price:""
  
 },{
  course_title:"UI/UX design course",
  course_name:"UI/UX",
  course_price:""
  
 },{
  course_title:"others course",
  course_name:"Others",
  course_price:""
  
 },{
  course_title:"others course",
  course_name:"Others",
  course_price:""
  
 },{
  course_title:"others course",
  course_name:"Others",
  course_price:""
  
 }


]
let append_course=`<div class="cards">
<div class="image">
<img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?w=1060&t=st=1702569509~exp=1702570109~hmac=9da1fadd16d66071e56b5b707e26b336af9e973b16d3a2b08cd9d58fa5ec0be3" alt="">

    

</div>
<div class="course_description">
    <button style="min-width:172px;height:40px;background-color: #dae5f3; position:relative;top:13px;left:30px; border: 1px solid transparent;border-radius: 10px 10px 10px 10px;padding: 10px 10px 10px 10px;font-size: 18px;">
        <b style="background-color: transparent;">Started on 17th April</b>
    </button>
    <h1 style="background-color: transparent ;position:relative;top:23px;left:29px;">Backend Development <br>With Node.Js & MongoDB</h1>

</div>
<div class="rating">

</div>
<div class="buttons">
<button class="live">
    <b style="background-color: transparent;">LIVE BATCH</b>


</button>
<button class="live">
    <b style="background-color: transparent;">RECORDINGS AVAILABLE</b>


</button>
<button class="join">
    <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">ENROLL</b>



</button>
<button class="explore">
    <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">EXPLORE</b>

</button>
</div>


</div>`
let fillter_course=()=>{



}
let cat_manus=document.querySelectorAll(".cat_manus li b");


cat_manus.forEach((elem1)=>{
  
  elem1.addEventListener('click',(e)=>{

    document.querySelector(".course_section").innerHTML=" ";



    course_obj.forEach((elem)=>{

      if(elem.course_name==elem1.innerHTML){
    
        let div=document.createElement("div");
    
        div.style.display="inline-block"
    
        div.innerHTML=`<div class="cards">
        <div class="image">
        <img src="../programming-background-collage_23-2149901770.avif" alt="" style="width:100%;height:100%">
            
        
        </div>
        <div class="course_description">
            <button style="min-width:172px;height:40px;background-color: #dae5f3; position:relative;top:13px;left:30px; border: 1px solid transparent;border-radius: 10px 10px 10px 10px;padding: 10px 10px 10px 10px;font-size: 18px;">
                <b style="background-color: transparent;">Started on 17th April</b>
            </button>
            <h1 style="background-color: transparent ;position:relative;top:23px;left:29px;">${elem.course_title}</h1>
        
        </div>
        <div class="rating">
        
        </div>
        <div class="buttons">
        <button class="live">
            <b style="background-color: transparent;">LIVE BATCH</b>
        
        
        </button>
        <button class="live">
            <b style="background-color: transparent;">RECORDINGS AVAILABLE</b>
        
        
        </button>
        <button class="join">
            <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">ENROLL</b>
        
        
        
        </button>
        <button class="explore">
            <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">EXPLORE</b>
        
        </button>
        </div>
        
        
        </div>`;
        document.querySelector(".course_section").appendChild(div);
      }
      else if(elem1.innerHTML=="ALL"){


        let div=document.createElement("div");
    
        div.style.display="inline-block"
    
        div.innerHTML=`<div class="cards">
        <div class="image">
        <img src="../programming-background-collage_23-2149901770.avif" alt="" style="width:100%;height:100%">
            
        
        </div>
        <div class="course_description">
            <button style="min-width:172px;height:40px;background-color: #dae5f3; position:relative;top:13px;left:30px; border: 1px solid transparent;border-radius: 10px 10px 10px 10px;padding: 10px 10px 10px 10px;font-size: 18px;">
                <b style="background-color: transparent;">Started on 17th April</b>
            </button>
            <h1 style="background-color: transparent ;position:relative;top:23px;left:29px;">${elem.course_title}</h1>
        
        </div>
        <div class="rating">
        
        </div>
        <div class="buttons">
        <button class="live">
            <b style="background-color: transparent;">LIVE BATCH</b>
        
        
        </button>
        <button class="live">
            <b style="background-color: transparent;">RECORDINGS AVAILABLE</b>
        
        
        </button>
        <button class="join">
            <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">ENROLL</b>
        
        
        
        </button>
        <button class="explore">
            <b style="background-color: transparent; font-size: 15px ; font-weight: 800;">EXPLORE</b>
        
        </button>
        </div>
        
        
        </div>`;
        document.querySelector(".course_section").appendChild(div);
      }
    
    
    
    })

  })


})

let check_user_existence=()=>{

let signout=()=>{
    

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user is present ");
      console.log(user);
      signOut(auth);
      let logout=document.querySelector(".logout");
      logout.className="dashboard";
      logout.innerHTML=`<a href="../signin_files/signIn.html" style="text-decoration: none; color: rgb(252, 251, 251);"><b>Log In</b></a>`;
      



      console.log("user is signout ");


  
      // ...
    } else {
      // User is signed out
      console.log("user is not present");
      console.log(user);
      // ...
    }
  });
    }
    let func=()=>{
      alert("log out first");

    }
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    let logout=document.querySelector(".dashboard");
    let profile_button=document.querySelector(".profile");
    let sign_up_but=document.querySelector(".signIn a");

    logout.className="logout";
    logout.innerHTML="<b>log out</b>";
    profile_button.innerHTML=`${user.email[0].toUpperCase()}`;
    profile_button.style.visibility= "visible";
    sign_up_but.href="#";
    
    

    
    sign_up_but.addEventListener('click',func)



    logout.addEventListener('click',signout);

    console.log(user,user.email[0]);




    


    // ...
  } else {
    // User is signed out

    console.log('user is not here ')
    profile_button.style.visibility= "hidden";
    let sign_up_but=document.querySelector(".signIn a");
    sign_up_but.href="signup.html";
    sign_up_but.removeEventListener('click',func)




    // ...
  }
});


//profile button click funtionality
let profile_button=document.querySelector(".profile");
let manu_check=0;
let profile_click=()=>{
  let manu=document.querySelector(".profile_manu");

  if(manu_check==0){

    gsap.to(manu,{
      height:130,
      visibility: "visible"


    })
    manu_check=1;
  }
  else{

    gsap.to(manu,{
      height:0,
      visibility:"hidden"


    })
    manu_check=0;
  }

}
profile_button.addEventListener('click',profile_click);

}
check_user_existence();