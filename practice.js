const firebaseConfig = {
    apiKey: "AIzaSyAaW18LTn3RB-z6FwV5_7_taZLKLKhCNTI",
    authDomain: "kwitter-b3561.firebaseapp.com",
    databaseURL: "https://kwitter-b3561-default-rtdb.firebaseio.com",
    projectId: "kwitter-b3561",
    storageBucket: "kwitter-b3561.appspot.com",
    messagingSenderId: "124777583356",
    appId: "1:124777583356:web:3398b64d2d94376491fd79",
    measurementId: "G-47N8ES8EP6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}