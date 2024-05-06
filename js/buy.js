document.addEventListener("DOMContentLoaded", function(){
    const buyForm = document.getElementById("modal_form")

    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let number = document.getElementById("number").value
        let bank = document.getElementById("bank").value
        let code = document.getElementById("code").value
        let cvc = document.getElementById("cvc").value
        let cardholder = document.getElementById("cardholder").value
        let password = document.getElementById("password").value
        let town = document.getElementById("town").value

        const buyUser = {
            number: number,
            bank: bank,
            code: code,
            cvc: cvc,
            cardholder: cardholder,
            password: password,
            town: town,
        };

        let buy_users = JSON.parse(localStorage.getItem('buy_users')) || [];

        buy_users.push(buyUser);

        localStorage.setItem('buy_users', JSON.stringify(buy_users));

        })
} )