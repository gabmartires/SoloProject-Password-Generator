
let firstPassEl = document.getElementById("first-pass-el");
let secondPassEl = document.getElementById("second-pass-el");
let upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers ="0123456789";
let symbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
let upperChoice = document.getElementById("upper");
let lowerChoice = document.getElementById("lower");
let numberChoice = document.getElementById("number");
let symbolChoice = document.getElementById("symbol");
var password
var password2
var passlength
var passChoices

function message() {
    var chooseMssg = document.getElementById("selectmssg");
    chooseMssg.className = "show";
    setTimeout(function(){ chooseMssg.className = chooseMssg.className.replace("show", ""); }, 5000);
  }

  function copiedL() {
    var copiedMssg = document.getElementById("copy-pass1");
    copiedMssg.className = "show";
    setTimeout(function(){ copiedMssg.className = copiedMssg.className.replace("show", ""); }, 5000);
  }
  function copiedR() {
    var copiedMssg = document.getElementById("copy-pass1");
    copiedMssg.className = "show";
    setTimeout(function(){ copiedMssg.className = copiedMssg.className.replace("show", ""); }, 5000);
  }

function generate() {
    password = "";
    password2 = "";
    passChoices = "";
    passlength = 14;
    if (upperChoice.checked) {
        passChoices += upperCase;
    } if (lowerChoice.checked) {
        passChoices += lowerCase;
    } if (numberChoice.checked) {
        passChoices += numbers;
    } if (symbolChoice.checked) {
        passChoices += symbols;
    }    
    for (let i = 0; i < passlength; i++) {
        password += passChoices.charAt(Math.floor(Math.random() * passChoices.length));
        password2 += passChoices.charAt(Math.floor(Math.random() * passChoices.length));
    }
    if (password == "") {        
        message()
    } else {
        firstPassEl.textContent = password;
        secondPassEl.textContent = password2;
    }    
}

document.addEventListener('DOMContentLoaded',function(){
    let copyButtonL = document.getElementById('copy');  
      copyButtonL.addEventListener('click', function () {
           navigator.clipboard
              .writeText(document.getElementById('first-pass-el').innerText)
              .then(
                  success => copiedL(), err => console.log("error copying left password")
              );
                
        });
  });

  document.addEventListener('DOMContentLoaded',function(){
    let copyButtonR = document.getElementById('copy2');  
      copyButtonR.addEventListener('click', function () {
           navigator.clipboard
              .writeText(document.getElementById('second-pass-el').innerText)
              .then(
                  success => copiedR(), err => console.log("error copying right password")
              );
                
        });
  });
 