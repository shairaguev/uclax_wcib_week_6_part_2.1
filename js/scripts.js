console.log('Hello from js/scripts.js!');


   randomize.addEventListener('click', result);

  if(document.getElementById("coffee").checked) {
   document.getElementById('imagesource').src='images/coffee.jpg';
 } else if (document.getElementById("tea").checked) {
   document.getElementById('imagesource').src='images/tea.jpg';
 }




 story.textContent = newStory;
  story.style.visibility = 'visible';
}
