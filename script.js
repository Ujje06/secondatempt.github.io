function showMenu(){
    var b = document.getElementById('bar');
    var t = document.getElementById('times');
    var m = document.getElementById('mob-menu');
    b.style.display = 'none'
    t.style.display = 'block'
    m.style.display = 'block'

}

function closeMenu(){
    var b = document.getElementById('bar');
    var t = document.getElementById('times');
    var m = document.getElementById('mob-menu');
    b.style.display = 'block'
    t.style.display = 'none'
    m.style.display = 'none'
}


// carousel

let slidePosition = 0
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

// console.log(totalSlides);

document.
    getElementById('carousel_button--prev')
    .addEventListener("click", function(){
        // console.log('helloo==--------')
        moveToPrevSlide();
    })

    
document.
getElementById('carousel_button--next')
.addEventListener("click", function(){
    // console.log('helloo==--------')
    moveToNextSlide();
})

function updateSlidePosition(){
    for (let slide of slides){
        // console.log(slides);
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible')
}


function moveToNextSlide(){
    // console.log('hellow next slide')
    if (slidePosition == totalSlides -1){
        slidePosition = 0;
    }
    else {
        slidePosition++ ; 
    }
    updateSlidePosition()
}


function moveToPrevSlide(){
    // console.log('hello prev slide')
    if (slidePosition == 0){
        slidePosition = totalSlides -1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition()
}

