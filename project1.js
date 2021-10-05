
//arrow control
function next(n) {
  display(index += n);
}

//image control
function current(n) {
  display(index = n);
}

function display(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  
  //hide all slides 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    
  //display the current slide and highlight the dot
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}
