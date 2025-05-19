var slideshow 

function slideshow(n) {
    var i; 
    var slides = document.getElementById("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
     
    if (n > slide.length){
        slideIndex=1;
    }

    slide[slideIndex-1].style.display = "block";



}

showSlides(1);


function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);

}

setInterval(plusSlides, 3000, 1);