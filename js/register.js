const register = document.querySelector("#register_wrapper")
const login_page = document.querySelector(".login_wrapper")
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register_form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        const firstName = document.getElementById('name').value;
        const lastName = document.getElementById('text').value;
        const email = document.getElementById('register_email').value;
        const password = document.getElementById('register_password').value;


        // Create user object
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
    });
});


// register
document.querySelector('.profiles #profile_content ').addEventListener('click', e => {
    if (e.target.closest(".profil_text")) {
        register.style.display = 'flex';
        document.querySelector('.profiles').style.display = "none"
    }
})

document.body.addEventListener('click', e => {
    if (e.target.closest('.fa-x')) {
        register.style.display = 'none';
    }
})

// login_page

document.querySelector('.profiles #profile_content ').addEventListener('click', e => {
    if (e.target.closest(".prof_text")) {
        login_page.style.display = 'flex';
        document.querySelector('.profiles').style.display = "none"
        
    }
})

document.body.addEventListener('click', e => {
    if (e.target.closest('.fa-x')) {
        document.querySelector('.profiles').style.display = "none"
    }
})



// my profile
const my_profile = document.querySelector(".profile_menu")

document.querySelector('.login .log_content ').addEventListener('click', e => {
    if (e.target.closest(".profil_text")) {
        my_profile.style.display = 'flex';
        document.querySelector('.login').style.display = "none"
    }
})

document.body.addEventListener('click', e => {
    if (e.target.closest('.fa-x')) {
        my_profile.style.display = 'none';
    }
})

document.body.addEventListener('click', e => {
    if (e.target.closest('.fa-x')) {
        login_page.style.display = 'none';
    }
})