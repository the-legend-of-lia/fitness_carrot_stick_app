
      // Your web app's Firebase configuration
      var firebaseConfig = {
            apiKey: "AIzaSyBMAjlrJCjjge1tl0YCxsvqbd_OA3zn4-M",
            authDomain: "fitness-shaming.firebaseapp.com",
            databaseURL: "https://fitness-shaming.firebaseio.com",
            projectId: "fitness-shaming",
            storageBucket: "fitness-shaming.appspot.com",
            messagingSenderId: "428077258061",
            appId: "1:428077258061:web:da7acda7a49b2aa1505304",
            measurementId: "G-VMTWL11VGB"
          };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
const database = firebase.database();

function updateDays() {
  var numDays = document.getElementById("number-days");
  var confirmation = document.getElementById("confirmation");
  console.log(numDays.value);

  database.ref("/").set({
    numDays: numDays.value 
  }, function(error) {
   console.log(error);
  });

  confirmation.innerHTML = "Great! If you don't exercise in " + numDays.value + ", we will post on your Twitter feed!";
  numDays.value = "";
}

function getNumDays() {
  database.ref("/numDays").on("value", function(snapshot) {
    var result = snapshot.val();
    console.log(result);
  });
}
