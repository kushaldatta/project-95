function display() {
    username = localStorage.getItem("username");
    document.getElementById("msg").innerHTML = "Dear " + username + ", this page will be coming soon...";
}
