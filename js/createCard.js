var cardTitleInput = document.getElementById("cardTitleInput");
var cardFrontInput = document.getElementById("cardFrontInput");
var cardBackInput = document.getElementById("cardBackInput");
var createCardBtn = document.getElementById("createCardBtn");
var cardHolder = document.getElementById("cardHolder");
//event listener for create button
createCardBtn.addEventListener("click", createCard);
//function to create card, and add to DOM
function createCard(){
  console.log("This function works");
  console.log(cardHolder, cardTitleInput.value);
  cardHolder.innerHTML += `<div class="notecard">
    <h2>${cardTitleInput.value}</h2>
    <p>${cardFrontInput.value}</p>
  </div>`
}
