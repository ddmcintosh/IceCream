"use strict";

window.onload = function() {
document.getElementById("options").style.display = "none";
document.getElementById("cupCheck").onclick = function()

{
document.getElementById("options").style.display = "block";
}

    document.getElementById("coneCheck").onclick = function()
{
    document.getElementById("options").style.display = "none";
}

document.getElementById("submitBtn").onclick = totalCost;
}



function totalCost() {
let numOfScoopsInput = document.getElementById("numOfScoopsInput");
let newScoop = numOfScoopsInput.value;
let oneScoop = 2.25;
//extra scoop 1.25;
let totalScoop = ((newScoop -1 )* 1.25) + oneScoop;
let sprinklesCost = 0;
let whipCreamCost = 0;
let hotFudgeCost = 0;
let cherryCost = 0;

let sprinkles = document.getElementById("sprinklesCheckbox").checked;
if (sprinkles) {
    sprinklesCost= .50;
} 
else {
    sprinklesCost = 0;
}

let whipCream = document.getElementById("whipCreamCheckbox").checked;
if (whipCream) {
    whipCreamCost = .25;
}
else {
    whipCreamCost = 0;
}

let hotFudge = document.getElementById("hotFudgeCheckbox").checked;
if (hotFudge) {
    hotFudgeCost = 1.25;
}
else { 
  hotFudgeCost = 0;
}


let cherry = document.getElementById("cherryCheckbox").checked;
if (cherry) {
    cherryCost = .25;
}
else {
    cherryCost = 0;
}

let basePrice = document.getElementById("basePrice");
let add = totalScoop + sprinklesCost + whipCreamCost + hotFudgeCost + cherryCost;

basePrice.innerHTML = " Base price: $ " + add;

let tax = 0.08 * add;
let taxTotal = document.getElementById("tax");
taxTotal.innerHTML =  " Tax: $ " + tax;

let totalCost = add + tax;
let total = document.getElementById("totalDue");
total.innerHTML = " Total due: $ " + totalCost;



}