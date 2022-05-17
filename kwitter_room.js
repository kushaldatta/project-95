function display() {
    username = localStorage.getItem("username");
    document.getElementById("name").innerHTML = "Welcome " + username + " ! ";
    getData();
}

//Firebase links:
const firebaseConfig = {
    apiKey: "AIzaSyBiInyIbWv8ZCh68Z47xwLsReu-azYW9IQ",
    authDomain: "project94-6a6c1.firebaseapp.com",
    databaseURL: "https://project94-6a6c1-default-rtdb.firebaseio.com",
    projectId: "project94-6a6c1",
    storageBucket: "project94-6a6c1.appspot.com",
    messagingSenderId: "206368666438",
    appId: "1:206368666438:web:76f239c832e5693954ab47"
  };

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    //window.location = "kwitter_message.html";
    getData();
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("roomnames").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;
            //console.log("Room Name - " + Room_names);
           row = "<div class='room_name' style='background-color:grey;height:20px;width:1000px;' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
            document.getElementById("roomnames").innerHTML += row;  
            //document.getElementById("roomnames").innerHTML = "#" + Room_names; 
         });
    });
}
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_message.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"; 
}