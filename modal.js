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
const btnSubmit = document.querySelector('.btn-submit')
const formData = document.querySelectorAll(".formData");
const form = document.getElementsByTagName('form')[0];
const first = document.getElementById("first");
const last = document.getElementById("last");
const champEmail = document.getElementById('email');
const champBirthdate = document.getElementById('birthdate')
const champQuantity = document.getElementById('quantity')
const errorFirst = document.querySelector('.error_first')
const errorLast = document.querySelector('.error_last')
const errorEmail = document.querySelector('.error_email')
const errorDate = document.querySelector('.error_date')
const errorQuantity = document.querySelector('.error_quantity')
const div = document.createElement('div')
const close = document.querySelector('.close');
// Test VALEUR
console.log(form[2]);
// launch modal event
// Fait apparaître le formulaire au click sur tout les *btn*
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
// Fait passer le modalBg --> .bground en display block
function launchModal() {
  modalbg.style.display = "block";
}
// Close the BGround 
close.addEventListener('click', () => {
  console.log('close');
  // alert('Etes vous sur') /**Message teste */
  modalbg.style.display = "none"
})
//            **************** Début formulaire Validation ****************
// Modèle de configuration message d'erreur pour first
first.addEventListener('input', () => {
  first.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity()
  // Verification de la validité du champ chaque fois sa valeur est modifié si valaur invalid
})
function form5() {
  // Evenement de first invalid + Message d'erreur --> Ajout et suppression de classe
  first.addEventListener('invalid', () => {
    if(!first.value){
    first.classList.remove("modal-shadow-valid")
    console.log("champ first vide");
    // first.setCustomValidity("Veuillez rentrer un Prénom d'utilisateur !")
    errorFirst.innerHTML = "Veuillez entrer un Prénom d'utilisateur !"
    errorFirst.classList.add("ajoutError")
    first.classList.add("modal-shadow-invalid")
  } else {
    console.log('Champ first mauvais format');
    first.classList.remove( "modal-shadow-valid")
    errorFirst.innerHTML = "Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules"
    // first.setCustomValidity(" Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules ! ")
    errorFirst.classList.add("ajoutError")
    first.classList.add('modal-shadow-invalid')
  } 
})
//Model de configuration message d'erreur pour Last
last.addEventListener('invalid', () => {
  last.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity() 
})
// Event invalid de last + Message d'erreur --> Ajout et suppression de classe
last.addEventListener('invalid', () => {
  if(last.value === '') {
    console.log("Champ last vide");
    last.classList.remove('modal-shadow-valid')
    errorLast.innerHTML = "Veuillez entrer un Nom d'utilisateur !"
    errorLast.classList.add('ajoutError')
    last.classList.add('modal-shadow-invalid')
  } else {
    console.log('Champ last mauvais format');
    last.classList.remove('modal-shadow-valid')
    errorLast.innerHTML = "Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules !"
    errorLast.classList.add('ajoutError')
    last.classList.add("modal-shadow-invalid")
  } 
})
//Evenement de first Validation --> Ajout et suppression de classe
first.addEventListener('input', () => {
  if(first.validity.valid) {
    console.log('Good validaton champ First');
    errorFirst.innerHTML = ""
    first.classList.remove('modal-shadow-invalid')
    first.classList.add('modal-shadow-valid')
  }
})
//Evenement de last Validation --> Ajout et suppression de classe
last.addEventListener('input', () => {
  if(last.validity.valid) {
    console.log('good validaton champ Last');
    errorLast.innerHTML = ""
    last.classList.remove('modal-shadow-invalid')
    last.classList.add('modal-shadow-valid')
  }
})
//Evenement de ChampEmail Validation --> Ajout et suppression de classe
champEmail.addEventListener('input',() => {
  if(champEmail.validity.valid){
    console.log("Good validation champ Email");
    champEmail.classList.remove('modal-shadow-invalid')
    champEmail.classList.add('modal-shadow-valid')
    errorEmail.innerHTML = ""
  } else {
    console.log("Email incorrecte");
    champEmail.classList.remove('modal-shadow-valid')
    champEmail.classList.add('modal-shadow-invalid')
    errorEmail.innerHTML = "Champ Email incorrecte"
    errorEmail.classList.add('ajoutError')
  }
})
//Evenement de ChampDate Validation --> Ajout et suppression de classe
champBirthdate.addEventListener('input', () => {
  if (champBirthdate.validity.valid) {
    console.log("Good Date");
    errorDate.innerHTML = ""
    champBirthdate.classList.remove('modal-shadow-invalid')
    champBirthdate.classList.add('modal-shadow-valid')
  } else {
    console.log("Bad Date");
    console.log('Bad date');
    errorDate.innerHTML = " Date non communiquer ou non correct !! ";
    champBirthdate.classList.remove('modal-shadow-valid')
    champBirthdate.classList.add('modal-shadow-invalid')
    errorDate.classList.add('ajoutError')
  }
})
//Evenement de ChampQuantity Validation --> Ajout et suppression de classe
champQuantity.addEventListener('invalid', () => {
  if (champQuantity.value === '') {
    console.log('NO quantity');
    errorQuantity.innerHTML = " Aucune donnée entrée ! "
    champQuantity.classList.remove('modal-shadow-valid')
    champQuantity.classList.add('modal-shadow-invalid')
    errorQuantity.classList.add('ajoutError')
  } else {
    console.log('Quantity OK');
    errorQuantity.innerHTML = ""
    champQuantity.classList.remove('modal-shadow-invalid')
    champQuantity.classList.add('modal-shadow-valid')
  }
});
champQuantity.addEventListener('input', () => {
  if( champQuantity.validity.valid) {
    console.log("Quantity Ok");
    errorQuantity.innerHTML = ""
    champQuantity.classList.remove('modal-shadow-invalid')
    champQuantity.classList.add('modal-shadow-valid')
  }
})
}
//Evenement au click du bouton envoyer
btnSubmit.addEventListener('click', form5)
// Message de Validation du formulaire
form.addEventListener('submit', (e) => {
  if (!form) {
    e.preventDefault()
    console.log('form pas bon');
    alert("Formulaire OK ")
  } else {
    console.log("form bon");
    alert('Formulaire Envoyé')
  }
})