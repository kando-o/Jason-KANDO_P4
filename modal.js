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
const checkbox2Condition = document.getElementById('checkbox2')
const first = document.getElementById("first")
const last = document.getElementById("last")
const champEmail = document.getElementById('email')
const close = document.querySelector('.close')

console.log();
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
  modalbg.style.display = "none"
})

            // Message d'erreur à voir

// formData.forEach((data) => {
  
//   data.addEventListener('input', (e) => {
//     data.setCustomValidity('');
//     data.checkValidity()
//   }) 
//   data.addEventListener('invalid', (e) => {
//     console.log(e.data.value);
//     if(data.value === '') {
//       data.setCustomValidity('Entre qlq chose')
//     } else {
//       data.setCustomValidity("Le format n'est pas bon")
//     }
//   }) 
// })
//            **************** Début formulaire Validation ****************

// Configuration message d'erreur pour first
first.addEventListener('input', (e) => {
  console.log(first.value);
  first.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity()
  // Verification de la validité du champ chaque fois sa valeur est modifié si valaur invalid
})
// Evenement de first invalid + Message d'erreur --> Ajout et suppression de classe
first.addEventListener('invalid', () => {
  if(first.value === ''){
    first.classList.remove("modal-shadow-valid")
    console.log("champ first vide");
    first.setCustomValidity("Veuillez rentrer un Prénom d'utilisateur !")
    first.classList.add("modal-shadow-invalid")
  } else {
    console.log('Champ first mauvais format');
    first.classList.remove( "modal-shadow-valid")
    first.setCustomValidity(" Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules ! ")
    first.classList.add('modal-shadow-invalid')
  } 
})
// Configuration message d'erreur pour Last
last.addEventListener('input', (e) => {
  console.log(first.value);
  last.setCustomValidity('') /*Paramettre de la fonction setcustom actif à vide*/ 
  first.checkValidity() 
})
// Event invalid de last + Message d'erreur --> Ajout et suppression de classe
last.addEventListener('invalid', () => {
  if(last.value === '') {
    console.log("Champ last vide");
    last.classList.remove('modal-shadow-valid')
    last.setCustomValidity("Veuillez rentrer un Nom d'utilisateur !")
    last.classList.add('modal-shadow-invalid')
  } else {
    console.log('champ last mauvais format');
    last.classList.remove('modal-shadow-valid')
    last.setCustomValidity(" Le format entré ici n'est pas bon veuillez ne mettre min 2 lettres et seuleument que des lettres miniscules et majuscules ! ")
    last.classList.add("modal-shadow-invalid")
  } 
})
//Evenement de first Validation --> Ajout et suppression de classe
first.addEventListener('input', () => {
  if(first.validity.valid)
  console.log('good validaton');
  first.classList.remove('modal-shadow-invalid')
  first.classList.add('modal-shadow-valid')
})
//Evenement de last Validation --> Ajout et suppression de classe
last.addEventListener('input', () => {
  if(last.validity.valid)
  console.log('good validaton');
  last.classList.remove('modal-shadow-invalid')
  last.classList.add('modal-shadow-valid')
})
//Evenement de ChampEmail Validation --> Ajout et suppression de classe
champEmail.addEventListener('input',() => {
  if(champEmail.validity.valid){
    champEmail.classList.remove('modal-shadow-invalid')
    champEmail.classList.add('modal-shadow-valid')
  } else {
    champEmail.classList.remove('modal-shadow-valid')
    champEmail.classList.add('modal-shadow-invalid')
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