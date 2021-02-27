var response = 0;
var startButtonsVisability = document.getElementById("startButtons");
var chatBoxVisability = document.getElementById("chatBox");
var nextBackButtonVisability = document.getElementById("nextBackButton");

function startScreen() {
	startButtonsVisability.style.display = "block";
	chatBoxVisability.style.display = "none";
	nextBackButtonVisability.style.display = "none";
}

function startGame() {
	document.getElementById("back").disabled = true;
	document.getElementById("background").style.background = "url('background.png')";
	startButtonsVisability.style.display = "none";
	chatBoxVisability.style.display = "block";
	nextBackButtonVisability.style.display = "block";
	document.getElementById("message").style.fontStyle = "italic";
}
	
function nextScreen() {response += 1; screens();}
function backScreen() {response -= 1; screens();}

function screens() {
	// Screen 1
	if (response == 0) {
		document.getElementById("character").innerHTML = "Me"; 
		document.getElementById("message").innerHTML = "I was sitting in my living room watching TV, when all of a sudden a sudden a strange man walked into my house."; 
		document.getElementById("background").style.background = "url('background.png')"; 
		document.getElementById("message").style.fontStyle = "italic"; 
		document.getElementById("back").disabled = true;
	}
	// Screen 2
	if (response == 1) {
		document.getElementById("character").innerHTML = "???"; 
		document.getElementById("message").innerHTML = "Hello!";
		document.getElementById("background").style.background = "url('character1-2.png'), url('background.png')"; 
		document.getElementById("message").style.fontStyle = "normal"; 
		document.getElementById("back").disabled = false;
	}
	// Screen 3
	if (response == 2) {
		document.getElementById("character").innerHTML = "You"; 
		document.getElementById("message").innerHTML = "Who are you, and how did you get into my house?"; 
		document.getElementById("background").style.background = "url('character1-1.png'), url('background.png')";
		document.getElementById("message").style.fontStyle = "normal"; 
		document.getElementById("back").disabled = false;
	}
	// Screen 4
	if (response == 3) {
		document.getElementById("character").innerHTML = "Bob"; 
		document.getElementById("message").innerHTML = "My name is Bob, and I picked the lock on your front door."; 
		document.getElementById("background").style.background = "url('character1-2.png'), url('background.png')";
		document.getElementById("message").style.fontStyle = "normal"; 
		document.getElementById("back").disabled = false;
	}
	// Screen 5
	if (response == 4) {
		document.getElementById("character").innerHTML = "Me"; 
		document.getElementById("message").innerHTML = "Can you please leave before I call the cops?"; 
		document.getElementById("background").style.background = "url('character1-1.png'), url('background.png')";
		document.getElementById("message").style.fontStyle = "normal";
		document.getElementById("back").disabled = false;
	}
	// Screen 6
	if (response == 5) {
		document.getElementById("character").innerHTML = "Bob";
		document.getElementById("message").innerHTML = "No!";
		document.getElementById("background").style.background = "url('character1-2.png'), url('background.png')";
		document.getElementById("message").style.fontStyle = "normal";
		document.getElementById("back").disabled = false;
	// Screen 7
	if (response == 6) {
		document.getElementById("character").innerHTML = "Me";
		document.getElementById("message").innerHTML = "";
	}
	// End
	if (response == 7) {response -= 1;}
}

startScreen();
