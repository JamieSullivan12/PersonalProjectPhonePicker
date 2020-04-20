/* Open when someone clicks on the span element */
function openNav() {
  if(document.getElementById("myNav").style.width == '50%'){
    document.getElementById("myNav").style.width = "0%";
  }
  else{
    document.getElementById("myNav").style.width = "50%";
  }


}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function responsiveFunction() {
  var x = document.getElementById('myNavBar');
  if (x.className == "navbar") {
    x.className += " responsive";
  }
  else {
    c.className = "topnav";
  }
}
function myFunction(x) {
  x.classList.toggle("change");
}
