function btn() {
    location.reload();
}


document.querySelector("h1").innerText = "Your love score!";


var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomSource = "images/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);
//===================================//


//===================================//
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //sa random number//

var randomSource2 = "images/dice" + randomNumber2 + ".png"; //sa random source//        

var image2 = document.querySelectorAll("img")[1]; //sa image

image2.setAttribute("src", randomSource2); //sa sources




if (randomNumber > randomNumber2) { //function para ma activate ang sources
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber === randomNumber2) {
    document.querySelector("h1").innerHTML = "draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
