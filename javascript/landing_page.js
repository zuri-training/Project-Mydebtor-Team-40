//navigation active
// Get the container element
var link_container = document.getElementById("nav_links");

// Get all links with class="btn" inside the container
var links = link_container.getElementsByClassName("link");

// Loop through the links and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    
    var current = document.getElementsByClassName("active");
    
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//navgation active 


// testimonial carousel 
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  if(window.screen.width <= 490){
    slides[slideIndex]?slides[slideIndex].style.display = "block":slides[0].style.display = "block";
  }
  else{
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex]?slides[slideIndex].style.display = "block":slides[0].style.display = "block"; 
  }

}
 
// testimonial carousel 

//frequently asked questions
var questions = document.getElementById('question');
var dropdown = questions.getElementsByClassName('dropdown');
var arrow_down = questions.getElementsByClassName('fa-angle-down')
var arrow_up = questions.getElementsByClassName('fa-angle-up');
var answers = questions.getElementsByClassName('answer')
console.log(dropdown,answers,arrow_up,arrow_down)

for(var i=0; i<dropdown.length;i++){
  // arrow up event listener 
  arrow_down[i].addEventListener("click",function(){
    var current=this.parentNode.parentNode.parentNode;
    var answer = current.getElementsByClassName('answer');
    var arrow_down = current.getElementsByClassName('fa-angle-down')
    var arrow_up = current.getElementsByClassName('fa-angle-up');
    arrow_up[0].style.display="block"
    arrow_down[0].style.display="none"
    answer[0].style.display="block"
  })
  // arrow down event listener 
  arrow_up[i].addEventListener("click",function(){
    var current=this.parentNode.parentNode.parentNode;
    var answer = current.getElementsByClassName('answer');
    var arrow_down = current.getElementsByClassName('fa-angle-down')
    var arrow_up = current.getElementsByClassName('fa-angle-up');
    arrow_up[0].style.display="none"
    arrow_down[0].style.display="block"
    answer[0].style.display="none"
  })

}
//frequently asked questions

console.log(window.screen.width);