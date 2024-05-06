const carusel = document.querySelector(".wrapper_content .corusel");
const firstImg = carusel.querySelectorAll("img")[0]
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff; 

const showHideIcons = () => {
    let scrollWidth = carusel.scrollWidth - carusel.clientWidth;
    arrowIcons[0].style.display = carusel.scrollLeft == 0 ? "none" : "block"
    arrowIcons[1].style.display = carusel.scrollLeft == scrollWidth ? "none" : "block"
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 20;
        carusel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
})

const autoSlide = () => {
    if(carusel.scrollLeft == (carusel.scrollWidth - carusel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 20;
    let valDifference = firstImgWidth - positionDiff;
    
    if(carusel.scrollLeft > prevScrollLeft) {
        return carusel.scrollLeft += positionDiff > firstImgWidth / 3? valDifference : -positionDiff;
    }
    carusel.scrollLeft -= positionDiff > firstImgWidth / 3? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carusel.scrollLeft
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault()
    isDragging = true
    carusel.classList.add("dragging");
    positionDiff = (e.pageX || e.touched[0].pageX)- prevPageX;
    carusel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons()
} 

const dragStop = () => {
    isDragStart = false;
    carusel.classList.remove("dragging")
    if(!isDragging) return;
    isDragging = false
    autoSlide();
}


carusel.addEventListener("mousedown", dragStart);
carusel.addEventListener("touchstart", dragStart);

carusel.addEventListener("mousemove", dragging);
carusel.addEventListener("touchmove", dragging);

carusel.addEventListener("mouseup", dragStop);
carusel.addEventListener("mouseleave", dragStop);
carusel.addEventListener("touched", dragStop);

