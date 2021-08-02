function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close')
const firstPrenom = document.getElementById("first")
console.log(firstPrenom);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close the BGround 
close.addEventListener('click', () => {
  console.log('yes');
  modalbg.style.display = "none"
  // alert('Êtes vous sur de vouloir quitter')
})

// Message d'erreur
firstPrenom.addEventListener('keyup', (e) =>{
  if (firstPrenom.validity.typeMismatch) {
    firstPrenom.setCustomValidity(" N'est pas valide")
  } else {
    firstPrenom.setCustomValidity('')
  }
})
