//LAST ANNOYING THING, WHEN YOU WIN, THE NEW COLORS BUTTON OFFSETS THE MIDDLE MESSAGE SO IT'S NOT CNTERED

// dom
var squares = document.querySelectorAll(".square");
var textColor = document.getElementById("color");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var buttons = document.querySelectorAll("button");
// var reset = document.querySelector("#reset");

// new vars
var colors = [];
var pColor;
var nSquares = squares.length;

// initiate
init();

// main functions

function init(){
	buttonSetUp();
	squareSetUp();
	resetGame();

}

function resetGame(){
	reset.textContent = "New Colors";
	message.textContent = "";
	colors = genColors();
	pColor = pickColor();
	textColor.textContent = pColor;
	h1.style.backgroundColor = "#465182";

	for (var i=0; i<squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	};
}

// set up helper functions

function buttonSetUp(){
	for(var i=0; i<buttons.length; i++){
		buttons[i].addEventListener("click",function() {
			if(this.id === "easy"){
				nSquares = 3;
				easy.classList.add("selected");
				hard.classList.remove("selected");
			}else if(this.id==="hard"){
				hard.classList.add("selected");
				easy.classList.remove("selected");
				nSquares = squares.length;
			}
			resetGame();
		});
	}

}

function correct(){
	reset.textContent = "Fancy one more?";
	h1.style.backgroundColor = pColor
	for(var i=0; i<nSquares; i++){
		squares[i].style.backgroundColor = pColor;
	}
}

function squareSetUp(){
	for(var i=0; i<squares.length; i++) {
		squares[i].addEventListener("click", function(){
			// get color
			var clicked = this.style.backgroundColor;
			// see if it is picked
			// if not, it disappeares and can't be clicked
			if(clicked === pColor){
				correct();
				message.textContent = ("That's what I'm talking about!");
			}else{
				this.style.backgroundColor = "transparent";
				message.textContent = ("Nice try sugarplum, try again.");
			}
		});
	}
}

// color relate helper functions
function pickColor(){
	var random = Math.floor(Math.random() * nSquares)
	return colors[random];
}

function genColors(){
	colors = [];
	for (var i=0; i<nSquares; i++) {
		colors.push(randColor());
	}
	return colors;
}

function randColor(){
	color = ""
	for (var i=0; i<3; i++){
		color = color + Math.floor(Math.random() *256)+", "; 
	}
	color = "rgb(" + color.substring(0, color.length-2) + ")";
	return color
};
