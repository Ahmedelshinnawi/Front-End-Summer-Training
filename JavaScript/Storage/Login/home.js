

const loggedIn = localStorage.getItem("isLoggedIn");

if(loggedIn){
    const username = localStorage.getItem("username");

    document.getElementById('info').textContent = `Hello ${username}`;
}

else{
    window.location.href = "index.html"
}

document.getElementById('logout').addEventListener('click', function (){

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    window.location.href = "index.html";
})