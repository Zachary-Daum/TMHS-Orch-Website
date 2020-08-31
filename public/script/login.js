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

    const txtEmail = document.getElementById('email_input');
    const txtPassword = document.getElementById('pword_input');
    const btnLogin = document.getElementById('login_btn');

    //login event
    btnLogin.addEventListener('click', e=> {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            window.location.replace('../admin/console.html');
        }
        else {
            console.log('not logged in');
        }
    });

}());