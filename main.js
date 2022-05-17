function addUser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username)
    if (username == "") {
        document.getElementById("err").innerHTML = "WARNING! Enter your User name.";
    }
    else {
        window.location = "kwitter_room.html";
    }
}