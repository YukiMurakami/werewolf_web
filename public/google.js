var AuthUI = {
  init: function(){
    AuthUI.provider = new firebase.auth.GoogleAuthProvider();
    AuthUI.elAuthBtn = document.querySelector('.authBtn');
    AuthUI.elUserId = document.querySelector('.userId');
    AuthUI.draw();
    AuthUI.elAuthBtn.addEventListener('click', function(){
      AuthUI.doAuth();
    });
    firebase.auth().getRedirectResult().then(function(result) {
      AuthUI.elAuthBtn.disabled = false;
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }
      if(result.user){
        AuthUI.data.authed = true;
        AuthUI.data.userId = result.user.email;
        AuthUI.draw();
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
  data: {
    authed: false,
    userId: '',
    info: ''
  },
  draw: function(){
    AuthUI.elAuthBtn.textContent = AuthUI.data.authed ? 'LOGOUT' : 'LOGIN';
    AuthUI.elUserId.textContent = AuthUI.data.userId;
  },
  doAuth: function(){
    if(AuthUI.data.authed){
      firebase.auth().signOut().then(function() {
        AuthUI.data.authed = false;
        AuthUI.data.userId = '';
        AuthUI.draw();
      }, function(error) {
        // An error happened.
      });
    }
    else {
      firebase.auth().signInWithRedirect(AuthUI.provider);
    }
  }
};
AuthUI.init();
