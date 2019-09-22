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
        time: parseInt($("#trainTime").val().trim()),
    })
})
  
  database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val().name)
      console.log(snapshot.val().destination)
      console.log(snapshot.val().frequency)
      console.log(snapshot.val().time)
      var nextArr;
      var minAway;
      var newTrain = moment(snapshot.val().time, "hh:mm").subtract(1, "years");
      var diffTime = moment().diff(moment(newTrain), "minutes");
      var remainder = diffTime % snapshot.val().frequency;
      var minAway = snapshot.val().frequency - remainder;
      var nextTrain = moment().add(minAway, "minutes");
      nextTrain = moment(nextTrain).format("hh:mm");
    $("#info").append(`<tr><td>${snapshot.val().name}<td>${snapshot.val().destination}<td>${snapshot.val().frequency}<td>${nextTrain}<td>${minAway}`)
    console.log()

  })
  