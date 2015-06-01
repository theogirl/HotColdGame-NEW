
$(document).ready (function() {
	$('.userinput').focus();


//-----Global Variables------//
	var userGuesses = [];
	var userScore;
	var userNumber;
	var randomNumber;
	var goodNumber;
	var winner;

//-----Reset values for each new game------//
	newGame();

//-----Loop thru this sequence until the user wins!---//

	$('.userinput').keydown(function(event) { 
		if (event.which == 13) { 
			
			if (!winner) { 
				userNumber = $('.userinput').val();
				goodNumber = validateNumber(userNumber); // validate the number - returns T or F

				if (goodNumber) {
					winner = compareNumber(userNumber);
					recordGuesses();
					updateScore();
					resetInput();
					} 
				else {
					resetInput();
				} // end goodnumber test
			}//end if not winner
			else {
				alert('you already won - start new game?');
			}
		}// end event
	});//end keydown

//-----Start new game on button click---//
	$('.new').click(function() {
		newGame();
	});

 
// -------FUNCTIONS---------//

//-----Resets the default values for each new game and generates a new random number------//
function newGame() {
		userScore = 0;
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
			if (randomNumber === userNumber) {
				alert('you won!');
				return true;
			}
			else {
				alert('you lose!');
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


});
