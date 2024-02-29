const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
let firstPassEl = document.getElementById("first-pass-el") 
let secondPassEl = document.getElementById("second-pass-el")
let generateBtn = document.getElementById("generate-btn")
let upperEl = document.getElementById("upper");
let lowerEl = document.getElementById("lower");  
let numberEl = document.getElementById("number");
let symbolEl = document.getElementById("symbol");
let passOne = ""
let passTwo = ""
const passlenght = 15

generateBtn.addEventListener("click", function() {
        generate()    
    }) 
//FYI: I used conditionals because, I was able to push values into an array but I was not able to removed them on uncheck checkbox. I also tried objects with no luck, the values pushed into the array had brackets or it wouldn't recognize every charater set as sigle value and not each individual characters.
function generate() { 
    let choices = ""       
//Possible combinations based on checkboxes selected
    if (upperEl.checked == true && lowerEl.checked == true && numberEl.checked == true && symbolEl.checked == true){
        choices += uppercase + lowercase + numbers + symbols
    } else if (upperEl.checked == true && lowerEl.checked == false && numberEl.checked == false && symbolEl.checked == false){
        choices += uppercase 
    } else if (upperEl.checked == false && lowerEl.checked == true && numberEl.checked == false && symbolEl.checked == false){
        choices += lowercase
    }   else if (upperEl.checked == false && lowerEl.checked == false && numberEl.checked == true && symbolEl.checked == false){
        choices += numbers
    }   else if (upperEl.checked == false && lowerEl.checked == false && numberEl.checked == false && symbolEl.checked == true){
        choices += symbols   
    }   else if (upperEl.checked == true && lowerEl.checked == true && numberEl.checked == false && symbolEl.checked == false ){
        choices += uppercase + lowercase 
    }   else if (upperEl.checked == true && lowerEl.checked == true && numberEl.checked == true && symbolEl.checked == false ){
        choices += uppercase + lowercase + numbers
    }   else if (upperEl.checked == false && lowerEl.checked == false && numberEl.checked == true && symbolEl.checked == true ){
        choices += symbols + numbers
    }   else if (upperEl.checked == false && lowerEl.checked == true && numberEl.checked == true && symbolEl.checked == true ){
        choices += lower + symbols + numbers
    }   else if (upperEl.checked == true && lowerEl.checked == false && numberEl.checked == false && symbolEl.checked == true ){
        choices += uppercase + symbols
    }   else if (upperEl.checked == false && lowerEl.checked == true && numberEl.checked == true && symbolEl.checked == false ){
        choices += lowercase + numbers
    }   else if (upperEl.checked == false && lowerEl.checked == true && numberEl.checked == false && symbolEl.checked == true ){
        choices += symbols + lowercase
    }   else if (upperEl.checked == true && lowerEl.checked == false && numberEl.checked == true && symbolEl.checked == false ){
        choices += uppercase + numbers
    }   else if (upperEl.checked == true && lowerEl.checked == false && numberEl.checked == true && symbolEl.checked == true ){
        choices += uppercase + numbers + symbols
    }   else if (upperEl.checked == true && lowerEl.checked == true && numberEl.checked == false && symbolEl.checked == true ){
        choices += uppercase + lowercase + symbols
    }  
//If choices is empty when the function is called it will throw an undefine message             
       if (choices == 0) {
        optionsMssgEl() 
      } else {     
// If choices isn't empty the function runs the loop
      for(let i = 0; i < passlenght; i++) {
      let passOneIndex = Math.floor(Math.random() * choices.length)      
      let passTwoIndex = Math.floor(Math.random() * choices.length)
      passOne += choices[passOneIndex]
      passTwo += choices[passTwoIndex]
      }
// For some reason adding this into the loop broke the += and only would post the last character of the password
      firstPassEl.textContent = passOne 
      secondPassEl.textContent = passTwo
      passOne = ""
      passTwo = ""
   }     
} 

//I used and event listener on the click but I coulnd't get around the errors for copying a null string element. The API method was way over my head and
//when I made it work then I ran into the browser permissions issues. I understand document.exceCommand is depricrated but its the only way I could make it work.

  function copyLftBtn() {
    const leftPass = document.getElementById("first-pass-el");
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(leftPass);  
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    copiedMssgEl()
  }

  function copyRgtBtn() {
    const rightPass = document.getElementById("second-pass-el");
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(rightPass);  
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    copiedMssgEl()
  }

  function optionsMssgEl() {
    let optionsMssgEl = document.getElementById("options-mssg");
    optionsMssgEl.className = "show";
    setTimeout(function(){ 
        optionsMssgEl.className = optionsMssgEl.className.replace("show", ""); 
    }, 4000);
  }
  
  function copiedMssgEl() {
    let copiedMssgEl = document.getElementById("copied-mssg");
    copiedMssgEl.className = "show";
    setTimeout(function(){ 
        copiedMssgEl.className = copiedMssgEl.className.replace("show", ""); 
    }, 4000);
  }
