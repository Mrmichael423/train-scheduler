var firebaseConfig = {
    apiKey: "AIzaSyCZVWWwRK2HkVYKgxqZZdBkd_GjoSs60KQ",
    authDomain: "test-205be.firebaseapp.com",
    databaseURL: "https://test-205be.firebaseio.com",
    projectId: "test-205be",
    storageBucket: "",
    messagingSenderId: "972936746025",
    appId: "1:972936746025:web:9e399b5f5b354f2d59b838"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()

  $("#add-user").on("click", function(event) {
    event.preventDefault();
  
    database.ref().push({
        name: $("#name").val().trim(),
        destination: $("#destination").val().trim(),
        frequency: $("#frequency").val().trim(),
    })
})
  
  database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val().name)
      console.log(snapshot.val().destination)
      console.log(snapshot.val().frequency)
    $("#info").append(`<tr><td>${snapshot.val().name}<td>${snapshot.val().destination}<td>${snapshot.val().frequency}<td>`)
    console.log()

  })
  // console.log(moment().format("")).diff()