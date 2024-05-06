document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("form")

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginText = document.getElementById('login_text').value;
        const loginPassword = document.getElementById('login_password').value;

        const loginUser = {
            loginText: loginText,
            loginPassword: loginPassword,
        };

        let login_users = JSON.parse(localStorage.getItem('login_users')) || [];

        login_users.push(loginUser);

        localStorage.setItem('login_users', JSON.stringify(login_users));

        })
} )