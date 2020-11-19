const showing_class = "show";
const firstSlide = document.querySelector(".slider_item:first-child");

const moveSlider = () =>{
    const currentSlide = document.querySelector(`.${showing_class}`);
    if(currentSlide){
        currentSlide.classList.remove(showing_class);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(showing_class);
        }else{
            firstSlide.classList.add(showing_class);
        }
    }else{
        firstSlide.classList.add(showing_class);
    }
};
setInterval(moveSlider,2000);

const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");

const openModal = () =>{
    modal.classList.remove("hidden");
}
const closeModal = () =>{
    modal.classList.add("hidden");
}

openBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);