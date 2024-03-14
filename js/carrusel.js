const btnLeft = document.querySelector(".btn-left");
const btnRight= document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", _e=> moveToLeft());
btnRight.addEventListener("click", _e=> moveToRight());

setInterval(() => {
    moveToRight();
}, 3000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length; //cantidad de imagenes que tenemos

function moveToRight(){
    if(counter >= sliderSection.length-1){
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = `all ease .6s`
}

function moveToLeft(){
    counter--;
    if(counter<0 ){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = `all ease .6s`
    
}