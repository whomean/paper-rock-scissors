var newGameBtn = document.getElementById("js-newgame");
var submitPlayerBtn = document.getElementById("js-submit");
var computerScore = 0;
var playerScore = 0;

function hide(a) {
	a.parentNode.classList.add("hidden");
	a.parentNode.nextElementSibling.classList.remove("hidden");
}

newGameBtn.addEventListener("click", function() {
	hide(this);
}
);


 submitPlayerBtn.addEventListener("click", function() {
	hide(this);
}
);

var chosenName = document.getElementById("js-inputname");
var playerName = document.getElementById("js-playername");
var submitButton = document.getElementById("js-submit");
var playAgain = document.getElementById("js-again");

function setPlayerName() {
	playerName.innerHTML = chosenName.value;
}

submitButton.addEventListener("click", function() {
	setPlayerName();
}
);

playAgain.addEventListener("click", function() {
	location.reload();
}
);

function getPlayerChoice(a) {
	return a.id;
}

function setPlayerChoice(a) {
	console.log(document.getElementById("js-playersymbol"));
	if (document.getElementById(a).id == "js-paperbtn") {
		document.getElementById("js-playersymbol").innerHTML = "<i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i>";
		return 1;
	}
	if (document.getElementById(a).id == "js-rockbtn") {
		document.getElementById("js-playersymbol").innerHTML = "<i class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>";
		return 2;
	}
	if (document.getElementById(a).id == "js-scissorbtn") {
		document.getElementById("js-playersymbol").innerHTML = "<i class=\"fa fa-hand-scissors-o\" aria-hidden=\"true\"></i>";
		return 3;
	}
}

function randomNumber() {
	return Math.floor((Math.random() * 3) + 1);
}

function setComputerChoice() {
	var computerChoice = randomNumber();
	if (computerChoice == 1) {
		document.getElementById("js-computersymbol").innerHTML = "<i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i>";
	}
	if (computerChoice == 2) {
		document.getElementById("js-computersymbol").innerHTML = "<i class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>";
	}
	if (computerChoice == 3) {
		document.getElementById("js-computersymbol").innerHTML = "<i class=\"fa fa-hand-scissors-o\" aria-hidden=\"true\"></i>";
	}
	return computerChoice;
}

function count(a) {
	if (a == 10) {
		document.getElementById("js-buttons").classList.add("hidden");
		document.getElementById("js-endgame").classList.remove("hidden");
	}
}

function computerWon() {
	computerScore += 1;
	document.getElementById("js-computerscore").innerHTML = computerScore;
	document.getElementById("js-computersymbol").classList.add("winner");
	document.getElementById("js-computersymbol").classList.remove("loser");
	document.getElementById("js-playersymbol").classList.add("loser");
	document.getElementById("js-playersymbol").classList.remove("winner");
	count(computerScore);
	if (computerScore == 10) {
		document.getElementById("js-winner").innerHTML = "Computer";
	}
}

function playerWon() {
	playerScore += 1;
	document.getElementById("js-playerscore").innerHTML = playerScore;
	document.getElementById("js-playersymbol").classList.add("winner");
	document.getElementById("js-playersymbol").classList.remove("loser");
	document.getElementById("js-computersymbol").classList.add("loser");
	document.getElementById("js-computersymbol").classList.remove("winner");
	count(playerScore);
	if (playerScore == 10) {
		console.log(chosenName.value);
		document.getElementById("js-winner").innerHTML = chosenName.value;
	}
}

function compare(a, b) {
	if (a == b) {
		console.log("remis");
		document.getElementById("js-computersymbol").classList.remove("loser");
		document.getElementById("js-computersymbol").classList.remove("winner");
		document.getElementById("js-playersymbol").classList.remove("loser");
		document.getElementById("js-playersymbol").classList.remove("winner");
	}
	if (a == 1 && b == 2) {
		computerWon();
	}
	if (a == 1 && b == 3) {
		playerWon();
	}
	if (a == 2 && b == 1) {
		playerWon();
	}
	if (a == 2 && b == 3) {
		computerWon();
	}
	if (a == 3 && b == 1) {
		computerWon();
	}
	if (a == 3 && b == 2) {
		playerWon();
	}
}



var paperBtn = document.getElementById("js-paperbtn");
var rockBtn = document.getElementById("js-rockbtn");
var scissorBtn = document.getElementById("js-scissorbtn");

paperBtn.addEventListener("click", function() {
	var a = setComputerChoice();
	var playerChoice = getPlayerChoice(this);
	var b = setPlayerChoice(playerChoice);
	compare(a, b);
	
}
);

rockBtn.addEventListener("click", function() {
	var a = setComputerChoice();
	var playerChoice = getPlayerChoice(this);
	var b = setPlayerChoice(playerChoice);
	compare(a, b);
}
);

scissorBtn.addEventListener("click", function() {
	var a = setComputerChoice();
	var playerChoice = getPlayerChoice(this);
	var b = setPlayerChoice(playerChoice);
	compare(a, b);
}
);



