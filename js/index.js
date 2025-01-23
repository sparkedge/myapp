var login_btn = document.getElementById("login_link");
var signup_btn = document.getElementById("signup_link");
var login_box = document.getElementById("login");
var signup_box = document.getElementById("signup");

login_btn.onclick = function()
{
    login.style.display = "block";
    signup.style.display = "none";
}

signup_btn.onclick = function()
{
    login.style.display = "none";
    signup.style.display = "block";
}