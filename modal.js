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
const form = document.getElementsByTagName('form')[0];
const checkbox2Condition = document.getElementById('checkbox2');
const first = document.getElementById("first");
const last = document.getElementById("last");
const champEmail = document.getElementById('email');
const errorFirst = document.querySelector('.error_first')
const errorLast = document.querySelector('.error_last')
const errorEmail = document.querySelector('.error_email')
const div = document.createElement('div')
const close = document.querySelector('.close');

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
  alert('Etes vous sur')
  modalbg.style.display = "none"
})
//            **************** Début formulaire Validation ****************
// Modèle de configuration message d'erreur pour first
first.addEventListener('input', () => {
  first.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity()
  // Verification de la validité du champ chaque fois sa valeur est modifié si valaur invalid
})

form.addEventListener('click', () => {
  // Evenement de first invalid + Message d'erreur --> Ajout et suppression de classe
  first.addEventListener('invalid', () => {
    if(first.value === ''){
    first.classList.remove("modal-shadow-valid")
    console.log("champ first vide");
    // first.setCustomValidity("Veuillez rentrer un Prénom d'utilisateur !")
    errorFirst.innerHTML = "Veuillez rentrer un Prénom d'utilisateur !"
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
  console.log(first.value);
  last.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity() 
})
// Event invalid de last + Message d'erreur --> Ajout et suppression de classe
last.addEventListener('invalid', () => {
  if(last.value === '') {
    console.log("Champ last vide");
    last.classList.remove('modal-shadow-valid')
    // last.setCustomValidity("Veuillez rentrer un Nom d'utilisateur !")
    errorLast.innerHTML = "Veuillez rentrer un Nom d'utilisateur !"
    errorLast.classList.add('ajoutError')
    last.classList.add('modal-shadow-invalid')
  } else {
    console.log('champ last mauvais format');
    last.classList.remove('modal-shadow-valid')
    errorLast.innerHTML = "Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules !"
    // last.setCustomValidity(" Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules ! ")
    errorLast.classList.add('ajoutError')
    last.classList.add("modal-shadow-invalid")
  
  } 
})
//Evenement de first Validation --> Ajout et suppression de classe
first.addEventListener('validation', () => {
  if(first.validity.valid) {
    console.log('good validaton');
    errorFirst.innerHTML = ""
    first.classList.remove('modal-shadow-invalid')
    first.classList.add('modal-shadow-valid')
  }
})
//Evenement de last Validation --> Ajout et suppression de classe
last.addEventListener('valid', () => {
  if(last.validity.valid) {
    console.log('good validaton');
    errorLast.innerHTML = ""
    last.classList.remove('modal-shadow-invalid')
    last.classList.add('modal-shadow-valid')
  }
})
//Evenement de ChampEmail Validation --> Ajout et suppression de classe
champEmail.addEventListener('invalid',() => {
  if(champEmail.validity.valid){
    champEmail.classList.remove('modal-shadow-invalid')
    champEmail.classList.add('modal-shadow-valid')
    errorEmail.innerHTML = ""
  } else {
    champEmail.classList.remove('modal-shadow-valid')
    champEmail.classList.add('modal-shadow-invalid')
    errorEmail.innerHTML = "Champ Email incorecte"
    errorEmail.classList.add('ajoutError')
  }
})

// Checkboc condition à voir

checkbox2Condition.addEventListener('click', () =>{
  checkbox2Condition.setCustomValidity('')
  checkbox2Condition.checkValidity()
})
checkbox2Condition.addEventListener('invalid', () => {
  console.log(checkbox2Condition.value);
  
  if( checkbox2Condition == "off") {
    checkbox2Condition.setCustomValidity("Veuillez cocher la case de condition obligatoir svp")
  }else {
    console.log("Condition d'utilisation OK");
  }
})
})
// Message de Validation du formulaire
bground.addEventListener('submit', () => {
  if(form.validity.valid){
    console.log('form OK');
    alert("Formulaire OK ")
  } else {
    console.log("form NOK");
    alert('Formulaire NOK')
  }
})
    