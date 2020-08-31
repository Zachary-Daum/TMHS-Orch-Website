(function() {
    const config = {
        apiKey: "AIzaSyAzOq7vVRBJrJjf_EuVx8iRawq33713SVU",
        authDomain: "orch-final.firebaseapp.com",
        databaseURL: "https://orch-final.firebaseio.com",
        projectId: "orch-final",
        storageBucket: "orch-final.appspot.com",
        messagingSenderId: "796004767290",
        appId: "1:796004767290:web:6b215a2b757bc2816dc703"
    };
    firebase.initializeApp(config);

    const btnLogout = document.getElementById('logout_btn');
    //login event
    btnLogout.addEventListener('click', e=> {
        firebase.auth().signOut();
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log('logged in');
        }
        else {
            window.location.replace('../admin/index.html');
        }
    });

}());