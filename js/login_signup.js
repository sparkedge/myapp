/*start signup form coding*/

var signup_frm = document.getElementById("signup_frm");

signup_frm.onclick = function()
{
    var user = btoa(document.getElementById("username").value);
    var email = btoa(document.getElementById("email").value);
    var phone = btoa(document.getElementById("phone").value);
    var pass = btoa(document.getElementById("password").value);

    var user_object_data = {username:user, email:email, phone:phone, password:pass};
    var user_text_data = JSON.stringify(user_object_data);

    if(user != "" && email != "" && phone != "" && pass != "")
    {
        localStorage.setItem(email,user_text_data);
        var signup_btn = document.getElementById("signup_btn");
        signup_btn.style.background = "#14b129";
        setTimeout(tan, 3000);
        function tan()
        {
            signup_btn.style.background = "linear-gradient(to right, #4A00E0, #8E2DE2)";
            signup_btn.innerHTML = "Sign up";
            signup_frm.reset()
        }
        signup_btn.innerHTML = "<i class='fa fa-check-circle'></i>&nbsp Signup Sucessfully!";
        return false;
    }
}

/*end signup form coding*/

/*start email validation form coding*/

var email_input = document.getElementById("email");

email_input.onchange = function()
{
    var email = btoa(document.getElementById("email").value);
    var warning = document.getElementById("email_notice");
    var signup_btn = document.getElementById("signup_btn");
    if(localStorage.getItem(email) != null)
    {
        warning.style.display = "block";
        email_input.style.borderBottomColor = "red";
        signup_btn.disabled = true;
        signup_btn.style.background = "#ccc";

        email_input.onclick = function()
        {
            email_input.value = "";
            email_input.style.borderBottomColor = "#ccc";
            warning.style.display = "none";
            sig9nup_btn.disabled = false;
            signup_btn.style.background = "linear-gradient(to right, #4A00E0, #8E2DE2)";
        }
    }
}

/*end email validation form coding*/

/*start login form coding*/

var login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_war = document.getElementById("login_email_warning");
    var login_password_war = document.getElementById("login_password_warning");

    if(localStorage.getItem(btoa(email.value)) == null)
    {
        login_email_war.style.display = "block";
        email.style.borderBottomColor = "red";

        email.onclick = function()
        {
            email.value = "";
            login_email_war.style.display = "none";
            email.style.borderBottomColor = "#ccc";
        }
    }
    else
    {
        var text_data = localStorage.getItem(btoa(email.value));
        var obj_data = JSON.parse(text_data);
        var correct_email = obj_data.email;
        var correct_password = obj_data.password;

        if(btoa(email.value) == correct_email)
        {
            if(btoa(password.value) == correct_password)
            {
                sessionStorage.setItem("user",btoa(email.value));
                window.location.replace("profile/profile.html")
            }
            else
            {
                login_password_war.style.display = "block";
                password.style.borderBottomColor = "red";

            password.onclick = function()
            {
                password.value = "";
                login_password_war.style.display = "none";
                password.style.borderBottomColor = "#ccc";
            }
                }
        }
        else
        {
            alert("your email id is not registered");
        }
    }
    return false;
}

/*end login form coding*/