/* Graphics.html sections */
document.addEventListener('DOMContentLoaded', function() {
  var graphicsLink = document.getElementById('graphics-link');
  var graphicsSections = document.getElementById('graphics-sections');

  graphicsLink.addEventListener('click', function(event) {
      event.preventDefault();
      graphicsSections.classList.toggle('hidden');
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
