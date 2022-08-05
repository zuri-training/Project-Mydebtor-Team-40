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