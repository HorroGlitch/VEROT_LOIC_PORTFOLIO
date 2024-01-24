import './style.css'
let name = document.querySelector("#name");
let email = document.querySelector("#email");

let nameValue = name.input;
let emailValue = email.value;

console.log(nameValue)
function validForm(name, email) {
  console.log(name)
  nameValue.addEventListener("change", ()=>{
   
    console.log("le champ name est valide");

  })
  email.addEventListener("change", ()=>{
    if (mail) {
      
    }
  })
}
validForm(nameValue, emailValue)
// nameValue.addEventListener("change", ()=>{
//   console.log(nameValue)
// })
