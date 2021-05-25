function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords Match";
            message.style.backgroundColor = "#3ae374";
        } else {
            message.textContent = "Passwords don't Match";
            message.style.backgroundColor = "#ff4d4d";
        }
    } else {
        alert("Password can't be empty!");
        message.textContent = "";
    }
}