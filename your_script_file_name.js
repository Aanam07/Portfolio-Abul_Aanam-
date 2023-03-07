// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
const toggleButton = document.getElementById('dark-mode-toggle');
const darkModeStylesheet = document.querySelector('link[href="dark-mode.css"]');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var button = document.querySelector(".dark-mode-toggle");
  if (element.classList.contains("dark-mode")) {
    button.innerHTML = "Click for Light Mode 💡";
  } else {
    button.innerHTML = "Click for Dark Mode 🌙" ;
  }
}

