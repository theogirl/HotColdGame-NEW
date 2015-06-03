
$(document).ready (function() {
  $('.userinput').focus();

//-----Declare Global Variables------//
  var randomNumber = getRandomInt(1,100);
  var userScore = 0;
  var userGuesses = [];
  var winner = false;
  var valid = false;
  var userNumber;

//-----Listen to every Enter event on that input field--//

$('.userinput').keydown(function(event) { 
		if (event.which == 13) {
			userNumber = $('.userinput').val();
			valid = validateNumber(userNumber);
			  if (valid) {
			  	recordGuesses();
			  	updateScore();
			  	winner = compareNumber(userNumber);
			  		if (winner) {
			  			alert('Yippee, you got it!!');
			  			resetInput();
			  			newGame();
			  		}
			  		else {
			  			resetInput();
			  		}
			  }//end if valid
			  else {
			  	resetInput();
			  }
		}// end if 13
}) // end keydown event

//-----Start new game on button click at any time---//
	$('.new').click(function() {
		newGame();
	});

 

// -------FUNCTIONS---------//

//-----Resets the default values for each new game and generates a new random number------//
function newGame() {
  alert('New game starting!');
  userScore = 0;
  userGuesses = [];
  winner = false;
  $('.userScore').text(''); // reset to blank
  $('.userGuesses').text(''); // reset to blank
  $('.userinput').focus();
  randomNumber = getRandomInt(1, 100); // generate a random integer btwn 1 and 100	
} 


//---Generates a new random number------//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 


function validateNumber(userInput) {

	if (userNumber == '') { // make sure input is not empty
		alert('Please enter something!');
		return false;
	}
	else if (userNumber% 1 !== 0) { // make sure input is not a decimal value
		alert('Please enter an integer!');
		return false;
	}
	else if (isNaN(userNumber)) { // make sure input is not a string
		alert('Please enter an actual number!');
		return false;
	}
	else if ((userNumber < 1) || (userNumber > 100)) { // make sure input is not outside of specified range
		alert('Please enter a number between 1 and 100 only!');
		return false;
	}
	else {
		return true;
	} 
} 

function compareNumber(userInput) {
  var diff = Math.abs(userNumber-randomNumber);
		if (userNumber == randomNumber) 
			return true;
			
		else if (diff <= 3) {
				alert('Super Hot!');
				return false;
			}
		else if (diff <= 6) {
				alert('Hot!');
				return false;
			}
		else if (diff <= 18) {
				alert('Warm!');
				return false;
			}
		else if (diff <= 30) {
				alert('Tepid!');
				return false;
			}
		else if (diff <= 50) {
				alert('Cool!');
				return false;
			}
		else if (diff <= 80) {
				alert('Cold!');
				return false;
			}
		else if (diff <= 95) {
				alert('Frozen!');
				return false;
			}
} // end compareNumber function


function updateScore() {
  userScore++; // increase their attempts count by 1
  $('.userScore').text(userScore);
}

function recordGuesses() {
 // add user's guess to array
  userGuesses.push(userNumber); // add user's guess to array
  $('.userGuesses').text(userGuesses);
}


function resetInput() {
  $('.userinput').val(''); // return input field to blank
  $(this).focus();
}


}); //end document.ready
