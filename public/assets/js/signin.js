
const firebaseConfig = {
    apiKey: "AIzaSyBtKLbp5_Rx_nCvJJGSvzewDnhzJqqRk84",
    authDomain: "loginform-7fd08.firebaseapp.com",
    databaseURL: "https://loginform-7fd08-default-rtdb.firebaseio.com",
    projectId: "loginform-7fd08",
    storageBucket: "loginform-7fd08.appspot.com",
    messagingSenderId: "80312419356",
    appId: "1:80312419356:web:a6126a84bfd10b7b72cbd9"
    //   copy your firebase config informations
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var loginformDB = firebase.database().ref("loginform");
  
  document.getElementById("loginform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("loginform").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newloginform = loginformDB.push();
  
    newloginform.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  