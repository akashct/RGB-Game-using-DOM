var numSquares;
var colors = [];
var h1_tag = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var body = document.querySelector("body");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".modeButton")

init();

function init() {
	setModebtn();
	setPage();
}


function setModebtn(){
	for(var k=0; k<modeButton.length; k++) {
		modeButton[k].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}

			resetPage();
			

		});
	}
}

function resetPage() {
		h1_tag.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";
		resetButton.textContent = "New Colors";
		//Generate the random colors again.
		colors = generateRandomColors(numSquares);
		//Generate color to pick.
		pickedColor = colors[pickColor()];
		//re display the picked color in header.
		colorDisplay.textContent = pickedColor;
		//change colors of squares.
		for(var i=0; i<squares.length; i++) {
		//Add initial colors to squares
			if(colors[i]) {
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			}
			else {
				squares[i].style.display = "none";
			}
		}
}



resetButton.addEventListener("click", function() {
	h1_tag.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	modeButton[0].classList.remove("selected");
	modeButton[1].classList.add("selected");
	//Generate the random colors again.
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//Generate color to pick.
	pickedColor = colors[pickColor()];
	//re display the picked color in header.
	colorDisplay.textContent = pickedColor;
	//change colors of squares.
	for(var i=0; i<squares.length; i++) {
	//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});	


function setPage() {
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares.
		squares[i].addEventListener("click", function() {
			//grab a color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare the clicked square color with picked color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1_tag.style.backgroundColor = clickedColor;
				changeColors(pickedColor);
			} 
			else {
				//setting the square to background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color) {
	for(var j=0;squares.length;j++) {
				squares[j].style.backgroundColor = color;
			}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return random;
}

function generateRandomColors(num) {
	//Make an Array
	var arr = [];

	for(var i=0; i<num; i++) {
		//add random colors to the array
		arr.push(randomColor());
	}
	

	//return that array
	return arr;
}


function randomColor() {
	//pick a red from 0-255
	var r =	Math.floor(Math.random()*256)
	//pick a green from 0-255
	var g =	Math.floor(Math.random()*256)
	//pick a Blue from 0-255
	var b =	Math.floor(Math.random()*256)

	//rgb(r,g,b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}