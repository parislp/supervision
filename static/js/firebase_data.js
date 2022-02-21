const firebaseConfig = {
  apiKey: "AIzaSyAQRhpdMPiD1Lk2hwS4XyzAApnF45tsIwU",
  authDomain: "suivieproduction40.firebaseapp.com",
  databaseURL: "https://suivieproduction40-default-rtdb.firebaseio.com",
  projectId: "suivieproduction40",
  storageBucket: "suivieproduction40.appspot.com",
  messagingSenderId: "1013387632325",
  appId: "1:1013387632325:web:8daf1bb72bc1d04d791aac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class FunctioningMode {
  static 0 = "Manual";
  static 1 = "Automatic";
  static 2 = "Downgraded";
  static 3 = "Step by step";
  static 4 = "Cycle by cycle";
  static 5 = "Init";

  constructor(name) {
    this.name = name;
  }
}

class FunctioningState {
  static 0 = "Stop";
  static 1 = "Pre running";
  static 2 = "Running";
  static 3 = "Stopping";

  constructor(name) {
    this.name = name;
  }
}

class DefaultState {
  static 0 = "No default";
  static 1 = "Major default";
  static 2 = "Minor default";
  static 3 = "Alarm";
  static 4 = "Critical default";

  constructor(name) {
    this.name = name
  }
}

var functioningModeValue = document.getElementById('functioningModeValue');
var functioningModeSignification = document.getElementById('functioningModeSignification');
var dbFunctioningMode = firebase.database().ref().child('Module1').child('States').child('0');
dbFunctioningMode.on('value', snap => functioningModeValue.innerText = snap.val());
dbFunctioningMode.on('value', snap => functioningModeSignification.innerText = FunctioningMode[snap.val()]);

var functioningStateValue = document.getElementById('functioningStateValue');
var functioningStateSignification = document.getElementById('functioningStateSignification');
var dbFunctioningState = firebase.database().ref().child('Module1').child('States').child('1');
dbFunctioningState.on('value', snap => functioningStateValue.innerText = snap.val());
dbFunctioningState.on('value', snap => functioningStateSignification.innerText = FunctioningState[snap.val()]);


var defaultStateValue = document.getElementById('defaultStateValue');
var defaultStateSignification = document.getElementById('defaultStateSignification');
var dbDefaultState = firebase.database().ref().child('Module1').child('States').child('2');
dbDefaultState.on('value', snap => defaultStateValue.innerText = snap.val());
dbDefaultState.on('value', snap => defaultStateSignification.innerText = DefaultState[snap.val()]);