console.log("hello")
const firebaseConfig = {
    apiKey: "AIzaSyDEJsraIE3Roo40okvPZkyURU48AzFiE-o",
    authDomain: "timetotrip-ee44b.firebaseapp.com",
    projectId: "timetotrip-ee44b",
    storageBucket: "timetotrip-ee44b.appspot.com",
    messagingSenderId: "728123082713",
    appId: "1:728123082713:web:5d18f58029379c01b83bc8",
    databaseURL:"https://timetotrip-ee44b-default-rtdb.firebaseio.com/",
    measurementId: "G-VW62NQ9QED"
  };
  firebase.initializeApp(firebaseConfig);
 
  
  

  document.getElementById("book_button").addEventListener("click", submitForm);

  async function submitForm() {
   
    const data={
    name : document.getElementById("name").value,
     unname : document.getElementById("unname").value,
     email: document.getElementById("email").value,
     phone: document.getElementById("phone").value,
     password: document.getElementById("password").value,
     confirmpassword: document.getElementById("confirmpassword").value,
     checkin: document.getElementById("checkin").value,
     checkout:document.getElementById("checkout").value,
     male: document.getElementById("male").checked,
     female: document.getElementById("female").checked,
     other:document.getElementById("other").checked,

    }
    
    console.log(data)
    await  fetch(`${firebaseConfig.databaseURL}/data.json`,{
         method:"POST",
         "Content-type":"application/json",
         body:JSON.stringify(data)
     })
     const message=document.getElementById("alert")
      message.style.display = "block";
     setTimeout(() => {
        message.style.display = "none";
      }, 3000)
      location.replace("main.html")
    //   enable alert
    
  
    //   remove the alert
    ;
  
    //   reset the form

  }
  
  

  