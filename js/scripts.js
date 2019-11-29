window.onload = function (){
console.log('Hello from js/scripts.js!');
 //Congratulations Message

var claim = document.getElementById('claim');
var firstName = document.getElementById('inputFirstName');


claim.addEventListener('click', customName);

function customName() {  if(firstName.value !== '') {
    var name = firstName.value;
    var congrats = 'Congratulations  ' + name + '! Please enjoy your treat!';
    var congratsNote = document.querySelector('.congratsNote');
    congratsNote.textContent = congrats;

  }
}

//coffee or tea

randomize.addEventListener (click,result);

  if(document.getElementById("coffee").checked) {
   document.getElementById('imagesource').src='images/freecoffee.jpg';
 } else if (document.getElementById("tea").checked) {
   document.getElementById('imagesource').src='images/freetea.jpg';
 }


 story.textContent = newStory;
  story.style.visibility = 'visible';
}
