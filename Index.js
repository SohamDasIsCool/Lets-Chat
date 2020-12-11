function addUser() {
    user_name=document.getElementById("user_name1").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html";
}