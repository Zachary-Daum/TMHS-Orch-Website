!function(){firebase.initializeApp({apiKey:"AIzaSyC5Pfh5VjcbeHL7lxZdVjbI6hkVuhQG-T4",authDomain:"orch-website.firebaseapp.com",databaseURL:"https://orch-website.firebaseio.com",projectId:"orch-website",storageBucket:"orch-website.appspot.com",messagingSenderId:"216030039794",appId:"1:216030039794:web:d49263dcecd18cff3d0a6b",measurementId:"G-WSLG1WQ4VX"});const e=document.getElementById("email_input"),a=document.getElementById("pword_input");document.getElementById("login_btn").addEventListener("click",n=>{const t=e.value,o=a.value;firebase.auth().signInWithEmailAndPassword(t,o).catch(e=>console.log(e.message))}),firebase.auth().onAuthStateChanged(e=>{e?window.location.replace("../admin/console.html"):console.log("not logged in")})}();