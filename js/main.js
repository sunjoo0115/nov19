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