'use strict'

// Slides in Header
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


// Place in City. Tabs
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();


  // Form Validation
function formValidation() {

  let email = document.getElementById('txtEmail');
  let filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let emailErrorText = "Įvestike teisingą el. paštą";

  let phone = document.getElementById('phoneNum');
  let filterPhone = /^8\d{8}$/;
  let phoneErrorText = "Numeris turi prasidėti skaičiumi 8 ir turėti devynis skaičius"

  if (!filterEmail.test(email.value)) {
    document.getElementById("errorMessage").innerHTML = emailErrorText;
    email.focus;
    return false;
  }

  if (!filterPhone.test(phone.value)) {
    document.getElementById("errorMessage").innerHTML = phoneErrorText;
    phone.focus();
    return false;
  }
}