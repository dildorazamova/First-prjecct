const checkCardBtn = document.querySelector(' .cards_content .first_item .item_cards .item_form ');

checkCardBtn.addEventListener("click", (e) => {
    if (e.target.closest(".item_btn")) {
        document.querySelector(".second-card").style.display = 'flex';
    }
})