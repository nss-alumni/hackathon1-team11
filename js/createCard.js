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
  cardHolder.innerHTML += `
  <div class="outterCard">
  <div class="notecard">
  <div class="front">
    <h2>${cardTitleInput.value}</h2>
    <p>${cardFrontInput.value}</p>
  </div>
  <div class="back">
    <p>${cardBackInput.value}</p>
    <form>


  </div>
  </div>
    <input type="radio" name="helpful" value="helpful"> Helpful
    <input type="radio" name="notHelpful" value="notHelpful"> Not Helpful<br>
    </form>
    <br>
    <input type="radio" name="up" value="voteUp"> Vote Up
    <input type="radio" name="down" value="voteDown"> Vote Down<br>
    </form>

  </div>
  `

}
