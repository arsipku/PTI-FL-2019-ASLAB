var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("notif_username").innerHTML = "";
    document.getElementById("notif_password").innerHTML = "";

    if (username == "uts_pti2019" && password == "pti2019") {
        alert("Login successfully");
        window.location.assign("home.html");
    } else if (username == "" || password == "") {
        if (username == "" && password != "") {
            document.getElementById("notif_username").innerHTML = "Username harus diisi!";
        } else if (password == "" && username != "") {
            document.getElementById("notif_password").innerHTML = "Password harus diisi!";
        } else {
            document.getElementById("notif_username").innerHTML = "Username harus diisi!";
            document.getElementById("notif_password").innerHTML = "Password harus diisi!";
        }
    } else {
        attempt--;
        alert("You have left " + attempt + "attempt");

        if (attempt <= 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("notif_username").innerHTML = "Form blocked!";
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
    }
}

function welcome() {
    document.getElementById("notif_username").innerHTML = "";
    document.getElementById("notif_password").innerHTML = "";
    alert("Welcome Yehezkiel Gunawan - 00000014458");
}