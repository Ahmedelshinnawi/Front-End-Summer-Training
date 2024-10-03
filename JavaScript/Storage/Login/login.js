
const usernameInput = document.getElementById("username");
const loginForm = document.getElementById("login");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("focus", function () {
    loginForm.style.backgroundColor = "transparent";
});

usernameInput.addEventListener("blur", function () {
    loginForm.style.backgroundColor = " rgba(34, 34, 34, 0.21)";
});

passwordInput.addEventListener("focus", function () {
    loginForm.style.backgroundColor = "transparent";
});
passwordInput.addEventListener("blur", function () {
    loginForm.style.backgroundColor = " rgba(34, 34, 34, 0.21)";
});

document.getElementById('login').addEventListener('submit',function (event){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    event.preventDefault()
    if(username && password){
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        window.location.href = "Home.html"
    }
    else{
        alert('Please enter a valid username and password')
    }
})