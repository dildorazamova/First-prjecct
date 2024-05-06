document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".menu_open"),
          menu = document.querySelector(".header_menu");

    btn.addEventListener("click", e => {
        menu.classList.toggle("menu_actives");
        btn.classList.toggle("menu_close");
    })

    const links = document.querySelectorAll('.header_menu a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const selector = link.getAttribute('href');
            document.querySelector(selector).scrollIntoView({
                behavior: "smooth"
            })
        })
    })

});