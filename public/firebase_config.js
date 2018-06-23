var config = {
  apiKey: "AIzaSyBBFuLuDHdUWI-1yb76N9o8I7V5NSuAHZU",
  authDomain: "werewolf-c8340.firebaseapp.com",
  databaseURL: "https://werewolf-c8340.firebaseio.com",
  projectId: "werewolf-c8340",
  storageBucket: "werewolf-c8340.appspot.com",
  messagingSenderId: "531371010019"
};
firebase.initializeApp(config);
  // Firebase認証機能はこの値を通して利用します。
const auth = firebase.auth()