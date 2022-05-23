var emailElement = document.getElementById("inputEmail");
var passElement = document.getElementById("inputPassword");

function login(){
    localStorage.setItem("user", emailElement.value);
    localStorage.setItem("password", passElement.value);
    document.location.href="../html/main.html";
    //window.location.assign("/path");

    //parent.location=pagina.html;/
    //window.location.href=pagina.html;
}

function singin(){
    document.location.href="../html/singin.html";
}