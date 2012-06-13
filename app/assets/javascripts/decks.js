
//This function adds fields in _form
function augmentFormToAddFields(){
  $(document).ready(function(){
    $('form').on('click', '.add_fields', function(event) {
      var regexp, time;
      time = new Date().getTime();
      regexp = new RegExp($(this).data('id'), 'g');
      $(this).before($(this).data('fields').replace(regexp, time));
      return event.preventDefault();
    });
  });
}



//This function allows the users to control with the keyboard arrows
function mapKeys(){
  $(document).keydown(function(e){

      if (e.keyCode == 37) {
         $("#previous-button").click();
         return false;
      }

      if (e.keyCode == 38) {
         $("#card-partial").click();
         return false;
      }

      if (e.keyCode == 39) {
         $("#next-button").click();
         return false;
      }

  });
}


//The Function Used for flipping a card
function flipCard(){
    clickCounter = 0;
      $("#card-partial").click(function(){

        if (clickCounter == 1){
          clickCounter = -1;
          $("a#next-button").click();
        }

        backOfCard = $("#card-partial-content h1").data('back');
        backOfCard == "" ? $("#card-partial-content h1").html("Back is Blank") : $("#card-partial-content h1").html(backOfCard);

        clickCounter += 1;
    })
}


//The function responsible for changing the instruction header
function changeInstruction(){
    currentCard = $("#current-card").html();
    deckTotal = $("#deck-total").html();

    $("#card-partial").click(function(){
      if( currentCard === deckTotal ){
          $("#instruction-bar h4").text("You've Finished the Deck!");
      }else{
          $("#instruction-bar h4").text("Click Again to Continue");
      }
    });
}


//call functions
$(document).ready( function(){
  changeInstruction();
  flipCard();
  mapKeys();
  augmentFormToAddFields();
});


