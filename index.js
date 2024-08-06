// ==============================Header======================================//
var header = document.querySelector("#header");
var navLink = document.querySelector(".navLink");
var upArrow = document.querySelector("#upArrow");
var sticky = header.offsetTop;

// Sticky header//
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    upArrow.style.display = "block";
  } 
  else {
    header.classList.remove("sticky");
    upArrow.style.display = "none";
  }
}

// =========Toggle Menu============//
var  navBar = document.querySelector("#navBar ul");
var Bar =  document.querySelector("#Bar");
var cancleBar =  document.querySelector("#cancleBar");
Bar.addEventListener("click", ()=>{
  navBar.style.display="block";
  Bar.style.display="none";
});

cancleBar.addEventListener("click", ()=>{
  navBar.style.display="none";
  Bar.style.display="block";
});


// ===========smooth Scrolling JQuery============//
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});