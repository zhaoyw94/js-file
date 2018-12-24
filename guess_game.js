// create an assigned number
var assignedNum = 4;
// ask user to have a number
var guess = (prompt("Guess a number!"));


//check if correct
if (Number(guess) === assignedNum) {
	alert("You are correct!");

}
// check if higher 
else if (Number(guess) > assignedNum) {
	alert("Too high, Guess again!");

}

else if (Number(guess) < assignedNum) {
	alert("Too low, Guess again!");
}