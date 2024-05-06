const first_summ = [
    {id : 1, name: "Cold Brew Coffee", summ: 3},
    {id : 2, name: "French Press Pot", summ: 5},
    {id : 3, name: "Espresso", summ: 2},
    {id : 4, name: "Cappuccino", summ: 4},
    {id : 5, name: "Hot tea", summ: 2},
    {id : 6, name: "Cold tea", summ: 2},
]

const second_summ = [
    {id : 1, name: "Forest Gateau", summ: 16},
    {id : 2, name: "Blue Moon", summ: 16},
    {id : 3, name: "Truffle Cake", summ: 15},
    {id : 4, name: "Chocolate Cake", summ: 18},
    {id : 5, name: "Poet’s Dream Cake", summ: 16},
    {id : 6, name: "Pineapple Cake", summ: 14},
]

let first_draw = ``
first_summ.map(item => {
    first_draw += `
        <h3 class="price_name">${item.name}</h3>
        <div class="price_drop"></div>
        <p class="price_summ">${"$"+ item.summ}</p>
    `
})
document.getElementById('item_price').innerHTML = first_draw


let second_draw= ``
second_summ.map(item => {
    second_draw += `
        <h3 class="price_name">${item.name}</h3>
        <div class="price_drop"></div>
        <p class="price_summ">${"$"+ item.summ}</p>
    `
})
document.getElementById('item_prices').innerHTML = second_draw

document.body.addEventListener('click', e => {
    if (!e.target.closest('.user_menu')) {
        profile.style.display = 'none';
        loginWrapper.style.display = "none"
    }
})
const profile = document.querySelector(".profiles")
const menu = document.querySelector('.user_menu');
const loginWrapper = document.querySelector('.login');
menu.addEventListener('click', e => {
    // const icon = e.target.closest('.fa-user');
    if (e.target.closest('.fa-user')) {
        if (JSON.parse(localStorage.getItem('userData'))) {
            loginWrapper.style.display = 'flex';
        } else {
            profile.style.display = 'flex';
        }
    }
    
})
